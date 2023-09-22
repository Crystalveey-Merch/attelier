import image1 from "../../Images/sec3/Image1.png";
import image2 from "../../Images/sec3/Image2.png";
import image3 from "../../Images/sec3/Image3.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export const SectionThree = () => {
  //const [hoveredIndex, setHoveredIndex] = useState(null);
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    639: {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        hideOnClick: true,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  
  };

  return (
    <div className=" flex flex-col gap-10  mx-10 sm:mx-0 py-10 rounded-3xl bg-gray-100 rounded items-center px-52 2xl:px-28 xl:px-10 lg:px-5 md:px-3 sm:gap-5">
      <div className="flex flex-col gap-4 py-10">
        <p className="text-gray-700 Aceh text-5xl sm:text-3xl">
          Crystalveey's Untagged
        </p>
        <h3 className=" text-black Quicksand text-2xl md:text-xl sm:text-xl">
          Explore a careful selecion of stylish refurblished preowned fashion
          items.
        </h3>
      </div>
      <Swiper
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
        className="mySwiper z-0 swiper-v effect-fade h-full w-4/5 "
      >
        <SwiperSlide className="hvr-bob mb-20">
          <img src={image1} alt="imgSeven" className="h-full w-screen z-0 " />
        </SwiperSlide>
        <SwiperSlide
          className="
        hvr-bob"
        >
          <img src={image2} alt="imgSeven" className="h-full w-screen z-0" />
        </SwiperSlide>
        <SwiperSlide className="hvr-bob">
          <img src={image3} alt="imgSeven" className="h-full w-screen z-0  " />
        </SwiperSlide>
        <SwiperSlide className="hvr-bob">
          <img src={image1} alt="imgSeven" className="h-full w-screen z-0 " />
        </SwiperSlide>
        <SwiperSlide
          className="
        hvr-bob"
        >
          <img src={image2} alt="imgSeven" className="h-full w-screen z-0" />
        </SwiperSlide>
        <SwiperSlide className="hvr-bob">
          <img src={image3} alt="imgSeven" className="h-full w-screen z-0  " />
        </SwiperSlide>
      </Swiper>

      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base hover:bg-gray-900 transition duration-300 ease-in-out"
      >
        Shop Now
      </button>
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box flex gap-10 sm:gap-5 justify-center bg-black">
          <div className="block bg-gray-700 w-28 p-3 hvr-grow rounded rounded-lg text-white cursor-pointer">
          <i class="fa-solid fa-scissors text-4xl "></i><h1 className="my-2">Refurblish </h1> 
          </div>
          <div className="block bg-gray-700 p-3 w-28 hvr-grow rounded rounded-lg text-white cursor-pointer">
          <i class="fa-solid fa-money-bill-transfer  text-4xl"></i><h1 className="my-2">Sell </h1> 
          </div>
          <div className="block bg-gray-700 p-3 w-28 hvr-grow rounded rounded-lg cursor-pointer text-white">
          <i class="fa-solid fa-money-bill-transfer text-4xl"></i><h1 className="my-2 ">Buy </h1> 
          </div>
        </div>
        
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
