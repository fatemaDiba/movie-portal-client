const TopMovies = () => {
  const data = [
    {
      TopMovies: "Ponyo",
      reviews: 5649,
      rating: 90,
      color: "bg-cyan-600",
    },
    {
      TopMovies: "Spirited Away",
      reviews: 4025,
      rating: 84,
      color: "bg-orange-300",
    },
    { TopMovies: "Wind", reviews: 3105, rating: 68, color: "bg-teal-400" },
    {
      TopMovies: "My Neighbor Totoro",
      reviews: 1251,
      rating: 62,
      color: "bg-pink-600",
    },
    { TopMovies: "Vector", reviews: 734, rating: 59, color: "bg-indigo-600" },
  ];

  return (
    <div className="w-10/12 mx-auto mb-28 mt-10">
      <div className="text-center  dark:text-white">
        <h2 className="text-xl md:text-4xl font-bold mb-3">Top Rated Movies</h2>
        <p className="text-sm md:text-base mb-3">
          Discover the highest-rated movies based on critical acclaim and
          audience reviews.
        </p>
      </div>
      <div className="flex justify-center p-4">
        <div className="block w-full overflow-x-auto border border-gray-400 dark:border-black/70 rounded-xl shadow-sm">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs md:text-base font-semibold text-black dark:text-white/70 uppercase bg-slate-200 dark:bg-slate-700">
                  Top Movies
                </th>
                <th className="px-4 py-3 text-left text-xs  md:text-base font-semibold text-black dark:text-white/70 uppercase bg-slate-200 dark:bg-slate-700">
                  Reviews
                </th>
                <th className="px-4 py-3 text-left text-xs  md:text-base font-semibold text-black dark:text-white/70 uppercase bg-slate-200 dark:bg-slate-700">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-600 dark:bg-slate-800">
              {data.map(({ TopMovies, reviews, rating, color }, index) => (
                <tr key={index} className="text-gray-500 dark:text-white/80">
                  <th className="px-4 py-3 text-sm font-normal text-left">
                    {TopMovies}
                  </th>
                  <td className="px-4 py-3 text-xs font-medium">
                    {reviews.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">
                        {rating}%
                      </span>
                      <div className="relative w-full bg-gray-200  rounded-sm h-2">
                        <div
                          className={`h-2 rounded-sm ${color}`}
                          style={{ width: `${rating}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopMovies;
