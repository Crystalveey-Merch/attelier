import { datas } from "../assets/data.js";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
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
import {
  addDoc,
  collection,
  DocumentSnapshot,
  endAt,
  doc,
  getDoc,
  endBefore,
  getDocs,
  setDoc,
 
} from "firebase/firestore";
import { db } from "../firebase/auth.js";
// import { Helmet } from "react-helmet-async";

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
  const [loading, setLoading] = useState(false)

  const goBack = () => {
    window.history.back();
  };


useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);

      try {

        const docRef = doc(db, "products", productId); 
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProduct(docSnapshot.data());
        } else {
          console.error(`Post with id '${productId}' not found.`);
        }
        setLoading(false);          
    } catch (error) {

      console.error("Error fetching posts:", error);
    }
  };

  fetchPosts();
}, [productId]);
  //   const [currentImage, setCurrentImage] = useState(product.src); // Initial image source
  // useEffect(() => {

    const orderDetails = () => {
      cartDetails.name = product.name;
      cartDetails.price = product.price;
      cartDetails.collection = product.collection;
      cartDetails.size = text;
        cartDetails.color = product.color[activeColorIndex];
        cartDetails.src = product.imgSrc[activeColorIndex];
  
    };

  // }, [activeColorIndex, product.src, product.collection, product.color, product.name, product.price, text, product.ImgSrc.length]);
  

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


  console.log(cartDetails);

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
      src: product.imgSrc[activeColorIndex], // Pass the corresponding image URL
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

  if (loading === true) {
    return(
  <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700">
      <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
          <span className="sr-only">Loading...</span>
      </div>
  </div>)
  
  }
  return (
    // <>
    //<Helmet>
    //   <title>{product.name}| {product.category}</title>
    //   <meta name='description' content='Login to Wholesome' />
    //   <link rel=" canonical" href='/productdes/:id' />
    // </Helmet>
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
            } }
            pagination={{
              type: 'fraction',
            }}
            // thumbs={{ swiper: thumbsSwiper }}
            modules={[Pagination]}
            className="mySwiper2 my-10 sm:my-0 bg-stone-200 text-white"
            key={product.id}
          >
            {product.imgSrc?.map((src, id) => (
              <SwiperSlide key={id} className="sm:wfull h-auto  bg-stone-200">
                <img
                  src={src}
                  alt={product.name}
                  className="m-auto m-2  w-full bg-stone-200   "
                  style={{ height: "400px", width: "300px" }} />
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
                    className={isActive2 === id
                      ? "border border-4p-4 rounded outline rounded-full border-black rounded w-10 h-10 py-1  "
                      : "border rounded rounded-full border-gray-300 rounded w-10 h-10 py-1 "}
                    style={{ backgroundColor: color }}
                    onClick={() => updateColor(id)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="flex  my-1 flex-col space-x-6">
              <div className="flex justify-between w-full">
                <h1 className="AcehLight">Size: {text}</h1>
                <h1
                  onClick={() => document.getElementById("my_modal_2").showModal()}
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
                          className={isActive === id
                            ? "border border-gray-300 rounded w-14 bg-black  py-1 text-white "
                            : "border border-gray-300 rounded w-14  py-1 text-black "}
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
            <NavLink onClick={() => { orderDetails(); } } to={`/ordernow/${productId}`}>
              <button className="bg-black py-4  w-40 sm:w-full uppercase">Order Now </button>
            </NavLink>
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
              {product.imgSrc?.map((item, id) => (
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
