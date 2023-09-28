import { useParams, Link } from "react-router-dom";
import { datas } from "../assets/data.js";
import { useState } from "react";
import SideNav from "../Components/sidebarComponent/SideNav.jsx";

const Categories = () => {
  const { categoryName } = useParams();


  const allProducts = [...datas.children, ...datas.women, ...datas.men];

const categoryProduct = () => {
  return allProducts.filter((product) => product.category === categoryName);
};

console.log(categoryName)
  
  const [filteredProducts, setFilteredProducts] = useState(categoryProduct);


  const [sortOrder, setSortOrder] = useState("asc");
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
    setFilteredProducts(categoryProduct); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  const filterAfroCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "afrocentric"
    );
    setFilteredProducts(menProducts);
  };
  const filterCasualCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "casual"
    );
    setFilteredProducts(menProducts);
  };
  const filterCorporateCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "corporate"
    );
    setFilteredProducts(menProducts);
  };
  const filterOccasionCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "occasion"
    );
    setFilteredProducts(menProducts);
  };
  const filterHolidayCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "holiday"
    );
    setFilteredProducts(menProducts);
  };
  const filterAccessoriesCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = categoryProduct.filter(
      (product) => product.collection === "accessories"
    );
    setFilteredProducts(menProducts);
  };

  return (
    <div className="mt-36 sm:mt-26  w-full AcehLight  pt-2 sm:px-0">
      <div className="text-center sm:text-xl text-2xl pt-10 text-black py-4 bg-white  Aceh">
        {categoryName.toUpperCase()} Category
        <h1 className="text-xl text-gray-600 AcehLight px-40 sm:px-5 w-full my-2">
        Discover the latest trends and style for you and your loved ones with a wide range of clothing options
        </h1>
      </div>

      <div className="text-gray-800 AcehLight text-l  sm:py-1  flex sm:justify-between px-5  sm:justify-left py-2 sm:gap-5  w-full gap-10 sm:gap-2">
        <div className="dropdown   ">
        <label
              tabIndex={0}
              className=" flex justify-center    hover:border-b"
            >
              <span className="m-auto flex gap-2 p-2 ">
                <i className="fas fa-filter px-2 m-auto" />
                Filter
                <i className="fas fa-sort-down" />
              </span>
              {/* <h1 className="px-2 ">{filteredProducts.length} Results</h1> */}
              
            </label>
            {/* <ul
              tabIndex={}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
            >
              <li onClick={}>
                <a>Men</a>
              </li>
              <li onClick={}>
                <a>Women</a>
              </li>
              <li onClick={}>
                <a>Children</a>
              </li>
            </ul> */}
        </div>

        <div className="dropdown  dropdown-end  rounded p-2">
          <label tabIndex={0} className="m-auto flex gap-2  ">
            <i className="fas fa-arrow-down-short-wide px-2 m-auto" />
            Sort by:
            <i className="fas fa-sort-down" />
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
        {/* <div
          onClick={() => clearFilter()}
          className=" border rounded  p-2 border-black "
        >
          <i className="fas fa-x" />{" "}
          <a className="text-red-500 hover:underline cursor-pointer ">
            Clear filters
          </a>
        </div> */}
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
                key={product.id}
                className="my-4 p-2 m-4 sm:m-0 sm:p-0 border hvr-shrink cursur-pointer"
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link to={`/productdes/${product.id}`}>
                  <img
                    src={product.src}
                    alt={product.name}
                    className="  sm:w-full m-auto imghgt bg-white"
                    style={{ height: "360px", width: "306px" }}
                  />
                  {isHovered === product.id && (
                    <button className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                      Shop
                    </button>
                  )}
                  <div className="  m-auto w-full justify-center ml-5 gap-1 sm:gap-2   ">
                    <h5 className=" text-gray-900 font-light  mt-5 text-x Aceh font-sans sm:text-x capitalize">
                      {product.name}
                    </h5>
                    <h5 className="  text-gray-900 font-light text-x  font-sans sm:text-sm capitalize">
                      {product.category}
                    </h5>
                    {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                    <p className="text-black text-xl mb-4 mt-5  Aceh capitalize ">
                      <i className="fas fa-naira-sign" /> {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
