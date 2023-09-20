import { datas } from "../../assets/data.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation, } from "swiper";

export const SectionTwo = () => {
  const breakpoints = {
    300: {
      slidesPerView: 2.9,
      spaceBetween: 1,
      
    },
    639: {
      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        hideOnClick: true,
      },
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
   
  };
  const items = datas.newItems;


  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Quicksand text-xl"> Shop New Arrivals</h3>
      </div>

      <Swiper
  
       slidesPerView={'auto'}
       watchSlidesProgress
       grabCursor={true}
      
        loop= {true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full "
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className="mx-2">
              <div
                className=" w-full h-full relative hvr-float cursor-pointer "
               
              >
              <div className="w-full  overflow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full   imghgt"
                  style={{ height: "330px", width: "600px" }}
                />
              </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x  font-sans sm:text-x">
                  {item.title}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black mb-4">{item.price}</p>
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
