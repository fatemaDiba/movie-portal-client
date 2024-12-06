import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, poster, title, genre, duration, year, rating } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={poster} alt="movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p className="font-semibold">Genre: {genre}</p>
        <p className="font-semibold">Duration: {duration}</p>
        <p className="font-semibold">Release Year: {year}</p>
        <p className="font-semibold">Rating: {rating}</p>
        <div className="card-actions">
          <Link
            to={`/movie-details/${_id}`}
            className="btn border-0 bg-gradient-to-b from-purple-400 to-pink-400 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
