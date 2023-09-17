import { useState } from "react";
import { datas } from "../../assets/data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export const SectionTwo = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    639: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    639: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        hideOnClick: true,
      },
    },
  };
  const items = datas.newItems;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center px-4 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 Aceh text-base text-xl">Shop</p>
        <h3 className=" text-black Quicksand text-xl">New Arrivals</h3>
      </div>

      <Swiper
        slidesPerView={3}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={breakpoints}
        loop={true}
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        className="mySwiper z-0 swiper-v  h-full w-full"
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="secTDivH w-full h-max relative hvr-float cursor-pointer "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-96  sm:w-full m-auto"
                  style={{ height: "550px" }}
                />
                {isHovered === item.id && (
                  <button className="w-full bg-gray-900 bg-opacity-50 text-white font-medium text-base py-2 hover:bg-gray-800 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                    Quick Shop
                  </button>
                )}
              </div>
              <div className=" flex flex-col gap-2 sm:gap-4 sm:mb-2 sm:mt-10">
                <h5 className=" text-gray-900 font-light text-xl  font-sans sm:text-xl">
                  {item.category}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="">${item.price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className=" px-9 py-2 bg-gray-950 text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out">
        See More
      </button>
    </div>
  );
};
