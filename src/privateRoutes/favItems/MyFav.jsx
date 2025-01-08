import { Helmet } from "react-helmet-async";
import FavCard from "./FavCard";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Auth/AuthProvider";
import FavTable from "./FavTable";
import Swal from "sweetalert2";
const MyFav = () => {
  const [favItems, setFavItems] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  useEffect(() => {
    fetch(`https://movie-protal-server.vercel.app/my-favorites/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setFavItems(data);
        console.log(data);
      });
  }, []);

  const handleDeleteFavBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-protal-server.vercel.app/my-favorites/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingItems = favItems.filter((item) => item._id !== id);
              setFavItems(remainingItems);
              Swal.fire({
                title: "Deleted!",
                text: "Successfully Deleted movie from Favorite list",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container w-10/12 mx-auto mb-20 mt-28">
      <Helmet>
        <title>My Favorites-Movie Portal</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center mb-10 dark:text-white">
        <h2 className="text-xl md:text-4xl font-bold mb-2 ">
          My Favorite Movies
        </h2>
        <p className="text-center text-sm md:text-base w-[75%]">
          Dive into my collection of all-time favorite movies that have left a
          lasting impression. From timeless classics to recent blockbusters,
          these films hold a special place in my heart.
        </p>
      </div>
      <div className="overflow-x-auto rounded-xl">
        <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700 rounded-xl">
          <thead className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr className="bg-gray-300 dark:bg-gray-800">
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Poster
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Title
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Genre
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Duration
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Year
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Rating
              </th>
              <th className="border border-gray-400 dark:border-gray-700 px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {favItems.map((item) => (
              <FavTable
                key={item._id}
                item={item}
                handleDeleteFavBtn={handleDeleteFavBtn}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFav;
