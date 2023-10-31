import { datas } from "../assets/data.js";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Thumbs]);
import cartDetails from "./cardDetails.js";
// import {  Navigation  } from "swiper";


const Productdes = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //   const products = datas.products;
  const { addItem } = useCart();
  const [product, setProduct] = useState("");
  const [text, setText] = useState("Select a size");
  const [color, setColor] = useState("Select a color");
  const [totalPrice, setTotalPrice] = useState(0);
  const { productId } = useParams();
  const [isActive, setIsActive] = useState(null);
  const [isActive2, setIsActive2] = useState(null);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const swiperRef = useRef(null);

  const goBack = () => {
    window.history.back();
  };

  //   const [currentImage, setCurrentImage] = useState(product.src); // Initial image source

  useEffect(() => {
    const allProducts = [
      ...datas.children,
      ...datas.women,
      ...datas.men,
      ...datas.untagged,
    ];
    
    const selectedProduct = allProducts.find(
      (p) => p.id === parseInt(productId)
    );

    setProduct(selectedProduct);

    console.log(productId);

    if (selectedProduct) {
      // Now you can safely use selectedProduct
      setProduct(selectedProduct);
      // ...
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  

  const updateColor = (colorIndex) => {
    setActiveColorIndex(colorIndex);

    // Update the active slide in the Swiper component
    if (swiperRef.current) {
      swiperRef.current.slideTo(colorIndex);
    }
  };
  
  const orderDetails = () => {
    // Set values in cartDetails
    cartDetails.name = product.name;
    cartDetails.price = product.price;
    cartDetails.color = product.color[activeColorIndex];
    cartDetails.collection = product.collection;
    cartDetails.src = product.src[activeColorIndex];
    cartDetails.size = text;

  };

  const addToCart = () => {
    // const itemId = productId

    function generateRandomId() {
      // Generate a random number and convert it to a hexadecimal string
      const randomId = Math.random().toString(16).substring(2);
      return randomId;
    }
    const id = generateRandomId();

     const  cartDetails ={
      id: id,
      name: product.name,
      price: product.price,
      color: product.color[activeColorIndex], // Pass the active color here
      collection: product.collection,
      src: product.src[activeColorIndex], // Pass the corresponding image URL
      // description: string[];
      size: text,
    };
console.log(cartDetails);

    addItem(cartDetails);
    toast.success(
      <Link to="/cart">
        <div className="text-black text-sm ">
          Added to Cart! <button className="p-1 text-white">View Cart</button>
        </div>
      </Link>
    );
  };
  const updateText = (size, item) => {
    setText(`${size}`);
    setIsActive(item);
  };

  // const updateColor = (color, item) => {
  //   setColor(`${color}`);
  //   setIsActive2(item);
  // };

  //   const updateImage = (newImage) => {
  //     setCurrentImage(newImage);
  //   };

  return (
    <div
      className="mt-24 sm:mt-16  Quicksand flex text-black  px-10  sm:px-0 flex sm:block justify-center"
      key={product.id}
    >
      <div className="border  m-5 h-full relative  m-auto sm:m-0 sm:w-full w-1/2">
        <div className="hidden fixed z-40  sm:block pt-5 pl-5" onClick={goBack}>
          <i className="fas fa-arrow-left text-black" />
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          // navigation={true}
          initialSlide={activeColorIndex}
          onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
          pagination={{
          type: 'fraction',
        }}
          // thumbs={{ swiper: thumbsSwiper }}
          modules={[  Pagination]}
          className="mySwiper2 my-10 sm:my-0 bg-stone-200 text-white"
          key={product.id}
        >
          {product.src.map((src, id) => (
            <SwiperSlide key={id} className="sm:wfull h-auto  bg-stone-200">
              <img
                src={src}
                alt={product.name}
                className="m-auto m-2  w-full bg-stone-200   "
                style={{ height: "400px", width: "300px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
       onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        // key={id}
      >
          {product.src.map((src, id) => (
            <SwiperSlide key={id} className="py-10 w-auto h-auto">
              <img
                src={src}
                alt={product.name}
                className="m-auto m-2 w-full"
                style={{ height: "100px", width: "50px" }}
              />
            </SwiperSlide>
          ))}
      </Swiper> */}
      </div>
      <div className="m-20 sm:p-5 sm:m-2 w-1/2 sm:w-full rela sm:px-5  ">
      <p className="text-sm text-gray-500">Category/{product.category}</p>
        <div className="text-2xl my-2 flex justify-between">
        
          <h1 className="text-black Aceh text-2xl ">{product.name}</h1>
          
         <h1 className="text-sky-500 AcehLight"> ₦{product.price}</h1>
        </div>
        <div>
          <div className=" flex flex-col">
            <h1 className="text-black capitalize AcehLight ">
              Color: {product.color[activeColorIndex]}
            </h1>
            <div className="flex gap-2  py-5  px-1">
              {product.color.map((color, id) => (
                <button
                  key={id}
                  className={
                    isActive2 === id
                      ? "border border-2 rounded outline rounded-full border-black rounded w-10 h-10 py-1  "
                      : "border rounded rounded-full border-gray-300 rounded w-10 h-10 py-1 "
                  }
                  style={{ backgroundColor: color }}
                  onClick={() => updateColor( id)}
                ></button>
              ))}
            </div>
          </div>

          <div className="flex  my-1 flex-col space-x-6">
            <div className="flex justify-between w-full">
              <h1 className="AcehLight">Size: {text}</h1>
              <h1
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="text-gray-400  underline"
              >
                Size Guide
              </h1>
            </div>
            <div className="flex gap-5">
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-center text-white text-base">
                    Size Guide
                  </h3>
                  <img className="py-4" src="/Images/Avatar/IMG_4684.jpg" />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <div className="grid  grid-rows-2  m-auto grid-flow-col gap-2 my-auto sm:w-full">
                {product.size &&
                  product.size.length > 0 &&
                  product.size.map((item, id) => (
                    <div key={id} className="">
                      <button
                        onClick={() => updateText([item], id)}
                        className={
                          isActive === id
                            ? "border border-gray-300 rounded w-14 bg-black  py-1 text-white "
                            : "border border-gray-300 rounded w-14  py-1 text-black "
                        }
                      >
                        {" "}
                        {item}{" "}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 my-10 sm:flex-col  sm:gap-4 text-white m-auto sm:w-full justify-center">
          <Link onClick={orderDetails} to={`/ordernow/${productId}`}><button className="bg-black py-4  w-40 sm:w-full uppercase">Order Now </button></Link>
          <button onClick={addToCart} className="uppercase border-2 border-black   py-4  text-black bg-white w-40 sm:w-full">
           ADD TO CART
          </button>
          <ToastContainer />
        </div>
        <div className="sm:w-full">
          <div>
            <h1 className="Aceh">Product Description</h1>
            <hr></hr>
            <ul>
              {product.description.map((item, id) => (
                <li key={id} className="text-sm py-2">
                  {item}
                </li>
              ))}
            </ul>
            {product.src.map((item, id) => (
              <img key={id} src={item.src} className="text-sm py-2"></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// export { cartDetails }
export  default Productdes;
