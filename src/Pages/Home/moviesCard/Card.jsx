import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title:</h2>
        <p className="font-semibold">Genre:</p>
        <p className="font-semibold">Duration:</p>
        <p className="font-semibold">Release Year:</p>
        <p className="font-semibold">Rating:</p>
        <div className="card-actions">
          <Link
            to={`/movie-details`}
            className="btn border-0 bg-gradient-to-b from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
