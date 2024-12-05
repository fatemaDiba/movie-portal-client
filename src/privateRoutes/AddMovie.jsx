const AddMovie = () => {
  return (
    <div>
      <div className="container md:w-11/12 mx-auto">
        <div className="card bg-base-100 w-[70%] md:w-[50%] mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="font-bold text-center text-base md:text-xl">
              Add Your Movie Information Now
            </h2>
            <form>
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
                />
              </div>
              <select className="select select-bordered w-full" required>
                <option disabled selected>
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
              <select className="select select-bordered w-full" required>
                <option disabled selected>
                  Release Year
                </option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
              </select>
              <div className="form-control mt-6 mb-4">
                <button className="btn bg-orange-500 hover:bg-orange-600 text-white">
                  Register
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
