import { useParams, Link } from "react-router-dom";
import { datas } from "../assets/data.js";
import { useState } from "react";
import SideNav from "../Components/sidebarComponent/SideNav.jsx";


const Categories = () => {
  const { categoryName } = useParams();

  const allProducts = datas.products.filter(
    (product) => product.category === categoryName
  );
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  
  const [sortOrder, setSortOrder] = useState('asc');
  const [isHovered, setIsHovered] = useState(false);

  const handleSort = (order) => {
    const sorted = [...filteredProducts];
    if (order === 'asc') {
      sorted.sort((a, b) => a.price - b.price);
      setSortOrder('asc');
    } else {
      sorted.sort((a, b) => b.price - a.price);
      setSortOrder('desc');
    }
    setFilteredProducts(sorted); // Update filteredProducts with the sorted array
  };
  const clearFilter = () => {
    setFilteredProducts(allProducts); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  const filterAfroCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "afrocentric"
    );
    setFilteredProducts(menProducts);
  };
  const filterCasualCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "casual"
    );
    setFilteredProducts(menProducts);
  };
  const filterCorporateCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "corporate"
    );
    setFilteredProducts(menProducts);
  };
  const filterOccasionCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "occasion"
    );
    setFilteredProducts(menProducts);
  };
  const filterHolidayCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "holiday"
    );
    setFilteredProducts(menProducts);
  };
  const filterAccessoriesCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.collection === "accessories"
    );
    setFilteredProducts(menProducts);
  };

  return (
    <div className="mt-36 sm:mt-28  w-full Quicksand  pt-2 sm:px-4">
      <div className="text-center sm:text-xl text-3xl bg-black text-white py-5 px-20 Aceh">
        {categoryName.toUpperCase()} Category
      </div>
      
        <div className="text-gray-100 bg-gray-800 sm:py-4  text-sm flex justify-end sm:justify-center w-full gap-10 sm:gap-5">
          <div className="dropdown   ">
            <label tabIndex={0} className=" flex justify-center lowercase m-2 sm:m-0  hover:border-b">
            <span className="m-auto flex gap-2 ">
              <i className="fas fa-filter pr-2" />
              Filter <i className="fas fa-sort-down" />
</span>
              <h1 className="px-2">
                {filteredProducts.length} Results
                </h1>
              <div>
         
            </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
            >
              <li onClick={filterCasualCollection}>
                <a>Casual</a>
              </li>
              <li onClick={filterCorporateCollection}>
                <a>Corporate</a>
              </li>
              <li onClick={filterAfroCollection}>
                <a>Afrocentric</a>
              </li>
              <li onClick={filterHolidayCollection}>
                <a>Holiday</a>
              </li>
              <li onClick={filterOccasionCollection}>
                <a>Occasion</a>
              </li>
              <li onClick={filterAccessoriesCollection}>
                <a>Accessories</a>
              </li>
            </ul>
            
          </div>
          <div onClick={() => clearFilter()} className=" m-2 sm:m-0 ">
            <i className="fas fa-x" />{" "}
            <a className="text-red-500 hover:underline cursor-pointer ">
              Clear filters
            </a>
          </div>
          <div className="dropdown dropdown-end m-2 sm:m-0">
            <label tabIndex={0} className=" mx-10 m-auto sm:mx-0  lowercase ">
              <i className="fas fa-info pr-2" />
              Sory by: <i className="fas fa-sort-down" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
            >
              <li onClick={()=> handleSort('asc')}>
                <a>Lowest to highest</a>
              </li>
              <li onClick={()=> handleSort('desc')}>
                <a>Highest to Lowest</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="flex mt-10 sm:block">
          <div className="sm:hidden w-80">
            <SideNav />
          </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 w-full gap-2 bg-gray-100  justify-center cursor ">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="my-4 p-2 m-4 sm:m-0 sm:p-0 border rounded rounded-lg hvr-shrink cursur-pointer"
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
             <Link to={`/productdes/${product.id}` }>
              <img
                src={product.src}
                alt={product.name}
                className="  sm:w-full m-auto imghgt"
                style={{ height: "360px", width: "306px" }}
              />
              {isHovered === product.id && (
                <button className="w-full sm:hidden h-full bg-gray-200 bg-opacity-25 text-white font-medium rounded rounded-lg text-x py-2 hover:bg-gray-600 transition duration-300 ease-in-out absolute z-10 bottom-0 hover:bg-opacity-70 left-0">
                  Shop
                </button>
              )}
              <div className="  m-auto w-full justify-center gap-1 sm:gap-2   ">
                <h5 className=" text-gray-900 font-light text-x text-center font-sans sm:text-sm">
                  {product.name}
                </h5>
                {/* <h6 className="uppercase sm:text-sm">{item.title}</h6> */}
                <p className="text-black text-xl mb-4 text-center Aceh ">
                 <i className="fas fa-naira-sign"/> {product.price}
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
