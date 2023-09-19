import image1 from "../../Images/sec6/image1.png";
import image2 from "../../Images/sec6/image2.jpeg";

export const SectionFive = () => {
  return (
    <div
      className=" Aceh flex  items-left  m-auto my-10 sm:m-0 w-4/5 sm:w-full rounded-md"
      style={{ backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat',}}
    >
      <div className="w-96 ml-20 sm:m-auto ">
        <h1 className="text-3xl my-10 text-black text-center">
          Ready to step into a world of personalised fashion?
        </h1>
        <hr />
        <h3 className="text-2xl text-black Quicksand text-center">
          Order your CUSTOM MADE wares now!!
        </h3>
        <button className="p-4 sm:p-5 text-left rounded-full bg-black text-white text-xl m-10">
          Order Now
        </button>
      </div>
    </div>
  );
};
