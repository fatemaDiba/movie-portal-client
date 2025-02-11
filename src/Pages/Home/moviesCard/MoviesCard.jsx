import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";

const MoviesCard = () => {
  const moviesData = useLoaderData();

  return (
    <div className="container w-10/12 mx-auto mb-20">
      <div className="flex flex-col justify-center items-center mb-14 dark:text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">Featured Movies</h1>
        <p className="text-sm md:text-base text-center md:w-[60%] mx-auto">
          Discover our handpicked selection of the latest and most popular
          movies, showcasing top-rated performances, gripping stories, and
          breathtaking visuals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {moviesData.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/all-movies"
          className="btn bg-light-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-dark-primary"
        >
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default MoviesCard;
