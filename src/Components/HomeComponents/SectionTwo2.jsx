import { useState } from "react";
import { datas } from "../../assets/data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper";

export const SectionTwo2 = () => {
  const breakpoints = {
    300: {
      slidesPerView: 2.7,
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
  const items = datas.categories;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Quicksand text-xl"> Shop Categories
        </h3>
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
        className="mySwiper w-full  px-60 sm:px-0 lg:px-10"
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className=" hover:border m-auto sm:mx-0">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="rounded-full relative m-auto overflow-hidden w-40 sm:w-24 sm:h-24 h-40 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full  m-auto imghgt2 "
                  style={{ height: "420px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  {item.name}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black mb-4">{item.price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

     
    </div>
  );
};
