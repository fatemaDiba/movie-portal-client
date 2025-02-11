import { Helmet } from "react-helmet-async";
import Card from "./Home/moviesCard/Card";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllMovies = () => {
  const data = useLoaderData();
  const [movies, setMovies] = useState(data);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);
  };

  const filteredMovie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(query.toLowerCase());
  });

  const handleSortByRating = (e) => {
    const sortValue = e.target.value;

    fetch("https://movie-protal-server.vercel.app/all-movies/sort-by-rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sortValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };

  return (
    <div className="container w-9/12 mx-auto mb-20 mt-28">
      <Helmet>
        <title>All Movies-Movie Portal</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center mb-5 dark:text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 ">
          Explore All Movies
        </h2>
        <p className="text-center text-sm md:text-base md:w-[75%]">
          Discover an extensive library of movies across various genres and
          eras. Whether you’re in the mood for action, romance, comedy, or
          drama, there’s something here for every movie lover.
        </p>
      </div>
      {/* search bar */}
      <div className="w-[75%] md:w-[70%] mx-auto mb-20 flex md:flex-row justify-center flex-col gap-5">
        <label className="input input-bordered dark:border-white/50 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {/* sort bar */}
        <div>
          <select
            onChange={handleSortByRating}
            className="select select-bordered w-full dark:border-white/60"
          >
            <option defaultValue value="">
              Sort by (Default)
            </option>
            <option className="font-semibold" value="1">
              Low Rated
            </option>
            <option className="font-semibold" value="-1">
              High Rated
            </option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMovie.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default AllMovies;
