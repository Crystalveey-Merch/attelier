import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export const SectionFour = () => {
  const breakpoints = {
    300: {
      slidesPerView: 2.3,
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
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
   

  };
  //const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col gap-10 bg-gray-200  items-center  2xl:px-10 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col  ">
        <h3 className=" text-black Quicksand text-xl sm:my-5 my-10 md:text-xl">
          Shop Collections
        </h3>
      </div>
      <Swiper
        navigation={true}
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
        
        
            <SwiperSlide >
            <Link to="/collection/afrocentric">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
               
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/afro.jpeg"
                    alt="Afrocentric"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                  
                    
                  
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Afrocentric Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
            <Link to="/collection/casual">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/casual.jpeg"
                    alt="Afrocentric"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                  
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Comfort Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
            <Link to="/collection/corporate">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/corporate.jpeg"
                    alt="Corporate"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Formal Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
            <Link to="/collection/occasion">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/occassion.jpeg"
                    alt="Occassion"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Party Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
            <Link to="/collection/corporate">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/holiday.jpeg"
                    alt="Holiday Wears"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
              Resort Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide >
            <Link to="/collection/occassion">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/holiday.jpeg"
                    alt="Holiday Wears"
                    className="  sm:w-full m-auto imghgt2"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
              Occassion Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            
          
       
      </Swiper>
      
    </div>
  );
};
