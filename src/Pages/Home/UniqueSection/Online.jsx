const Online = () => {
  return (
    <div className="w-10/12 mx-auto mb-20">
      <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
        <div>
          <img src="/assets/phn.png" alt="" />
        </div>
        <div className="text-center md:text-start dark:text-white">
          <h2 className="text-xl md:text-4xl font-bold mb-3">
            It has never been easier to watch free movies online.
          </h2>
          <p className="text-sm md:text-base mb-3">
            Once you register for a free account with Movie Portal, we’ll keep
            your place from screen to screen as long as you’re signed in. No
            matter what device you choose, your free movies will pick up where
            you left off with ease.
          </p>
          <a className="btn border-0 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">
            Watch Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default Online;
