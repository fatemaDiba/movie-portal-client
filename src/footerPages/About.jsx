import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Auth/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>About-Movie Portal</title>
      </Helmet>
      <section className="max-w-4xl mx-auto my-10 px-6 mt-28 mb-20 dark:text-white/80">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white/80 mb-6">
            About Movie Portal
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-8">
            Welcome to <strong>Movie Portal</strong> — your ultimate destination
            for discovering and exploring the world of movies! Whether you're a
            casual viewer or a film enthusiast, our platform is designed to help
            you discover the best movies, create personalized watchlists, and
            engage with like-minded movie lovers.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/80 mb-4">
            Our Mission
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-8">
            At Movie Portal, our mission is to provide a comprehensive movie
            database that connects people with the films they love. We aim to
            offer a user-friendly platform where you can easily search for
            movies, read reviews, explore detailed movie information, and share
            your movie experiences with a vibrant community.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/80 mb-4">
            What We Offer
          </h3>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 dark:text-white/80 mb-8">
            <li>
              <strong>Extensive Movie Database:</strong> Browse through an
              ever-growing list of movies, from classNameics to the latest
              releases.
            </li>
            <li>
              <strong>Personalized Recommendations:</strong> Get movie
              suggestions tailored to your preferences and watch history.
            </li>
            <li>
              <strong>Community Engagement:</strong> Join discussions, leave
              reviews, and connect with other movie lovers.
            </li>
            <li>
              <strong>User Profiles:</strong> Create your own profile, build
              watchlists, and track your movie-watching progress.
            </li>
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/80 mb-4">
            Why Choose Movie Portal?
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-8">
            With Movie Portal, you can discover new movies based on your unique
            tastes, learn about the latest cinematic trends, and interact with a
            community of passionate film buffs. Our goal is to provide a
            comprehensive and engaging movie platform for all users, whether
            you're looking to discover new genres, re-watch old favorites, or
            simply find the perfect movie for your night in.
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white/80 mb-4">
            Get Started Today!
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-white/80 mb-8">
            Start exploring the world of movies now! Sign up, browse our movie
            database, and begin creating your own personalized movie experience.
            The perfect movie is just a few clicks away.
          </p>

          {user ? (
            <a
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm md:text-lg hover:bg-blue-700 transition duration-300"
            >
              Thanks For Joining
            </a>
          ) : (
            <a
              href="/register"
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm md:text-lg  hover:bg-blue-700 transition duration-300"
            >
              Join Movie Portal
            </a>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
