import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const { oldUser, signInWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    oldUser(email, password)
      .then((res) => {
        // console.log(res.user);
        toast.success("Successfully Logged in user");
        setLoading(false);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Successfully logged in user with google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div>
      <Helmet>
        <title>LogIn-Movie Portal</title>
      </Helmet>
      <div className="md:w-10/12 mx-auto mb-24 mt-28">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="w-[50%]">
            <img src="/assets/login.png" alt="" className="w-full h-full" />
          </div>
          <div className="card dark:bg-dark-background/40 bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
            <div className="card-body  dark:text-white">
              <h2 className="font-bold text-center text-base md:text-xl">
                LogIn Now
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    // name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  <span className="text-red-500 mt-3">
                    {errors.email?.type === "required" &&
                      "Valid email is needed"}
                  </span>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    // name="password"
                    {...register("password", { required: true })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <span className="text-red-500 mt-3">
                    {errors.password?.type === "required" &&
                      "Valid Password is needed"}
                  </span>

                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button className="btn hover:bg-dark-primary dark:hover:bg-light-primary bg-light-primary dark:bg-dark-primary text-white">
                    Login
                  </button>
                </div>
              </form>
              <div>
                <p className="text-sm mb-2">LogIn with google</p>
                <button
                  className="btn bg-slate-200 hover:bg-slate-200/70 w-full dark:text-black"
                  onClick={handleGoogleBtn}
                >
                  <FcGoogle className="text-lg" /> Google
                </button>
              </div>
              <div className="text-sm mt-3">
                <p>
                  Don't Have An Account?
                  <Link
                    to="/register"
                    className="text-light-primary font-bold ml-2"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
