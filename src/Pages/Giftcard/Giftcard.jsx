import { useParams, Link } from "react-router-dom";
import { datas } from "../../assets/data.js";
import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase/auth.js";
import {
  addDoc,
  collection,
  DocumentSnapshot,
  endAt,
  endBefore,
  getDocs,
  setDoc,
} from "firebase/firestore";

const Giftcard = () => {
  const { addItem } = useCart();
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortOrder, setSortOrder] = useState("asc");
  const [isHovered, setIsHovered] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  // const allGiftcards =
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);

        const querySnapshot = await getDocs(collection(db, "products"));
        const postData = [];
        querySnapshot.forEach((doc) => {
          // Extract the data from each document
          const post = doc.data();
          post.id = doc.id;
          postData.push(post);
        });
        const newArrival = postData.filter(
          (product) => product.giftcards === "True"
        );
        setProducts(newArrival);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setProducts([]);
      }
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // const categoryProduct = () => {
  //   // return allProducts.filter((product) => product.category === categoryName);
  // };

  // console.log(categoryName)

  const handleSort = (order) => {
    const sorted = [...filteredProducts];
    if (order === "asc") {
      sorted.sort((a, b) => a.price - b.price);
      setSortOrder("asc");
    } else {
      sorted.sort((a, b) => b.price - a.price);
      setSortOrder("desc");
    }
    setFilteredProducts(sorted); // Update filteredProducts with the sorted array
  };
  const clearFilter = () => {
    setFilteredProducts(filteredProducts); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  // const filterMenCollection = () => {

  //     // Filter products with a data collection called "men"
  //     const menFilter = menProducts.filter(
  //       (product) => product.category === categoryName
  //     );
  //     setFilteredProducts(menFilter);
  //   };
  //   const filterWomenCollection = () => {
  //     // Filter products with a data collection called "men"
  //     const womenFilter = womenProducts.filter(
  //       (product) => product.category === categoryName
  //     );
  //     setFilteredProducts(womenFilter);
  //   };
  //   const filterChildrenCollection = () => {
  //     // Filter products with a data collection called "men"
  //     const childrenFilter = childrenProducts.filter(
  //       (product) => product.category === categoryName
  //     );
  //     setFilteredProducts(childrenFilter);
  //   };
  const addToCart = (product) => {
    // const itemId = productId
    console.log("addToCart - product:", product);
    function generateRandomId() {
      // Generate a random number and convert it to a hexadecimal string
      const randomId = Math.random().toString(16).substring(2);
      return randomId;
    }
    const id = generateRandomId();

    const cartDetails = {
      id: id,
      name: product.name,
      price: product.price,
      src: product.imgSrc,
    };

    addItem(cartDetails);
    console.log(cartDetails);
    toast.success(
      <Link to="/cart">
        <div className="text-black text-sm ">
          Added to Cart! <button className="p-1 text-white">View Cart</button>
        </div>
      </Link>
    );
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
    <div className="mt-24 sm:mt-16 w-full AcehLight  mb-20 pt-2 sm:px-0">
      <div className="hidden sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <div className="text-center capitalize sm:text-xl text-2xl  text-black py-6 border-b border-black  bg-white  Aceh">
        GIFTCARDS
        <h1 className="text-base text-gray-600 AcehLight px-40 sm:px-5 w-full my-2">
          Buy the cheapest gift cards at affordable rate{" "}
        </h1>
      </div>

      <div className="text-gray-800 AcehLight text-l  sm:py-1  flex sm:justify-between px-5  sm:justify-left py-2 sm:gap-5  w-full gap-10 sm:gap-2">
        <div className="dropdown  dropdown-start  rounded p-2">
          <label tabIndex={0} className="m-auto uppercase flex gap-2  ">
            Sort by
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 light:text-black text-white rounded-box w-52"
          >
            <li onClick={() => handleSort("asc")}>
              <a>Lowest to highest</a>
            </li>
            <li onClick={() => handleSort("desc")}>
              <a>Highest to Lowest</a>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="flex mt-1  justify-center">
        {/* <div className="sm:hidden w-80">
            <SideNav />
          </div> */}
        <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 w-full  px-20  sm:px-5 justify-center cursor ">
          {filteredProducts.map((product) => {
            return (
              <div
                onClick={() => addToCart(product)}
                key={product.id}
                className="my-4 p-2 m-4 sm:m-0 sm:p-0  hvr-shrink cursur-pointer"
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={product.imgSrc[0]}
                  alt={product.name}
                  className="  sm:w-full m-auto imghgt bg-stone-200"
                  style={{ height: "360px", width: "306px" }}
                />
                {isHovered === product.id && (
                  <button className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                    Add to Cart
                  </button>
                )}
                <div className="  m-auto border w-full justify-center px-5 gap-1 sm:gap-2   ">
                  <h5 className=" text-gray-900 font-light  mt-5 text-x Aceh font-sans sm:text-x capitalize">
                    {product.name}
                  </h5>
                  <h5 className="  text-gray-900 font-light text-x  font-sans sm:text-sm capitalize">
                    {product.category}
                  </h5>
                  {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                  <p className="text-black text-xl mb-4 mt-5  Aceh capitalize ">
                    ₦{product.price}
                  </p>
                </div>
              </div>
            );
          })}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Giftcard;
