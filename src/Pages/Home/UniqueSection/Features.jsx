const Features = () => {
  return (
    <div className="w-10/12 mx-auto mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="justify-items-center">
          <img
            className=" w-[20%] md:w-[30%] mb-5"
            src="/assets/earth.png"
            alt=""
          />
          <h2 className="text-lg md:text-xl font-bold mb-3">Works Worldwide</h2>
          <p className="text-sm md:text-base text-center">
            No other free streaming service delivers more content to and from
            more countries worldwide.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[30%] mb-5"
            src="/assets/video.png"
            alt=""
          />
          <h2 className="text-lg md:text-xl font-bold mb-3">
            Thousands of Titles
          </h2>
          <p className="text-sm md:text-base text-center">
            Choose world-wide movies of your choice korean, chines , taiwan and
            more all within one website.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[30%] mb-5"
            src="/assets/pound.png"
            alt=""
          />
          <h2 className="text-lg md:text-xl font-bold mb-3">
            Always 100% Free
          </h2>
          <p className="text-sm md:text-base text-center">
            Welcome to instant gratification at its best. Watch now without any
            payment or subscription.
          </p>
        </div>
        <div className="justify-items-center">
          <img
            className="w-[20%] md:w-[30%] mb-5"
            src="/assets/device.png"
            alt=""
          />
          <h2 className="text-lg md:text-xl font-bold mb-3">Device-Friendly</h2>
          <p className="text-sm md:text-base text-center">
            Stream the good stuff from your favorite devices including Apple,
            Tabs Android, Smart TVs and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
