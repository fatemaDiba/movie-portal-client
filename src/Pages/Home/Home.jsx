import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./UniqueSection/Features";
import Online from "./UniqueSection/Online";
import MoviesCard from "./moviesCard/MoviesCard";
import TopMovies from "./UniqueSection/TopMovies";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home-Movie Portal</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <MoviesCard></MoviesCard>
      <Online></Online>
      <TopMovies></TopMovies>
    </div>
  );
};

export default Home;
