import { Helmet } from "react-helmet-async";

const Reviews = () => {
  return (
    <div>
      <Helmet>
        <title>Reviews-Movie Portal</title>
      </Helmet>
      <div className="w-10/12 mx-auto mb-20 mt-28">
        <div
          className="drop-shadow-2xl p-4 lg:p-10 rounded-2xl text-black pt-8 bg-slate-200 dark:bg-gray-900"
          id="reviews"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-6 ">
            <div className="mb-10 space-y-4 px-6 md:px-0">
              <h2 className="text-center text-2xl font-bold text-black/90 dark:text-white md:text-4xl">
                We have some fans.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {/* 1st card */}
              <div className="h-full  aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Daniella Doe</h6>
                    <p className="text-sm">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  I absolutely love this website! It’s my go-to place for
                  finding new movies to watch. The recommendations are spot-on,
                  and I love how easy it is to see ratings and reviews before
                  watching a film.
                </p>
              </div>

              <div className="h-full aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/18.jpg"
                    alt="user avatar"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Yanick Doe</h6>
                    <p className="text-sm">Developer</p>
                  </div>
                </div>
                <p className="mt-8">
                  This site has become my favorite for movie reviews and
                  streaming suggestions. I can easily find both popular films
                  and hidden gems that I would have missed otherwise. The layout
                  is clean and intuitive. A must-visit for movie lovers!
                </p>
              </div>
              {/* from-[#3770d2] to-[#da5d78] */}
              <div className="h-full  aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/14.jpg"
                    alt="user avatar"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Jane doe</h6>
                    <p className="text-sm">Marketing</p>
                  </div>
                </div>
                <p className="mt-8">
                  Looking for honest movie reviews? This website has got you
                  covered! With ratings, detailed critiques, and user feedback,
                  you’ll always know what’s worth watching and what to skip.
                </p>
              </div>

              <div className="h-full aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="user avatar"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Jane Doe</h6>
                    <p className="text-sm">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  What I appreciate most is the detailed reviews and movie
                  summaries. It’s the best place to check out a film before
                  deciding to watch it. The search functionality is great, and
                  they categorize movies based on genres and themes.
                </p>
              </div>

              <div className="h-full aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/62.jpg"
                    alt="user avatar"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Andy Doe</h6>
                    <p className="text-sm">Manager</p>
                  </div>
                </div>
                <p className="mt-8">
                  As a huge fan of both Hollywood and international cinema, this
                  website has everything I need. The recommendations are
                  diverse, and fit my taste. Plus, the site looks amazing and
                  runs smoothly!
                </p>
              </div>

              <div className="h-full aspect-auto p-5 border rounded-3xl dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none bg-light-primary/50 dark:bg-light-primary/40 text-black dark:text-white/70">
                <div className="flex gap-4 ">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/19.jpg"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium">Yanndy Doe</h6>
                    <p className="text-sm">Mobile dev</p>
                  </div>
                </div>
                <p className="mt-8">
                  This movie website is a treasure trove for film enthusiasts!
                  From blockbuster hits to indie gems, it offers detailed
                  reviews, ratings, and an easy-to-navigate interface. Highly
                  recommended!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
