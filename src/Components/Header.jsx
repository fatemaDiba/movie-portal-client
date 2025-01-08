import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import { MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../Auth/ThemeProvider";
import { LuMoon } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

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
          <NavLink to="/my-favorites">My Favorites</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-50 w-full drop-shadow-xl top-0 bg-light-background/80 dark:bg-dark-background/70 py-2">
      <div className="">
        <div className="navbar w-10/12 mx-auto">
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
            <a
              href="/"
              className="text-xl flex items-center dark:text-white md:text-2xl font-bold"
            >
              <img
                src="/assets/logo.png"
                alt=""
                className="md:w-12 w-10 mr-2"
              />
              MOVIE PORTAL
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal dark:text-white px-1 gap-6 text-sm">
              {navList}
            </ul>
          </div>

          <div className="navbar-end">
            <div className="text-2xl mr-3 cursor-pointer hover:scale-105 transition-transform duration-400 ">
              {theme === "light" ? (
                <LuMoon onClick={() => setTheme("dark")} />
              ) : (
                <MdOutlineWbSunny
                  className="dark:text-white"
                  onClick={() => setTheme("light")}
                />
              )}
            </div>
            {user ? (
              <div className="flex gap-4 ">
                <Tooltip
                  anchorSelect="#profile-pic"
                  place="bottom"
                  className="!p-2 !rounded-lg !bg-gray-700 !text-white !h-24"
                  clickable
                >
                  <div className="flex flex-col justify-center items-center space-y-2 py-2">
                    <p className="font-bold text-md">{user?.displayName}</p>
                    <button
                      onClick={handleLogOutBtn}
                      className="px-4 py-2 text-white font-semibold rounded-lg hover:bg-slate-500 bg-light-primary"
                    >
                      Logout
                    </button>
                  </div>
                </Tooltip>

                <div
                  tabIndex={0}
                  role="button"
                  id="profile-pic"
                  className="btn btn-ghost dark:border-white/70 btn-circle avatar"
                >
                  <div className="md:w-10 w-8 rounded-full relative">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="bg-slate-200 text-sm px-4 py-2 rounded-md font-semibold dark:text-black hover:bg-slate-400 ml-3"
                >
                  LogIn
                </Link>
                <Link
                  to="/register"
                  className="bg-slate-200 text-sm px-4 py-2 rounded-md font-semibold dark:text-black hover:bg-slate-400 ml-3"
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
