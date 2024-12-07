import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

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
      <div className="container md:w-11/12 mx-auto">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
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
                  {errors.email?.type === "required" && "Valid email is needed"}
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
                <button className="btn bg-orange-500 hover:bg-orange-600 text-white">
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mb-2">LogIn with google</p>
              <button
                className="btn bg-slate-200 hover:bg-slate-400 w-full"
                onClick={handleGoogleBtn}
              >
                Google
              </button>
            </div>
            <div className="text-sm mt-3">
              <p>
                Don't Have An Account?
                <Link to="/register" className="text-orange-600 font-bold ml-2">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
