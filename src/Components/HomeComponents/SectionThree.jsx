import { datas } from "../../assets/data.js";

export const SectionThree = () => {
  const collections = datas.collections;
  //const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" flex flex-col gap-10 items-center px-52 2xl:px-28 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 text-base font-semibold">Shop</p>
        <h3 className=" text-gray-950 font-semibold text-5xl uppercase md:text-3xl">
          Collections
        </h3>
      </div>
      <ul className="flex justify-between gap-10 lg:flex-wrap lg:gap-6 md:gap-6 sm:gap-3 sm:gap-y-8">
        {collections.map((collection) => {
          return (
            <li
              className="secTIMGI flex flex-col gap-3 items-center sm:gap-2"
              key={collection.id}
              // onMouseEnter={() => setHoveredIndex(collection.id)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="">
                <img
                  src={collection.images[0].src}
                  alt={collection.name}
                  className="w-96 secTDivH sm:w-full"
                  // style={{ height: "550px" }}
                />
              </div>

              <h5 className=" text-gray-900 font-light text-3xl uppercase font-sans md:text-2xl sm:text-xl">
                {collection.name}
              </h5>
              <button className="w-max px-3 py-2 bg-white text-gray-950 border border-gray-950 font-medium text-base hover:bg-gray-950 hover:text-white transition duration-300 ease-in-out sm:px-2 sm:py-1 sm:font-normal">
                Shop Now
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
