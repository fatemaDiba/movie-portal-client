import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleAddBtn = (e) => {
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
    if (rating < 1) {
      toast.error("Please give a rating!");
      return;
    }
    if (!summary || summary.length < 10) {
      toast.error("Please give a Summary at least 10 character!");
      return;
    }
    const movieAddFormData = {
      poster,
      title,
      genre,
      duration,
      year,
      summary,
      rating,
      userEmail,
    };

    fetch("http://localhost:5000/add-movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieAddFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully Added Movie");
        form.reset();
        navigate("/all-movies");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Movie-Movie Portal</title>
      </Helmet>
      <div className="container md:w-11/12 mx-auto mb-20">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-base md:text-xl">
              Add Your Movie Information Now
            </h2>
            <form onSubmit={handleAddBtn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Movie Poster</span>
                </label>
                <input
                  type="url"
                  name="poster"
                  placeholder="poster url"
                  className="input input-bordered"
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
                  required
                />
              </div>
              <select
                className="select select-bordered w-full"
                required
                name="genre"
              >
                <option value="" defaultValue>
                  Genre
                </option>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Animation</option>
                <option>Actions</option>
                <option>Adventure</option>
                <option>Thriller</option>
                <option>Science Fiction</option>
                <option>Family</option>
              </select>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration</span>
                </label>
                <input
                  type="number"
                  name="duration"
                  placeholder="duration"
                  required
                  className="input input-bordered mb-5"
                />
              </div>
              <select
                className="select select-bordered w-full mb-3"
                required
                name="year"
              >
                <option value="" defaultValue>
                  Release Year
                </option>

                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>

              <div className="flex items-center gap-3">
                <span className="text-sm">Rating: </span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={30}
                  activeColor="#ffd700"
                  value={rating}
                  isHalf={true}
                />
              </div>

              <textarea
                placeholder="Summery"
                name="summary"
                className="textarea textarea-bordered textarea-base w-full mt-3"
                required
              ></textarea>

              <div className="form-control mt-6 mb-4">
                <button className="btn bg-purple-500 hover:bg-purple-600 text-white">
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
