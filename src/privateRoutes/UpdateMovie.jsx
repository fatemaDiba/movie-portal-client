import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../Auth/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const movieData = useLoaderData();
  const { _id, poster, title, summary, year, duration, rating, genre } =
    movieData;
  const [updatedRating, setUpdatedRating] = useState(rating);

  const ratingChanged = (newRating) => {
    setUpdatedRating(newRating);
  };

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const year = form.year.value;
    const summary = form.summary.value;
    const userEmail = user.email;

    if (!title || title.length < 2) {
      toast.error("Please give valid title!");
      return;
    }
    if (!duration || duration < 60) {
      toast.error("please give duration more than 60");
      return;
    }
    if (updatedRating < 1) {
      toast.error("Please give a rating!");
      return;
    }
    if (!summary || summary.length < 10) {
      toast.error("Please give a Summary at least 10 character!");
      return;
    }

    const movieUpdateData = {
      poster,
      title,
      genre,
      duration,
      year,
      summary,
      updatedRating,
      userEmail,
    };

    fetch(`http://localhost:5000/all-movies/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieUpdateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully Updated Movie");
        form.reset();
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Movie-Movie Portal</title>
      </Helmet>
      <div className="container md:w-11/12 mx-auto mb-20">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-base md:text-xl">
              Update Your Movie Information Now
            </h2>
            <form onSubmit={handleUpdateBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Poster</span>
                </label>
                <input
                  type="url"
                  name="poster"
                  placeholder="poster url"
                  className="input input-bordered"
                  defaultValue={poster}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="movie title"
                  className="input input-bordered mb-5"
                  defaultValue={title}
                  required
                />
              </div>
              <select
                className="select select-bordered w-full"
                required
                defaultValue={genre}
                name="genre"
              >
                <option value="" disabled selected>
                  Genre
                </option>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Romance</option>
                <option>Actions</option>
                <option>Adventure</option>
                <option>Thriller</option>
                <option>Science Fiction</option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration</span>
                </label>
                <input
                  type="number"
                  name="duration"
                  placeholder="duration"
                  defaultValue={duration}
                  required
                  className="input input-bordered mb-5"
                />
              </div>
              <select
                className="select select-bordered w-full"
                required
                name="year"
                defaultValue={year}
              >
                <option value="" disabled selected>
                  Release Year
                </option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>

              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                value={updatedRating}
              />

              <textarea
                placeholder="Summery"
                name="summary"
                className="textarea textarea-bordered textarea-base w-full"
                defaultValue={summary}
                required
              ></textarea>

              <div className="form-control mt-6 mb-4">
                <button className="btn bg-purple-500 hover:bg-purple-600 text-white">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovie;
