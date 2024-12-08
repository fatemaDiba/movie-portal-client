import { RiDeleteBin6Fill } from "react-icons/ri";

const FavCard = ({ item, handleDeleteFavBtn }) => {
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
        <div className="flex flex-wrap">
          <button
            onClick={() => handleDeleteFavBtn(_id)}
            className="btn bg-gradient-to-b from-purple-400 to-pink-400 text-white text-sm"
          >
            Delete Favorite
            <RiDeleteBin6Fill className="text-sm"></RiDeleteBin6Fill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
