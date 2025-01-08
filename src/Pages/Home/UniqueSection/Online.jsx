import { Link } from "react-router-dom";

const Online = () => {
  return (
    <div className="w-10/12 mx-auto mb-20">
      <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
        <div className="self-center w-1/2 lg:w-1/3 mx-auto md:mx-0">
          <img src="/assets/phn.png" alt="" className="w-full h-full mx-auto" />
        </div>
        <div className="md:w-1/2  text-center md:text-start dark:text-white">
          <h2 className="text-xl md:text-4xl font-bold mb-3">
            It has never been easier to watch free movies online.
          </h2>
          <p className="text-sm md:text-base mb-3">
            Once you register for a free account with Movie Portal, we’ll keep
            your place from screen to screen as long as you’re signed in. No
            matter what device you choose, your free movies will pick up where
            you left off with ease.
          </p>
          <Link
            to="/all-movies"
            className="btn border-0  bg-light-primary hover:bg-dark-primary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Watch Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Online;
