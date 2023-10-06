import { Link } from "react-router-dom";
import image2 from "../../Images/sec6/image2.jpeg";

export const SectionFive = () => {
  return (
    <div>
    <h1 className="text-2xl text-black Aceh mt-8">CUSTOM MADE</h1>
    <div
      className=" Aceh flex  items-left  m-auto my-14 sm:m-0 w-4/5 sm:w-full rounded-md"
      style={{ backgroundImage: `url(${image2})`, backgroundRepeat: 'no-repeat', backgroundPosition:'center', backgroundSize:'cover', }}
    >
    
      <div className="w-96  sm:w-40 sm:ml-5 ml-20 sm:m-auto   ">
        <h1 className="text-3xl sm:text-sm my-10 text-black text-center  ">
          Ready to step into a world of personalised fashion?
        </h1>
        <hr className="border-black border-2x" />
        <h3 className="text-xl sm:text-sm text-black AcehLight text-center  ">
          Order your CUSTOM MADE wares now!!
        </h3>
        <Link to="/custommade">
        <button className="p-4 sm:p-2 text-left rounded-full bg-black text-white text-xl sm:text-sm m-10 sm:m-5">
          Order Now
        </button>
        </Link>
      </div>
    </div>
    </div>
  );
};
