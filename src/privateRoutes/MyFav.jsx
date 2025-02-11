import { Helmet } from "react-helmet-async";
import FavCard from "./FavCard";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthProvider";
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
    fetch(`https://movie-protal-server.vercel.app/my-favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingItems = favItems.filter((item) => item._id !== id);
          setFavItems(remainingItems);
          toast.success("Successfully Deleted movie from Favorite list");
        }
      });
  };

  return (
    <div className="container w-9/12 mx-auto mb-20 mt-10">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favItems.map((item) => {
          return (
            <FavCard
              key={item._id}
              item={item}
              handleDeleteFavBtn={handleDeleteFavBtn}
            ></FavCard>
          );
        })}
      </div>
    </div>
  );
};

export default MyFav;
