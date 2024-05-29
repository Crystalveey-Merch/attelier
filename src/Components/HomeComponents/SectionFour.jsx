import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export const SectionFour = () => {
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
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
      navigation:true
    },
   

  };
  //const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex flex-col gap-4   items-center  2xl:px-10 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col  ">
        <h3 className=" text-black Aceh text-xl uppercase sm:my-5 my-10 md:text-xl">
          Shop Collections
        </h3>
      </div>
      <Swiper
        
        slidesPerView={3}
        watchSlidesProgress
        modules={[ Autoplay]}
        breakpoints={breakpoints}
        loop={true}
        // direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        className="mySwiper z-0 swiper-v  h-full w-full"

      >
        
        
            <SwiperSlide   data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="200">
            <Link to="/collection/Afrocentric Wears">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
               
              
              >
                <div className="hvr-bounce-in bg-stone-200">
                  <img
                    src="/Images/sec4/afro.jpeg"
                    alt="Afrocentric"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
                    style={{ height: "360px", width: "306px" }}
                  />
                  
                    
                  
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Afrocentric Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="70">
            <Link to="/collection/Comfort Wears">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/casual.jpeg"
                    alt="Afrocentric"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
                    style={{ height: "360px", width: "306px" }}
                  />
                  
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Comfort Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="90" >
            <Link to="/collection/Formal Wears">
              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/corporate.jpeg"
                    alt="Corporate"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Formal Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="120" >
            <Link to="/collection/Party Wears">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/occassion.jpeg"
                    alt="Occassion"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
                Party Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="140" >
            <Link to="/collection/Resort Wears">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/sec4/holiday.jpeg"
                    alt="Holiday Wears"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
                    style={{ height: "360px", width: "306px" }}
                  />
                 
                    
                 
                </div>

                <h5 className=" text-gray-900 font-light text-x Aceh font-sans md:text-x sm:text-x">
              Resort Wears
                </h5>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up"
     data-aos-anchor-placement="top-center"  data-aos-delay="160" >
            <Link to="/collection/Occasion Wears">

              <div
                className=" flex flex-col gap-3 items-center sm:gap-2 cursor-pointer  overflow-hidden mb-10 p-2 sm:p-0 "
                onMouseEnter={() => setIsHovered (true)}
                onMouseLeave={() => setIsHovered(null)}
              
              >
                <div className="hvr-bounce-in">
                  <img
                    src="/Images/newArrivals/image8.jpeg"
                    alt="Holiday Wears"
                    className="  sm:w-full m-auto imghgt2 bg-stone-200"
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
      <Link to="/readytowear">
      <button className=" px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out">
        See More
      </button>
      </Link>
    </div>
  );
};
