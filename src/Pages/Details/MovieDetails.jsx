import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
const MovieDetails = () => {
  const movieData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, poster, title, genre, duration, year, summary, rating } =
    movieData;
  const navigate = useNavigate();

  const handleDeleteBtn = (id) => {
    fetch(`https://movie-protal-server.vercel.app/all-movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Movie successfully deleted");
          navigate("/all-movies");
        }
      });
  };
  const handleFavBtn = () => {
    const favMovie = {
      ...movieData,
      userEmail: user.email,
    };
    fetch("https://movie-protal-server.vercel.app/my-favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error("Movie already exists");
          return;
        }
        toast.success("Successfully added movie to favorite list");
        navigate("/my-favorites");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Details-Movie Portal</title>
      </Helmet>
      <div className="container w-10/12 mx-auto mb-20">
        <div className="p-10 bg-base-200 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img src={poster} className="w-[50%] rounded-lg shadow-2xl" />
            <div className="space-y-3  dark:text-white">
              <h1 className="text-xl md:text-3xl text-black  dark:text-white font-bold mb-5">
                {title}
              </h1>

              <p className=" text-base md:text-lg font-semibold">
                Genre:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  {genre}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Duration:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  {duration}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Release Year:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  {year}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Rating:
                <span className="font-semibold ml-2  text-sm md:text-base">
                  {rating}
                </span>
              </p>
              <p className="text-base md:text-lg font-semibold">
                Summary:
                <span className="font-semibold ml-2 text-sm md:text-base">
                  {summary}
                </span>
              </p>

              <div className="flex flex-col md:flex-row gap-5 flex-wrap pt-10 ">
                <button
                  onClick={() => handleDeleteBtn(_id)}
                  className="btn btn-primary  dark:text-white"
                >
                  Delete <RiDeleteBin6Fill className="text-lg" />
                </button>
                <button
                  onClick={handleFavBtn}
                  className="btn btn-primary  dark:text-white"
                >
                  Add To Favorite <FaHeartCirclePlus className="text-lg" />
                </button>
                <Link
                  to={`/update/${_id}`}
                  className="btn btn-primary  dark:text-white"
                >
                  Update Movie <RxUpdate className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
