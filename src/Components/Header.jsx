import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        toast.success("User Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-movies">All Movies</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add-movie">Add Movie</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/my-favorite">My Favorite</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/my-profile">My profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="container mx-auto md:w-11/12 py-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow "
              >
                {navList}
              </ul>
            </div>
            <a className="text-xl md:text-2xl font-bold ml-3">MOVIE PORTAL</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1 gap-6 text-sm">{navList}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <button
                onClick={handleLogOutBtn}
                className="btn bg-slate-200 hover:bg-slate-400 ml-3"
              >
                Log Out
              </button>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="btn bg-slate-200 hover:bg-slate-400 ml-3"
                >
                  LogIn
                </Link>
                <Link
                  to="/register"
                  className="btn bg-slate-200 hover:bg-slate-400 ml-3"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
