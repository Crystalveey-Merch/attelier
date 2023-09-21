import { useState } from "react";
import { datas } from "../assets/data.js";

const featured = datas.newItems;

const NewArrival = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-40 sm:mt-28 m-auto w-full Quicksand px-20 sm:px-4">
    <div className="text-center text-3xl text-black my-20 Aceh">
   Shop new Arrivals
    </div>
    <div className="grid grid-cols-4 sm:grid-cols-3 gap-2 justify-center cursor ">
        {featured.map((newArrival) =>{
            return(

                <div key={newArrival.id} className="my-4 p-4 m-4 sm:m-0 sm:p-2 border rounded rounded-lg hvr-shrink cursur-pointer"
                onMouseEnter={() => setIsHovered(newArrival.id)}
                onMouseLeave={() => setIsHovered(null)}>
                <img
                    src={newArrival.image}
                    alt={newArrival.title}
                    className="  sm:w-full m-auto imghgt"
                    style={{ height: "360px", width: "306px" }}
                  />
                   {isHovered === newArrival.id && (
                    <button
                      
                      className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium rounded rounded-lg text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0"
                    >
                      Shop 
                    </button>
                  )}
                  <div className="  m-auto w-full justify-center gap-1 sm:gap-2   ">
                <h5 className=" text-gray-900 font-light text-x text-center font-sans sm:text-sm">
                  {newArrival.title}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black mb-4 text-center Aceh ">{newArrival.price}</p>
              </div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default NewArrival