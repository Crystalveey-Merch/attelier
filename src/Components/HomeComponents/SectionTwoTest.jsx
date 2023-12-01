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
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      centeredSlides: false,
      
    },
    
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-5 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Aceh uppercase text-xl"> Shop Categories
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
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay]}
        className="mySwiper w-full  px-4 sm:px-0 lg:px-10"
        data-aos="fade-up" data-aos-duration="4000" data-aos-delay="200"      >
        

              <SwiperSlide  className="  m-auto sm:mx-0">
              <Link to="/category/Accessories">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden " >
                <img
                  src= "/Images/sec2.2/watch.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
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
              <SwiperSlide  className="  m-auto sm:mx-0" >
              <Link to="/category/Clothing">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden bg-stone-200   "  >
             
                <img
                  src= "/Images/newArrivals/image4_3.png" 
                  alt="children"
                  className="w-full m-auto imghgt2  bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
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
           
              <SwiperSlide  className="  m-auto sm:mx-0" >
              <Link to="/category/Shoes">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden "  >
                <img
                  src= "/Images/sec2.2/shoes.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
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
              <Link to="/category/Two-pieces">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/newArrivals/image5.jpeg"
                  alt="children"
                  className="w-full m-auto imghgt2 bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
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
              <Link to="/category/Hoodies">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/Products/1.jpg"
                  alt="children"
                  className="w-full m-auto imghgt2 bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
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
              <Link to="/category/Merch">
              <div
                className=" w-full h-full  rounded-full relative   cursor-pointer "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(null)}
              >
              <div className="  overflow-hidden ">
                <img
                  src= "/Images/Products/item-three.jpg"
                  alt="children"
                  className="w-full m-auto imghgt2 bg-stone-200 "
                  style={{ height: "280px", width: "400px" }}
                />
                </div>
               
              </div>
              <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-2   p-5">
                <h5 className=" text-gray-900 font-light text-x Aceh font-sans sm:text-x">
                  Merch
                </h5>
               
              </div>
              </Link>
              </SwiperSlide>
          
        

</Swiper>
     <Link to="/categorylist">
      <button className=" px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out">
        See More
      </button>
      </Link>
    </div>
  );
};
