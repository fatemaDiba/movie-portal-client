import { FaHeartCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
const MovieDetails = () => {
  return (
    <div className="container w-8/12 mx-auto mb-20">
      <div className="p-10 bg-base-200 rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-[40%] rounded-lg shadow-2xl"
          />
          <div className="space-y-3">
            <h1 className="text-xl md:text-3xl font-bold mb-5">The NoteBook</h1>
            <p className="text-base md:text-lg font-semibold">Title:</p>
            <p className="text-base md:text-lg font-semibold">Genre:</p>
            <p className="text-base md:text-lg font-semibold">Duration:</p>
            <p className="text-base md:text-lg font-semibold">Release Year:</p>
            <p className="text-base md:text-lg font-semibold">Rating:</p>
            <p className="text-base md:text-lg font-semibold">Summary:</p>

            <div className="flex flex-col md:flex-row gap-5 pt-10">
              <button className="btn btn-primary">
                Delete <RiDeleteBin6Fill className="text-lg" />
              </button>
              <button className="btn btn-primary">
                Add To Favorite <FaHeartCirclePlus className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
