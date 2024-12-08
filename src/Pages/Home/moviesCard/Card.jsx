import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, poster, title, genre, duration, year, rating } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={poster} alt="movie" />
      </figure>
      <div className="card-body dark:text-white">
        <h2 className="card-title font-bold">Title: {title}</h2>
        <p className="font-semibold">
          Genre: <span>{genre}</span>
        </p>
        <p className="font-semibold">
          Duration: <span>{duration}</span>
        </p>
        <p className="font-semibold">
          Release Year: <span>{year}</span>
        </p>
        <p className="font-semibold">
          Rating: <span className="font-normal"> {rating}</span>
        </p>
        <div className="card-actions">
          <Link
            to={`/movie-details/${_id}`}
            className="border-0 bg-gradient-to-b from-purple-400 to-pink-400 font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg text-sm"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
