import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container md:w-11/12 mx-auto">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-base md:text-xl">
              Register Now
            </h2>
            <form>
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
              <button className="btn bg-slate-200 hover:bg-slate-400 w-full">
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
