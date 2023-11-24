import { Link, useParams } from "react-router-dom";
import { datas } from "../assets/data.js";
import { useState, useEffect } from "react";
import SideNav from "../Components/sidebarComponent/SideNav.jsx";
import {
  addDoc,
  collection,
  DocumentSnapshot,
  endAt,
  endBefore,
  getDocs,
  setDoc,
 
} from "firebase/firestore";
import { db } from "../firebase/auth.js";

const Collection = () => {
  const [products, setProducts] = useState([]);

  const { collectionName } = useParams();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false)

    const goBack = () => {
    window.history.back();
    }

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
        const newArrival = postData.filter((product) => product.collection === collectionName);
        setProducts(newArrival);

         setLoading(false)
      } catch (error) {
       

        console.error("Error fetching posts:", error);
        setProducts([]);
      }
    };
  
    fetchPosts();
  }, [collectionName]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

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
    setFilteredProducts(products); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  
  const filterMenCollection = () => {
    const menProducts = products.filter((product) => product.filter === "Men");
    setFilteredProducts(menProducts);
  };

  const filterWomenCollection = () => {
    // Filter products with a data collection called "men"
    const womenProducts = products.filter(
      (product) => product.filter === "Women"
    );

    setFilteredProducts(womenProducts);
  };
  const filterChildrenCollection = () => {
    // Filter products with a data collection called "men"
    const childrenProducts = products.filter(
      (product) => product.filter === "Children"
    );

    setFilteredProducts(childrenProducts);
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
    <div className="mt-24 sm:mt-16  w-full AcehLight  pt-2 sm:px-0 ">
      <div>
      <div className="hidden sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black"/>
      </div>
        <div className="text-center capitalize sm:text-xl text-2xl  text-black py-2 border-b border-black bg-white  Aceh">
          {collectionName} Collection
          <h1 className="text-base  text-gray-600 AcehLight px-40 sm:px-5 w-full my-2">
            Crystalveey’s Atelier collection is a mixture of our signature line
            of diverse designs for afrocentric, resort, party, formal, and
            comfort wears.
          </h1>
        </div>

        <div className=" text-gray-800 AcehLight text-l  sm:py-1  flex sm:justify-between px-5  sm:justify-left py-2 sm:gap-5  w-full gap-10 sm:gap-2">
          <div className="dropdown">
            <label
              tabIndex={0}
              className=" flex justify-center    hover:border-b"
            >
              <span className="m-auto flex gap-2 p-2 uppercase ">
                
                Filter
               
              </span>
              {/* <h1 className="px-2 ">{filteredProducts.length} Results</h1> */}
              
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 text-white rounded-box w-52"
            >
             <li onClick={clearFilter}>
                <a>All</a>
              </li>
              <li onClick={filterMenCollection}>
                <a>Men</a>
              </li>
              <li onClick={filterWomenCollection}>
                <a>Women</a>
              </li>
              <li onClick={filterChildrenCollection}>
                <a>Children</a>
              </li>
            </ul>
          </div>
          {/* <div
            onClick={() => clearFilter()}
            className="  p-2 text-sm "
          >
            <i className="fas fa-x" />{" "}
            <a className="text-red-500 hover:underline cursor-pointer ">
              Clear filters
            </a>
          </div> */}
          <div className="dropdown   dropdown-end  rounded p-2 ">
            <label tabIndex={0} className=" m-auto flex gap-2 uppercase ">
              
              Sort by
            
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-900 text-white rounded-box w-52"
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
        <div className="flex mt-1  justify-center ">
          {/* <div className="sm:hidden w-80">
            <SideNav />
          </div> */}

          <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 w-full px-20   sm:px-5 justify-center cursor ">
            {filteredProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className="my-4 p-2 m-4 sm:m-0 sm:p-0   hvr-shrink cursur-pointer justify-center"
                  onMouseEnter={() => setIsHovered(product.id)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                         {product.untagged === "True" && (
        <div className="text-gray-500 font-medium absolute badge p-3 m-2">Untagged</div>
      )}
                  <Link to={`/productdes/${product.id}`}>
                    <img
                      src={product.imgSrc[0]}
                      alt={product.name}
                      className="  sm:w-full m-auto imghgt bg-stone-200"
                      style={{ height: "360px", width: "306px" }}
                    />
                    {isHovered === product.id && (
                      <button className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium  text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                        Shop
                      </button>
                    )}
                    <div className="  m-auto border w-full justify-center px-5 gap-1 sm:gap-2   ">
                    <h5 className=" text-gray-900 font-light  mt-5 text-xl Aceh font-sans sm:text-x capitalize">
                      {product.name}
                    </h5>
                    <h5 className=" badge p-3 bg-stone-800 text-gray-300 font-light text-x  font-sans sm:text-sm capitalize">
                      {product.category}
                    </h5>
                    <div className="flex gap-3 my-2">
                    {product.color.map((color, index) => (
                      <div key={index} className="rounded-full w-5 h-5" style={{backgroundColor:`${color}`}}></div>
                    ))}</div>
                    {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                    <p className="text-black text-xl mb-4 mt-5  Aceh capitalize ">
                    ₦{product.price}
                    </p>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
