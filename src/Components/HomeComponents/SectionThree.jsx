import image1 from "../../Images/sec3/Image1.png";  
import image2 from "../../Images/sec3/Image2.png";  
import image3 from "../../Images/sec3/Image3.png"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, } from "swiper";





export const SectionThree = () => {
  //const [hoveredIndex, setHoveredIndex] = useState(null);
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
    <div className=" flex flex-col gap-10 outline mx-10 py-10 rounded-lg rounded items-center px-52 2xl:px-28 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col gap-4 py-10">
        <p className="text-gray-700 Aceh text-5xl">Crystalveey's Untagged</p>
        <h3 className=" text-black Quicksand text-2xl md:text-xl">
          Explore a careful selecion of stylish refurblished preowned fashion items.
        </h3>
      </div>
      <Swiper
      slidesPerView={3}
       modules={[ Pagination, Navigation, Autoplay]}
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
    className="mySwiper z-0 swiper-v effect-fade h-full w-4/5">
        <SwiperSlide className="hvr-bob">
        <img
          src={image1}
          alt="imgSeven"
          className="h-full w-screen z-0 " />

        </SwiperSlide>
        <SwiperSlide className="
        hvr-bob">
        <img
          src={image2}
          alt="imgSeven"
          className="h-full w-screen z-0" />

        </SwiperSlide>
        <SwiperSlide className="hvr-bob">
        <img
          src={image3}
          alt="imgSeven"
          className="h-full w-screen z-0  " />

        </SwiperSlide>
      </Swiper>
      
              <button className="w-max px-3 py-2 bg-white text-gray-950 border border-gray-950 font-medium text-base hover:bg-gray-950 hover:text-white transition duration-300 ease-in-out sm:px-2 sm:py-1 sm:font-normal">
                Shop Now
              </button>
         
    </div>
  );
};


