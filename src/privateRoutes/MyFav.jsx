import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import FavCard from "./FavCard";
import { useState } from "react";
import { toast } from "react-toastify";
const MyFav = () => {
  const favMoviesData = useLoaderData();
  const [favItems, setFavItems] = useState(favMoviesData);

  const handleDeleteFavBtn = (id) => {
    fetch(`http://localhost:5000/my-favorites/${id}`, {
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
      <div className="flex flex-col justify-center items-center mb-10">
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
