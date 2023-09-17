import { datas } from "../../assets/data.js";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export const SectionFour = () => {
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
  }
  const collections = datas.collections;
  //const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col gap-10  items-center px-4 2xl:px-20 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-gray-700 Aceh text-base text-xl">Shop</p>
        <h3 className=" text-black Quicksand text-2xl md:text-xl">
          Collections
        </h3>
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
        {collections.map((collection) => {
          return (

            <SwiperSlide key={collection.id}>
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer overflow-hidden "
                onMouseEnter={() => setIsHovered(collection.id)}
                onMouseLeave={() => setIsHovered(null)}
                key={collection.id}
              >
                <div className="hvr-bounce-in">
                  <img
                    src={collection.images[0].src}
                    alt={collection.name}
                    className="w-96  sm:w-full m-auto"
                  style={{ height: "550px" }}
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
              </div>

            </SwiperSlide>
          )
        })}
      </Swiper>
      
    </div>
  );
};


