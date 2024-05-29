import image1 from "../../Images/sec1/image1.jpeg";  
import image2 from "../../Images/sec1/image2.png";  
import image3 from "../../Images/sec1/image3.png";  
import image4 from "../../Images/sec1/image4.png"; 
import image5 from "../../Images/sec1/image5.jpeg" 
import image6 from "../../Images/sec1/image6.jpeg" 


import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import {  } from "swiper/types/modules";
import { Autoplay, EffectFade } from "swiper/modules";

export const SectionOne = () => {
  const breakpoints = {
    639: {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        hideOnClick: true,
      },
    },
  };
  return (
   
    // reduce the height and make image full at mobile screen size
    <div className=" flex justify-center items-center px-28 gap-0 relative lg:px-4 sm:px-0 sm:pt-8">
    <div className="flex  w-screen m-auto h-srceen justify-center">
     <Swiper
    modules={[ Autoplay, EffectFade]}
    breakpoints={breakpoints}
    loop={true}
    effect="fade"
    // direction={"vertical"}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    // navigation={true}
    className="mySwiper z-0 swiper-v effect-fade h-full w-4/5"
  >

    <SwiperSlide>
    <img
          src={image1}
          alt="imgSeven"
          className="h-full w-screen z-0 shadow-lg " />

    </SwiperSlide>
    <SwiperSlide>
    <img
          src={image2}
          alt="imgSeven"
          className="h-full w-screen   shadow-lg " />

    </SwiperSlide>
    <SwiperSlide>
    <img
          src={image6}
          alt="imgSeven"
          className="h-full w-screen   shadow-lg " />

    </SwiperSlide>
  </Swiper>
  <Swiper
    modules={[ EffectFade, Autoplay]}
    breakpoints={breakpoints}
    loop={true}
    effect="fade"
    // direction={"vertical"}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false,
    }}
    className="mySwiper  swiper-v h-full  z-0 w-4/5 justify-center">
    <SwiperSlide>
    <img
          src={image3}
          alt="imgSeven"
          className="h-full w-screen  shadow-lg " />
    </SwiperSlide>
    <SwiperSlide>
    <img
          src={image4}
          alt="imgSeven"
          className="h-full w-screen  shadow-lg " />

    </SwiperSlide>
    <SwiperSlide>
    <img
          src={image5}
          alt="imgSeven"
          className="h-full w-screen   shadow-lg " />

    </SwiperSlide>
  </Swiper>
  </div>
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
        
      </div>
      <div className="w-6/12 h-full z-10 flex justify-center items-center  ">
       
      </div>

      {/* <div className="secOHig flex justify-around absolute w-full px-28 lg:px-4 sm:px-0">
        <img
          src={modelTwo}
          alt="female model"
          className="w-6/12 h-full object-cover
       object-center 
      "
        />
        <img
          src={modelOne}
          alt="male model"
          className="w-6/12 h-full object-cover object-top "
        />
      </div> */}
    </div>
  );
};
