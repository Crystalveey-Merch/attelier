import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useAtUngData } from "../Components/ShareContext.jsx";
import { convertForURL, convertToLowercase } from "../hooks/convertString.js";
import { Sort } from "../Components/Sort.jsx";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getColorsHex } from "../hooks/getColorsHex.js";

const Categories = () => {
  const { products } = useAtUngData();
  const { categoryName } = useParams();
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products && products.length > 0) {
      // return products that match the category in the URL and are published
      setDisplayedProducts(
        products.filter(
          (product) => convertForURL(product.category) === categoryName
        )
      );
    }
    setLoading(false);
  }, [products, categoryName]);

  const [sortedProducts, setSortedProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (displayedProducts) {
      setSortedProducts(displayedProducts);
    }
  }, [displayedProducts]);

  const filterRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    // Add event listener to close dropdown when clicking outside
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    }

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [selectedFilterOption, setSelectedFilterOption] = useState("All");
  const filterOptions = ["All", "Women", "Men", "Children"];

  useEffect(() => {
    // filter products based on selected filter option
    if (selectedFilterOption === "All") {
      setSortedProducts(displayedProducts);
    } else {
      const filteredProducts = displayedProducts.filter((product) =>
        product.genders.includes(convertToLowercase(selectedFilterOption))
      );
      setSortedProducts(filteredProducts);
    }
  }, [selectedFilterOption, displayedProducts]);

  const handleChangeOption = (option) => {
    setSelectedFilterOption(option);
    setShowFilter(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-700">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (!loading && displayedProducts.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-screen border border-gray-200 rounded-lg bg-gray-50/50">
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-800">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24 text-black px-20 py-6 flex flex-col gap-8 lg:mt-14 xl:px-8 sm:px-2">
      <Helmet>
        <title> {categoryName} Category| Attelier</title>
        <meta name="description" content={`Shop ${categoryName} Category`} />
        <link rel=" canonical" href="/:categoryName" />
      </Helmet>

      <div className="flex gap-1.5 items-center">
        <Link className="text-black text-xs" to="/">
          Home
        </Link>
        <p className="text-black text-xs">/</p>
        <p className="text-black text-xs font-semibold">
          {displayedProducts[0].category}
        </p>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-1.5 items-center sm:flex-col sm:items-start">
          <label className="text-base font-semibold uppercase  md:text-sm">
            Filter By:
          </label>
          <div className="relative" ref={filterRef}>
            <button
              className="w-40 flex gap-2 justify-between items-center uppercase border border-gray-200 p-2 px-2.5 text-base font-semibold rounded-md sm:w-32"
              onClick={() => setShowFilter(!showFilter)}
            >
              <p className="text-sm">{selectedFilterOption}</p>
              <FontAwesomeIcon
                icon={faSliders}
                className="w-4 h-4 text-black"
              />
            </button>
            {showFilter && (
              <div className="absolute top-12 w-40 left-0 bg-white border border-gray-200 rounded-md p-1 z-50 flex flex-col gap-1">
                {filterOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleChangeOption(option)}
                    className="text-sm font-semibold text-black p-2 w-full text-left transition duration-300 ease-in-out hover:bg-gray-100 rounded-md"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {displayedProducts && displayedProducts.length > 0 && (
          <Sort
            items={displayedProducts}
            // displayedItems={sortedProducts}
            setDisplayedItems={setSortedProducts}
          />
        )}
      </div>
      {!sortedProducts ||
        (sortedProducts.length === 0 && (
          <div className="w-full h-[60vh] flex justify-center items-center">
            <p className="text-xl font-semibold text-black">
              No products found
            </p>
          </div>
        ))}
      {displayedProducts && displayedProducts.length > 0 && sortedProducts && (
        <div className="wfull grid grid-cols-4 gap-6 gap-y-6 justify-center xl:gap-4 lg:grid-cols-3 lg:gap-y-6 md:grid-cols-2 sm:gap-3 sm:gap-y-3">
          {sortedProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="z-0 relative w-full max-w-[320px] flex flex-col bg-white border"
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div>
                <img
                  src={
                    isHovered === product.id && product.images
                      ? product.images[0].backImage
                      : product.images[0].frontImage
                  } // Check if hovered and if multiple images are available
                  alt={product.name}
                  className="h-[400px] w-full object-cover object-top sm:h-[300px]"
                />
              </div>
              {isHovered === product.id && (
                <button className="w-full sm:hidden h-full bg-black bg-opacity-40 text-white font-medium  text-x py-2 transition duration-300 ease-in-out absolute z-10 bottom-0 left-0">
                  Shop
                </button>
              )}
              <div className="p-3 flex flex-col gap-4 text-left border-t text-black lg:gap-3 sm:gap-2.5">
                <div>
                  <h4 className="text-lg font-semibold lg:text-base sm:text-[0.95rem]">
                    {product.name}
                  </h4>
                </div>
                <p className="text-sm">
                  {product.price.toLocaleString("en-NG", {
                    style: "currency",
                    currency: "NGN",
                  })}
                </p>
                <div className="flex gap-3 my-1.5">
                  {/* first five */}
                  {product.colors.slice(0, 5).map((color, index) => (
                    <div
                      key={index}
                      className="rounded-full w-5 h-5 border border-gray-200"
                      style={{ backgroundColor: `${getColorsHex(color)}` }}
                    ></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
