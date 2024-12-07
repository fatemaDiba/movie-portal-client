import { Helmet } from "react-helmet-async";
import Card from "./Home/moviesCard/Card";
import { useLoaderData } from "react-router-dom";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container w-9/12 mx-auto mb-20 mt-10">
      <Helmet>
        <title>All Movies-Movie Portal</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-xl md:text-4xl font-bold mb-2 ">
          Explore All Movies
        </h2>
        <p className="text-center text-sm md:text-base w-[75%]">
          Discover an extensive library of movies across various genres and
          eras. Whether you’re in the mood for action, romance, comedy, or
          drama, there’s something here for every movie lover.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default AllMovies;
