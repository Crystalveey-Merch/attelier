export const SectionFour = () => {
  return (
    <div className="py-10 flex flex-col gap-6 items-center justify-center bg-gray-50 border-b border-gray-200 px-5 lg:px-11 sm:px-5">
      <div className="flex gap-44 items-center xl:gap-16 lg:flex-col lg:w-full lg:items-start lg:gap-6">
        <div
          className="secFWid text-left  flex flex-col gap-2 lg:w-full"
        >
          <h4 className="text-rose-950 text-lg font-medium font-serif">
            Sign Up for Email and Get 15% off Your First Purchase
          </h4>
          <p className="text-gray-800  text-sm">
            Sign up to receive Crystalveey&apos;s Atelier emails and get first
            dibs on new arrivals, sales, exclusive content, events and more!
          </p>
        </div>
        <form className="flex gap-4 items-end sm:flex-col sm:w-full">
          <label htmlFor="email" className="text-left flex flex-col gap-1 sm:w-full">
            <p className="text-red-900 text-base font-semibold">
              Email Address:
            </p>
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-96 px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-transparent sm:w-full"
            />
          </label>

          <button className=" px-8 py-2 bg-pink-950 text-white font-medium text-base hover:bg-red-900 hover:text-white transition duration-300 ease-in-out sm:w-full">
            Submit
          </button>
        </form>
      </div>
      <p className="text-gray-800 text-sm font-sans">
        By entering your email address, you agree to receive Crystalveey&apos;s
        Atelier offers, promotions, other commercial messages. You can view our
        <a href="/" className="text-pink-950 font-medium hover:underline">
          {" "}
          privacy policy
        </a>{" "}
        here and you may
        <a href="/" className="text-pink-950 font-medium hover:underline">
          {" "}
          unsubscribe
        </a>{" "}
        at any time.
      </p>
    </div>
  );
};
