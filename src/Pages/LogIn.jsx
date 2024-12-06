import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const LogIn = () => {
  const { oldUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogInBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    oldUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Successfully logged in user with google");
        // navigate(location?.state ? location.state : "/");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
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
            <form onSubmit={handleLogInBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
