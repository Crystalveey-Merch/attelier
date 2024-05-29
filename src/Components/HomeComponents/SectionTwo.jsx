import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useAtUngData } from "../ShareContext";
import { getColorsHex } from "../../hooks";
export const SectionTwo = () => {
  const { products } = useAtUngData();

  const [newArrival, setNewArrival] = useState([]);

  useEffect(() => {
    const newArrival = products.filter((item) => item.newArrival === true);
    setNewArrival(newArrival);
  }, [products]);
  // const items = newArrival;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" Aceh flex flex-col gap-10 items-center p-10 xl:px-0 sm:px-0 sm:gap-5">
      <div className="flex flex-col gap-4">
        <h3 className=" text-black Aceh text-xl uppercase">
          {" "}
          Shop New Arrivals
        </h3>
      </div>
      <div className="w-11/12 xl:w-[calc(100vw-60px)] md:w-[calc(100vw-40px)]">
        <Swiper
          // navigation={true}
          slidesPerView={"auto"}
          watchSlidesProgress
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // modules={[Autoplay]}
          // slidesPerView={'auto'}
          // spaceBetween={10}
          navigation={true}
          // navigation={
          //     nextEl: ".next-btn-1",
          //     prevEl: ".prev-btn-1",
          //   }
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full "
        >
          {newArrival.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                // data-aos="fade-up"
                // data-aos-duration="4000"
                // data-aos-delay="200"
                className="max-w-max sm:h-max"
              >
                {/* <Link to={`/products/${item.id}`}>
                <div className=" w-full h-full    relative hvr-float cursor-pointer ">
                  <div className="w-full flex justify-center bg-stone-200 overflow overflow-hidden">
                    <img
                      src={item.images[0].frontImage}
                      alt={item.name}
                      className="w-full   imghgt2"
                      style={{ height: "330px", width: "200px" }}
                    />
                  </div>
                </div>
                <div className=" flex flex-col m-auto justify-center gap-1 sm:gap-0 font-public-sans  p-5 sm:p-2 sm:pb-4">
                  <h5 className=" text-gray-900 font-semibold text-x sm:text-x">
                    {item.name}
                  </h5>
                  <p className="text-black mb-4">
                    {" "}
                    {item.price.toLocaleString("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    })}
                  </p>
                </div>
              </Link> */}
                <div className="pr-5 w-max">
                  <Link
                    to={`/products/${item.id}`}
                    // key={product.id}
                    className="z-0 relative font-public-sans w-full max-w-[320px] flex flex-col bg-white border"
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <div>
                      <img
                        src={
                          isHovered === item.id && item.images.length > 0
                            ? item.images[0].backImage
                            : item.images[0].frontImage
                        } // Check if hovered and if multiple images are available
                        alt={item.name}
                        height={200}
                        width={350}
                        className="h-[400px] w-full object-cover object-top sm:h-[300px]"
                      />
                    </div>
                    {isHovered === item.id && (
                      <button className="w-full sm:hidden h-full bg-black bg-opacity-40 text-white font-medium  text-x py-2 transition duration-300 ease-in-out absolute z-10 bottom-0 left-0">
                        Shop
                      </button>
                    )}
                    <div className="p-3 flex flex-col gap-4 text-left border-t text-black lg:gap-3 sm:gap-2.5">
                      <div>
                        <h4 className="text-lg font-semibold lg:text-base sm:text-[0.95rem]">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-sm">
                        {item.price.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })}
                      </p>
                      <div className="flex gap-3 my-1.5">
                        {item.colors.slice(0, 5).map((color, index) => (
                          <div
                            key={index}
                            className="rounded-full w-5 h-5 border border-gray-200"
                            style={{
                              backgroundColor: `${getColorsHex(color)}`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link to="/newArrival">
        <button className=" px-9 py-2 bg-gray-950 hover:bg-white border border-gray-950  hover:text-black text-white font-medium text-base transition duration-300 ease-in-out">
          See More
        </button>
      </Link>
    </div>
  );
};
