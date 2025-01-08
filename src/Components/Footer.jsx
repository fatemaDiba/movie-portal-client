import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-black dark:text-white/50  bg-slate-200 dark:bg-dark-background">
      <div className="w-10/12 mx-auto py-10">
        <div>
          <div className="flex flex-col items-center justify-center">
            <img src="/assets/logo.png" alt="" className="md:w-20 w-14 mb-3" />
            <h3 className="text-xl md:text-3xl dark:text-white/90 font-bold mb-2">
              MOVIE PORTAL
            </h3>
            <p className="md:w-[45%] w-[90%] text-center text-sm md:text-base ">
              A Free Theater for all has begun. Enjoy instant access to 6000+
              Movies for the whole family anywhere, on any device.
            </p>
          </div>
          <div className="border-t-2 border-black/30 dark:border-[#09080F1A]  mt-10 "></div>
          <footer className="grid grid-cols-2 md:grid-cols-3 gap-10 p-10 items-start">
            <nav className="flex flex-col gap-1 md:justify-self-center">
              <p className="font-semibold text-base md:text-lg dark:text-white/90  mb-2">
                Contact
              </p>
              <Link
                to="/about"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                About
              </Link>
              <a
                href="https://mail.google.com/"
                className="link link-hover  hover:text-light-primary  text-sm md:text-base"
              >
                movieportal@gmail.com
              </a>
              <p className=" hover:text-light-primary  text-sm md:text-base">
                +0886372218
              </p>
              <Link
                to="/blogs"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Movie Portal Blogs
              </Link>
            </nav>
            <nav className="flex flex-col gap-1 md:justify-self-center">
              <p className="font-semibold text-base md:text-lg dark:text-white/90 mb-2">
                Support
              </p>
              <Link
                to="/privacy-policy"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Privacy & Legal
              </Link>
              <Link
                to="/accessibility"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Accessibility
              </Link>
              <Link
                to="/cookies"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Manage Cookies
              </Link>
            </nav>
            <nav className="flex flex-col gap-1 lg:justify-self-center ">
              <p className="font-semibold text-base md:text-lg dark:text-white/90 mb-2">
                Company
              </p>
              <a
                href="/"
                className="link link-hover  hover:text-light-primary  text-sm md:text-base"
              >
                Movie Portal
              </a>
              <a
                href="/all-movies"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Watch Movies
              </a>
              <a
                href="/reviews"
                className="link link-hover hover:text-light-primary  text-sm md:text-base"
              >
                Reviews
              </a>
            </nav>
          </footer>

          <div className="border border-t-1 border-black/30 dark:border-white/30 mb-10 mt-10 w-full"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm md:text-base dark:text-white/70">
            <div className="flex flex-col md:flex-row  gap-4">
              <p className=" ">
                © {new Date().getFullYear()} Adventure Page. All Rights
                Reserved.
              </p>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <a href="https://web.facebook.com/" target="_blank">
                <FaFacebook className="text-2xl hover:scale-150 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://x.com/" target="_blank">
                <FaTwitter className="text-2xl hover:scale-150 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedinIn className="text-2xl hover:scale-150 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <IoLogoYoutube className="text-2xl hover:scale-150 transition-transform delay-150 duration-300 ease-out" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <RiInstagramFill className="text-2xl hover:scale-150 transition-transform delay-150 duration-300 ease-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
