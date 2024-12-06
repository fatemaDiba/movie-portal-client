import { Helmet } from "react-helmet-async";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const MovieDetails = () => {
  const movieData = useLoaderData();
  const { _id, poster, title, genre, duration, year, summary, rating } =
    movieData;
  const navigate = useNavigate();

  const handleDeleteBtn = (id) => {
    fetch(`http://localhost:5000/all-movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Movie successfully deleted");
          navigate("/all-movies");
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Details-Movie Portal</title>
      </Helmet>
      <div className="container w-8/12 mx-auto mb-20">
        <div className="p-10 bg-base-200 rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img src={poster} className="w-[40%] rounded-lg shadow-2xl" />
            <div className="space-y-3">
              <h1 className="text-xl md:text-3xl font-bold mb-5">{title}</h1>

              <p className="text-base md:text-lg font-semibold">
                Genre: {genre}
              </p>
              <p className="text-base md:text-lg font-semibold">
                Duration: {duration}
              </p>
              <p className="text-base md:text-lg font-semibold">
                Release Year: {year}
              </p>
              <p className="text-base md:text-lg font-semibold">
                Rating: {rating}
              </p>
              <p className="text-base md:text-lg font-semibold">
                Summary: {summary}
              </p>

              <div className="flex flex-col md:flex-row gap-5 pt-10">
                <button
                  onClick={() => handleDeleteBtn(_id)}
                  className="btn btn-primary"
                >
                  Delete <RiDeleteBin6Fill className="text-lg" />
                </button>
                <button className="btn btn-primary">
                  Add To Favorite <FaHeartCirclePlus className="text-lg" />
                </button>
                <Link to="/update" className="btn btn-primary">
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
