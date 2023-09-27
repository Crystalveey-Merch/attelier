import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper";

export const SectionTwoTest = () => {
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
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      centeredSlides: false,
      
    },
    
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Quicksand text-xl"> Shop Categories
        </h3>
      </div>

      <Swiper
        navigation={true}
       slidesPerView={'auto'}
       watchSlidesProgress
       grabCursor={true}
      
        loop= {true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full  px-4 sm:px-0 lg:px-10"
      >
        
         
            <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/category/children">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/girl.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Chidren
                </h5>
               
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/category/women">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/woman.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Women
                </h5>
               
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/category/men">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/men.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Men
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/accessories">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/watch.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Accessories
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/bags">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/bag.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "360px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Clothing
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
           
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/shoes">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/shoes.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Shoes
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/shoes">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/shoes.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Two Pieces
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/shoes">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/shoes.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Hoodies
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/shoes">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/sec2.2/shoes.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 "
                  style={{ height: "260px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Topshop
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
          
        

</Swiper>
     
    </div>
  );
};
