import { useState } from "react";
import { datas } from "../../assets/data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper";

export const SectionTwo = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 1,
      
    },
    639: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      centeredSlides: false,
      
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
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 Aceh text-base text-xl">Shop</p>
        <h3 className=" text-black Quicksand text-xl">New Arrivals</h3>
      </div>

      <Swiper
  
       slidesPerView={'auto'}
       watchSlidesProgress
       grabCursor={true}
       autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop= {true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-full "
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className="m-2">
              <div
                className=" w-full h-full relative hvr-float cursor-pointer "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full  m-auto"
                  style={{ height: "480px" }}
                />
                {isHovered === item.id && (
                  <button className="w-full bg-black bg-opacity-80 text-white font-medium text-base py-2 hover:bg-gray-800 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                    Quick Shop
                  </button>
                )}
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-4 sm:mb-2 sm:mt-5 p-5">
                <h5 className=" text-gray-900 font-light text-l  font-sans sm:text-xl">
                  {item.category}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black">{item.price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className=" px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out">
        See More
      </button>
    </div>
  );
};
