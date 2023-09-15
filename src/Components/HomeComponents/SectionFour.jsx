import { datas } from "../../assets/data.js";
import { useState } from "react";

export const SectionFour = () => {
  const collections = datas.collections;
  //const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col gap-10  items-center px-52 2xl:px-28 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-gray-700 Aceh text-base text-xl">Shop</p>
        <h3 className=" text-black Quicksand text-2xl md:text-xl">
          Collections
        </h3>
      </div>
      <ul className="flex justify-between gap-10 lg:flex-wrap lg:gap-6 md:gap-6 sm:gap-3 sm:gap-y-8">
        {collections.map((collection) => {
          return (
            <li
              className="secTIMGI flex flex-col gap-3 items-center sm:gap-2"
              key={collection.id}
              onMouseEnter={() => setIsHovered(collection.id)}
                onMouseLeave={() => setIsHovered(null)}
              // onMouseEnter={() => setHoveredIndex(collection.id)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="hvr-bounce-in">
                <img
                  src={collection.images[0].src}
                  alt={collection.name}
                  className="w-96  secTDivH sm:w-full"
                  // style={{ height: "550px" }}
                />
                 {isHovered === collection.id && (
                  <button className="w-full h-full bg-gray-900 bg-opacity-50 text-white font-medium text-base py-2 hover:bg-gray-800 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                   Shop Now
                  </button>
                )}
              </div>

              <h5 className=" text-gray-900 font-light text-xl  font-sans md:text-2xl sm:text-xl">
                {collection.name}
              </h5>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};


