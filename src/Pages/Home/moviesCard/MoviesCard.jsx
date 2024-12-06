import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";

const MoviesCard = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  return (
    <div className="container w-10/12 mx-auto mb-20">
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">Featured Movies</h1>
        <p className="text-base md:text-lg text-center md:w-[60%] mx-auto">
          Discover our handpicked selection of the latest and most popular
          movies, showcasing top-rated performances, gripping stories, and
          breathtaking visuals
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {moviesData.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/all-movies"
          className="btn border-0 bg-gradient-to-b from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
        >
          See All Movies
        </Link>
      </div>
    </div>
  );
};

export default MoviesCard;
