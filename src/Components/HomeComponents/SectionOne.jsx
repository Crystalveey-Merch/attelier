import modelOne from "../../Images/Models/man-one.jpg";
import modelTwo from "../../Images/Models/woman-two.jpg";

export const SectionOne = () => {
  return (
    // reduce the height and make image full at mobile screen size
    <div className="secOHig flex justify-center items-center px-28 gap-0 relative lg:px-4 sm:px-0">
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
        <h1 className="Aceh text-gray-900 text-6xl font-bold text-center bg-white opacity-60 p-7 lg:text-5xl md:p-4 md:text-4xl sm:font-semibold sm:p-2 sm:text-3xl ">
          boys
        </h1>
      </div>
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
        <h1 className=" Aceh text-gray-900 text-6xl font-bold text-center bg-white opacity-60 p-7 lg:text-5xl md:p-4 md:text-4xl sm:font-semibold  sm:p-2 sm:text-3xl">
          Men
        </h1>
      </div>

      <div className="secOHig flex justify-around absolute w-full px-28 lg:px-4 sm:px-0">
        <img
          src={modelTwo}
          alt="female model"
          className="w-6/12 h-full object-cover
       object-center 
      "
        />
        <img
          src={modelOne}
          alt="male model"
          className="w-6/12 h-full object-cover object-top "
        />
      </div>
    </div>
  );
};
