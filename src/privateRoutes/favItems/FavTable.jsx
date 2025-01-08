import { RiDeleteBin6Fill } from "react-icons/ri";

const FavTable = ({ item, handleDeleteFavBtn }) => {
  const { _id, poster, title, genre, duration, year, rating } = item;

  return (
    <tr className="odd:bg-gray-100 even:bg-gray-50 dark:odd:bg-gray-700 dark:even:bg-gray-600">
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        <img
          src={poster}
          alt="movie"
          className="w-16 h-16 rounded-md object-cover mx-auto"
        />
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        {title}
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        {genre}
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        {duration}
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        {year}
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        {rating}
      </td>
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
        <button
          onClick={() => handleDeleteFavBtn(_id)}
          className="btn bg-light-primary hover:bg-dark-primary text-white/90 flex items-center gap-1"
        >
          Delete
          <RiDeleteBin6Fill />
        </button>
      </td>
    </tr>
  );
};

export default FavTable;
