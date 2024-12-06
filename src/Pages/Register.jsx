import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { newUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!password.match(regex)) {
      toast.error("Please give A Valid Password ");
      return;
    }

    newUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/");
        // database er kaj baki
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        toast.success("Successfully registered with google");
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
        <title>Register-Movie Portal</title>
      </Helmet>
      <div className="container md:w-11/12 mx-auto">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-base md:text-xl">
              Register Now
            </h2>
            <form onSubmit={handleRegisterBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="photo url"
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
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 mb-4">
                <button className="btn bg-orange-500 hover:bg-orange-600 text-white">
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className="text-sm mb-2">Register with google</p>
              <button
                onClick={handleGoogleBtn}
                className="btn bg-slate-200 hover:bg-slate-400 w-full"
              >
                Google
              </button>
            </div>
            <div className="text-sm mt-3">
              <p>
                Already Have An Account?
                <Link to="/login" className="text-orange-600 font-bold ml-2">
                  LogIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
