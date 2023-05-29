import modelOne from "../../Images/Models/man-one.jpg";
import modelTwo from "../../Images/Models/woman-two.jpg";

export const SectionOne = () => {
  return (
    <div className="secOHig flex justify-center items-center px-28 gap-0 relative lg:px-4 ">
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
        <h1 className=" text-white text-6xl font-bold text-center sm:text-4xl">
          Women
        </h1>
      </div>
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
        <h1 className=" text-white text-6xl font-bold text-center sm:text-4xl">
          Men
        </h1>
      </div>

      <div className="secOHig flex justify-around absolute w-full px-28 lg:px-4 ">
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
