import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mb-5 mx-auto">
      <div className="relative w-full h-[50vh] md:h-[90vh]">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg w-9/12 md:max-w-3xl space-y-4 dark:text-white">
            <h1 className="text-xl md:text-4xl font-bold">
              Free Movies to Watch, Anytime Anywhere.
            </h1>
            <p className="text-base md:text-  md:w-[75%] mx-auto">
              The search is over!! Let Movie Portal help you find the perfect
              movie to watch tonight for free.
            </p>
            <Link
              to="/all-movies"
              className="btn border-0 bg-light-primary hover:bg-dark-primary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
            >
              Watch Free
            </Link>
          </div>
        </div>
        <div className="carousel w-full h-[45vh] md:h-[75vh] rounded-lg">
          <div id="slide1" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m1.jpg" className="w-full rounded-lg " />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m2.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m4.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m3.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
