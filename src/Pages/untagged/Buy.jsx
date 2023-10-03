import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { datas } from "../../assets/data.js";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const UntagBuy = () => {
  const [product, setProduct] = useState();

  // const { collectionName } = useParams();
  const goBack = () => {
    window.history.back();
  };
  const allProducts = [...datas.untagged];
  // const menProducts = datas.men;
  // const womenProducts = datas.women;
  // const childrenProducts = datas.children;
  // const collectionProduct = () => {
  //   return allProducts.filter((product) => product.collection === collectionName);
  // };
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [sortOrder, setSortOrder] = useState("asc");

  // const [sortOrder, setSortOrder] = useState("asc");
  const [isHovered, setIsHovered] = useState(false);

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
    setFilteredProducts(allProducts); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  const filterMenCollection = () => {

    // Filter products with a data collection called "men"
    const menFilter = filteredProducts.filter(
      (product) => product.section === "men"
    );
    setFilteredProducts(menFilter);
  };
  const filterWomenCollection = () => {
    // Filter products with a data collection called "men"
    const womenFilter = filteredProducts.filter(
      (product) => product.section ===" women"
    );
    setFilteredProducts(womenFilter);
  };
  const filterChildrenCollection = () => {
    // Filter products with a data collection called "men"
    const childrenFilter = filteredProducts.filter(
      (product) => product.section === "children"
    );
    setFilteredProducts(childrenFilter);
  };

  return (
    <div className="mt-24 sm:mt-16  w-full AcehLight  pt-2 sm:px-0 ">
      <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <div>
        <div className="text-center sm:text-xl text-2xl pt-5 text-black py-4 bg-white capitalize Aceh">
          Buy at untagged section
        </div>
        <p className="text-center text-md px-5">Welcome to our recommerce site! Here you will find a wide range of pre owned goods that are in good condition and ready for a new home.
</p>
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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
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
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
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
                  <Link to={`/productdes/${product.id}`}>
                    <img
                      src={product.src[0]}
                      alt={product.name}
                      className="  sm:w-full m-auto imghgt bg-stone-200"
                      style={{ height: "360px", width: "306px" }}
                    />
                    {isHovered === product.id && (
                      <button className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium  text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                        Shop
                      </button>
                    )}
                    <div className="  m-auto w-full border justify-center px-5 gap-1 sm:gap-2   ">
                      <h5 className=" text-gray-900 font-light text-x Aceh mt-5 font-sans sm:text-x capitalize">
                        {product.name}
                      </h5>
                      <h5 className=" text-gray-900 font-light text-x  font-sans sm:text-sm capitalize">
                        {product.category}
                      </h5>
                      {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                      <p className="text-black text-xl mb-4  mt-5 Aceh capitalize">
                      ₦
                        {product.price}
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

export default UntagBuy;
