import { datas } from "../../assets/data.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

export const SectionTwo = () => {
  const allProducts = [...datas.children, ...datas.women, ...datas.men];
  
  const newArrival = () => {
    return allProducts.filter((product) => product.newarrival);
  };



  const breakpoints = {
    300: {
      slidesPerView: 2.7,
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
  // const items = newArrival;


  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Aceh text-xl uppercase"> Shop New Arrivals</h3>
      </div>

      <Swiper
  // navigation={true}
       slidesPerView={'auto'}
       watchSlidesProgress
       grabCursor={true}
       autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        loop= {true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay]}
        className="mySwiper w-full "
      >
        {newArrival().map((item) => {
          return (
            <SwiperSlide key={item.id} className="mx-2">
            <Link to={`/productdes/${item.id}`}>
              <div
                className=" w-full h-full    relative hvr-float cursor-pointer "
               
              >
              <div className="w-full flex justify-center bg-stone-200 overflow overflow-hidden">
                <img
                  src={item.src[0]}
                  alt={item.name}
                  className="w-full   imghgt2"
                  style={{ height: "330px", width: "200px" }}
                />
              </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-0   p-5 sm:p-2 sm:pb-4">
                <h5 className=" text-gray-900 font-light text-x  font-sans sm:text-x">
                 {item.name}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black mb-4"> ₦{item.price}</p>
              </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

<Link to="/newArrival">
      <button className=" px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out">
        See More
      </button>
      </Link>
    </div>
  );
};
