import React from "react";
import { Link } from "react-router-dom";
const RefurbishP2 = () => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="mt-24 sm:mt-16 w-full w-full Quicksand  pt-10 pb-48 sm:px-0">
      <div className="hidden   sm:block pt-2 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
     

      <div>
        <div className=" flex  justify-center m-auto sm:p-10 mx-5 gap-4 ">
          <div>
            <div className="w-auto sm:w-full  flex sm:flex-col gap-10  w-1/2 justify-center   ">
            <div className=" w-96  p-3 border-black">
              <img
                src="/Images/icons/standard.png"
                className="w-96 h-46 my-2  sm:w-full sm:h-40"
              />
              <Link to="/refurblishpage3">
                {" "}
                <button
                  type="Submit" className="border border-black flex w-52 px-5 text-sm py-2 justify-center text-black m-auto"                >
                  Standard Refurblishing 
                </button>
              </Link>
              </div>

              <div className=" w-96  p-3 border-black">
              <img
                src="/Images/icons/r&s.png"
                className="w-96 h-42 my-2 sm:w-full sm:h-40"
              />
              <Link to="/refurblishandsell">
                {" "}
                <button
                  type="Submit" className="border border-black flex w-52 px-5 text-sm py-2 justify-center text-black m-auto"                >
                  Refurbish and sell
                </button>
              </Link>

                
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RefurbishP2;
