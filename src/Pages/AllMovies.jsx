import { Helmet } from "react-helmet-async";
import Card from "./Home/moviesCard/Card";
import { useLoaderData } from "react-router-dom";

const AllMovies = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container w-8/12 mx-auto mb-20 mt-10">
      <Helmet>
        <title>All Movies-Movie Portal</title>
      </Helmet>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => {
          return <Card key={item._id} item={item}></Card>;
        })}
      </div>
    </div>
  );
};

export default AllMovies;
