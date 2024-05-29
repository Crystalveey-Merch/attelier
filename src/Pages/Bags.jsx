import { useParams, Link } from "react-router-dom";
import { datas } from "../assets/data.js";
import { useState } from "react";
import SideNav from "../Components/sidebarComponent/SideNav.jsx";

const Bags = () => {
  const { categoryName } = useParams();

  const allProducts = datas.products.filter((product) => product.bags);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

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
    setFilteredProducts(allProducts); // Reset the filteredProducts to original order
    setSortOrder("asc"); // Reset the sorting order
  };
  const filterMenCollection = () => {
    // Filter products with a data collection called "men"
    const menProducts = allProducts.filter(
      (product) => product.category === "men"
    );
    setFilteredProducts(menProducts);
  };
  const filterWomenCollection = () => {
    // Filter products with a data collection called "men"
    const womenProducts = allProducts.filter(
      (product) => product.category === "women"
    );
    setFilteredProducts(womenProducts);
  };
  const filterChildrenCollection = () => {
    // Filter products with a data collection called "men"
    const childrenProducts = allProducts.filter(
      (product) => product.category === "children"
    );
    setFilteredProducts(childrenProducts);
  };
  return (
    <div className="mt-36 sm:mt-24  w-full Quicksand  pt-2 sm:px-0">
      <div className="text-center sm:text-xl bg-black text-3xl text-white py-5 px-20 Aceh">
        Bags
      </div>

      <div className="text-gray-800 bg-gray-100 sm:py-4 text-sm flex justify-center sm:justify-center w-full py-5 gap-5 sm:gap-2">
        <div className="dropdown    ">
          <label
            tabIndex={0}
            className=" flex justify-center lowercase  hover:border-b"
          >
            <span className="m-auto flex gap-2 border p-2  border-black rounded ">
              <i className="fas fa-filter " />
              Filter
              <i className="fas fa-sort-down" />
            </span>
            {/* <h1 className="px-2 ">{filteredProducts.length} Results</h1> */}
            <div></div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-white rounded-box w-52"
          >
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
        <div className="dropdown  dropdown-end border border-black rounded p-2 ">
          <label tabIndex={0} className="  ">
            <i className="fas fa-arrow-down-short-wide px-2 m-auto" />
            Sort by:
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
        <div
          onClick={() => clearFilter()}
          className="  border rounded  p-2 border-black"
        >
          <i className="fas fa-x" />{" "}
          <a className="text-red-500 hover:underline cursor-pointer ">
            Clear filters
          </a>
        </div>
      </div>
      <div className="flex mt-10 ">
        <div className="sm:hidden w-80">
          <SideNav />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 gap-2 bg-gray-100  justify-center cursor ">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="my-4 p-2 m-4 sm:m-0 sm:p-0 border rounded rounded-lg hvr-shrink cursur-pointer"
                onMouseEnter={() => setIsHovered(product.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Link to={`/products/${product.id}`}>
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

export default Bags;
