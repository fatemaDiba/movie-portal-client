import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
const AddMovie = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
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

    const movieAddData = {
      poster,
      title,
      genre,
      duration,
      year,
      summary,
    };
    console.log(movieAddData);
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
                <option value="" disabled selected>
                  Genre
                </option>
                <option>Horror</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Romance</option>
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
                className="select select-bordered w-full"
                required
                name="year"
              >
                <option value="" disabled selected>
                  Release Year
                </option>
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
              />

              <textarea
                placeholder="Summery"
                name="summary"
                className="textarea textarea-bordered textarea-base w-full"
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
