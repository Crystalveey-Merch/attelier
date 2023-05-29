import { useState } from "react";
import { datas } from "../../assets/data.js";

export const SectionTwo = () => {
  const items = datas.newItems;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col gap-10 items-center px-16 xl:px-5 sm:px-3 sm:gap-5">
      <div className="flex flex-col gap-4">
        <p className="text-pink-700 text-base font-semibold">Shop</p>
        <h3 className=" text-pink-950 font-semibold text-4xl">NEW ARRIVALS</h3>
      </div>
      <ul className=" flex justify-between gap-16 xl:gap-4 lg:flex-wrap sm:gap-2">
        {items.map((item) => {
          return (
            <li className="secTIMGI flex flex-col gap-3 " key={item.id}>
              <div
                className="secTDivH w-full h-max relative cursor-pointer "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full"
                />
                {isHovered === item.id && (
                  <button className="w-full bg-gray-900 bg-opacity-50 text-white font-medium text-base py-2 hover:bg-gray-800 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                    Quick Shop
                  </button>
                )}
              </div>
              <div className=" flex flex-col gap-2 sm:gap-1 sm:mb-2">
                <h5 className=" text-gray-900 font-light text-3xl uppercase font-sans sm:text-xl">
                  {item.category}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="">${item.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className=" px-9 py-2 bg-pink-950 text-white font-medium text-base hover:bg-pink-900 transition duration-300 ease-in-out">
        See More
      </button>
    </div>
  );
};
