
export const SectionFive = () => {
  return (
    <div className="py-10 flex flex-col gap-16 items-center justify-center">
      <h2 className=" text-blue-950 text-5xl font-extrabold">
        How To Book In Three Steps
      </h2>
      <div className="flex flex-wrap gap-28 justify-center">
        <div className="w-72 flex flex-col gap-5 items-center bg-blue-300 px-3 py-4 rounded-xl">
          <div className="flex items-center justify-center mx-auto w-16 h-16 bg-white rounded-full text-blue-800 text-2xl font-bold ">
            1
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-blue-950">Browse Options</h3>
            <p className="text-blue-50 font-medium text-lg">
              Explore our wide range of destinations, tours, and packages to
              find the perfect match for your travel preferences.
            </p>
          </div>
        </div>

        <div className="w-72 flex flex-col gap-5 items-center bg-green-300 px-3 py-4 rounded-xl">
          <div className="flex items-center justify-center mx-auto w-16 h-16 bg-white rounded-full text-green-800 text-2xl font-bold ">
            2
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-green-950">
              Make a Reservation
            </h3>
            <p className="text-green-50 font-medium text-lg">
              Once you've chosen your desired option, proceed to make a
              reservation by providing your travel details and preferences.
            </p>
          </div>
        </div>

        <div className="w-72 flex flex-col gap-5 items-center bg-yellow-300 px-3 py-4 rounded-xl">
          <div className="flex items-center justify-center mx-auto w-16 h-16 bg-white rounded-full text-yellow-800 text-2xl font-bold ">
            3
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-yellow-950">
              Confirm and Enjoy
            </h3>
            <p className="text-yellow-50 font-medium text-lg">
              After confirming your reservation and making the necessary
              payment, get ready to embark on an incredible journey and enjoy
              your well-deserved vacation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
