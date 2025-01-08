import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";

const Card = ({ item }) => {
  const { _id, poster, title, genre, duration, year, rating } = item;
  return (
    <Link to={`/movie-details/${_id}`}>
      <div className="card bg-base-100 h-full dark:bg-gray-800 shadow-xl hover:scale-105 transition-transform duration-400 ">
        <figure>
          <img src={poster} alt="movie" />
        </figure>
        <div className="card-body dark:text-white">
          <h2 className="card-title font-bold">{title}</h2>
          <p className="font-semibold flex items-center gap-2">
            <RiMovie2Line></RiMovie2Line>
            <span>{genre}</span>
          </p>
          <p className="font-semibold flex items-center gap-2">
            <MdOutlineAccessTimeFilled />
            <span>{duration}</span> min
          </p>
          <p className="font-semibold flex items-center gap-2">
            <BsCalendar3 className="text-sm"></BsCalendar3>
            <span>{year}</span>
          </p>
          <p className="font-semibold flex items-center gap-2">
            <IoStar />
            <span className="font-normal"> {rating}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
