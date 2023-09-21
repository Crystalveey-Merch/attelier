
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper";
// import manOneimg from "../../Images/Avatar/man-one.png";
// import manTwoImg from "../../Images/Avatar/man-two.png";
// import manThreeImg from "../../Images/Avatar/man-three.png";
// import womanOneImg from "../../Images/Avatar/woman-one.png";
// import womanTwoImg from "../../Images/Avatar/woman-two.png";
// //import womanThreeImg from "../../Images/Avatar/woman-three.png";

// export const SectionEight = () => {
//   return (
//     <div className="py-10 flex flex-col gap-16  px-28">
//       <h2 className=" text-blue-950 text-5xl font-extrabold capitalize">
//         Success stories & customer testimonials
//       </h2>
//       <div className=" flex justify-center items-center ">
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={30}
//           navigation={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           modules={[Pagination, Autoplay, Navigation]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <div className="p-8 bg-white shadow-md rounded-lg  w-96 flex flex-col gap-3">
//               <p className="text-gray-900 font-medium ">
//                 "Crystalveey made our dream vacation come true! The attention to
//                 detail and personalized service were exceptional. We had an
//                 unforgettable experience."
//               </p>
//               <div className="flex gap-3 items-center">
//                 <img
//                   src={manOneimg}
//                   alt="manOneimg"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-gray-600 font-semibold"> John & Emily</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="p-8 bg-white shadow-md rounded-lg  w-96 flex flex-col gap-3">
//               <p className="text-gray-900 font-medium ">
//                 "We had an amazing time exploring with Crystalveey. The guides
//                 were knowledgeable, the activities were thrilling, and the
//                 accommodations were top-notch."
//               </p>
//               <div className="flex gap-3 items-center">
//                 <img
//                   src={womanOneImg}
//                   alt="womanOneImg"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-gray-600 font-semibold"> Sarah</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="p-8 bg-white shadow-md rounded-lg  w-96 flex flex-col gap-3">
//               <p className="text-gray-900 font-medium">
//                 "Crystalveey exceeded our expectations. The professionalism and
//                 expertise of their team made our trip smooth and enjoyable.
//                 Highly recommended!"
//               </p>
//               <div className="flex gap-3 items-center">
//                 <img
//                   src={manTwoImg}
//                   alt="manTwoImg"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-gray-600 font-semibold"> Michael & Lisa</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="p-8 bg-white shadow-md rounded-lg  w-96 flex flex-col gap-3">
//               <p className="text-gray-900 font-medium">
//                 "From start to finish, Crystalveey provided exceptional service.
//                 They tailored our itinerary to perfection, ensuring every moment
//                 was filled with incredible experiences."
//               </p>
//               <div className="flex gap-3 items-center">
//                 <img
//                   src={womanTwoImg}
//                   alt="woman"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-gray-600 font-semibold"> Anna</p>
//               </div>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="p-8 bg-white shadow-md rounded-lg  w-96 flex flex-col gap-3">
//               <p className="text-gray-900 font-medium">
//                 "Our family vacation with Crystalveey was unforgettable. They
//                 catered to the needs of our young children and created memories
//                 that will last a lifetime."
//               </p>
//               <div className="flex gap-3 items-center">
//                 <img
//                   src={manThreeImg}
//                   alt="manThreeImg"
//                   className="w-12 h-12 rounded-full"
//                 />
//                 <p className="text-gray-600 font-semibold"> David & Emma</p>{" "}
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };
