const MovieDetails = () => {
  return (
    <div className="container w-8/12 mx-auto">
      <div className="hero bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl w-[50%]"
          />
          <div>
            <h1 className="text-3xl font-bold">The NoteBook</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
