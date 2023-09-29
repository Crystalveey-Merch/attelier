import { useState } from "react";
import { datas } from "../../assets/data.js";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation} from "swiper";

export const SectionTwo2 = () => {
  const breakpoints = {
    300: {
      slidesPerView: 2,
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
 
  };
  const items = datas.categories;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Quicksand uppercase text-xl"> Shop Categories
        </h3>
      </div>

      <Swiper
  
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
        modules={[Autoplay]}
        className="mySwiper w-full  px-4 sm:px-0 lg:px-10"
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.id} className="  m-auto sm:mx-0">
              <Link to={`/category/${item.name}/${item.id}`}>
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full m-auto imghgt2 "
                  style={{ height: "360px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  {item.name}
                </h5>
               
              </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>

     
    </div>
  );
};
