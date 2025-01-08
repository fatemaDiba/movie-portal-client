import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="w-10/12 mx-auto mb-14">
      <Helmet>
        <title>Blog-Movie Portal</title>
      </Helmet>
      <section className="bg-gray-100 dark:bg-black/50 py-14 mt-28 rounded-2xl">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Featured Blog
          </h2>
          <div className="bg-white  dark:bg-black/50 rounded-lg shadow-md overflow-hidden">
            <img src="/assets/p1.jpg" alt="Featured Post" className="w-full" />
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                The Evolution of Cinema: A Journey Through Time
              </h3>
              <p className="text-gray-700 dark:text-white/70 mb-4">
                Explore how cinema has transformed over the decades, from silent
                films to the age of CGI and streaming platforms. This
                comprehensive guide dives into the milestones of the movie
                industry.
              </p>
              <a href="#recent-posts" className="text-blue-600 hover:underline">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="recent-posts" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Recent Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Blog Post 1 --> */}
            <div className="hover:scale-105 transition-transform duration-400  bg-white dark:bg-black/50 rounded-lg shadow-md overflow-hidden">
              <img
                src="/assets/p3.jpg"
                alt="Blog Post 1"
                className="w-full h-[30vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Top 10 Movies of 2024
                </h3>
                <p className="text-gray-700 dark:text-white/70 mb-4">
                  Discover the best films of 2024 that captivated audiences and
                  critics alike.
                </p>
              </div>
            </div>
            {/* <!-- Blog Post 2 --> */}
            <div className="hover:scale-105 transition-transform duration-400  bg-white  dark:bg-black/50 rounded-lg shadow-md overflow-hidden">
              <img
                src="/assets/p2.jpg"
                alt="Blog Post 2"
                className="w-full h-[30vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Behind the Scenes of Blockbusters
                </h3>
                <p className="text-gray-700 dark:text-white/70 mb-4">
                  A peek into the making of some of the most iconic blockbuster
                  movies.
                </p>
              </div>
            </div>
            {/* <!-- Blog Post 3 --> */}
            <div className="hover:scale-105 transition-transform duration-400  bg-white  dark:bg-black/50 rounded-lg shadow-md overflow-hidden">
              <img
                src="/assets/p4.jpg"
                alt="Blog Post 3"
                className="w-full h-[30vh] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Upcoming Movie Releases to Watch
                </h3>
                <p className="text-gray-700 dark:text-white/70 mb-4">
                  Get a sneak peek at the movies hitting theaters and streaming
                  platforms soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to Action --> */}
      {/* <section className="bg-blue-600 text-white py-12  rounded-xl">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated with Movie Portal Blog
          </h2>
          <p className="text-lg mb-6">
            Subscribe our newsletter to get the latest blog posts, movie
            reviews, and industry news straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-900"
            />
            <Link
              to="/"
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
            >
              Subscribe
            </Link>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Blogs;
