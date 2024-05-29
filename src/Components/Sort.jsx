/* eslint-disable react/prop-types */
"use client";
import { useState, useEffect, useRef } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sort = ({ items, setDisplayedItems }) => {
  const [selectedSortOption, setSelectedSortOption] = useState("Recommended");

  const [showSortOptions, setShowSortOptions] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to close dropdown when clicking outside
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSortOptions(false);
      }
    }

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    return () => {
      // Unbind the event listener on cleanup
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Initially, set a random sort option when the component mounts
    const sortOptions = [
      "Recommended",
      "New Arrivals",
      "Price - Low to High",
      "Price - High to Low",
    ];
    // const randomOption = sortOptions[Math.floor(Math.random() * sortOptions.length)];
    // setSelectedSortOption(randomOption);
    sortItems(sortOptions[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const sortItems = (sortOption) => {
    // Implement sorting logic based on the selected option
    // ...

    // Example sorting (you can replace this with your actual sorting logic)
    let sortedItems = [...items];
    switch (sortOption) {
      case "New Arrivals":
        sortedItems = sortedItems.sort((a, b) => {
          // Sort by New Arrivals first
          if (a.newArrival && !b.newArrival) {
            return -1;
          }
          if (!a.newArrival && b.newArrival) {
            return 1;
          }
          // If both have the same newArrival status, sort by createdAt
          return b.createdAt - a.createdAt;
        });
        break;
      case "Price - Low to High":
        sortedItems = sortedItems.sort((a, b) => {
          const priceA = a.price;
          const priceB = b.price;
          return priceA - priceB;
        });
        break;
      case "Price - High to Low":
        sortedItems = sortedItems.sort((a, b) => {
          const priceA = a.price;
          const priceB = b.price;
          return priceB - priceA;
        });
        break;
      default:
        // sort by lowest sortOrderNumber
        sortedItems = sortedItems.sort((a, b) => a.sortOrder - b.sortOrder);
    }

    setDisplayedItems(sortedItems);
  };

  return (
    <div className="z-10 flex justify-between items-center gap-2 sm:flex-col sm:items-start">
      {/* <h4 className="text-lg font-semibold xl:text-base md:text-sm">
        {displayedItems.length > 1
          ? ` ${displayedItems.length} results`
          : displayedItems.length === 1
          ? `${displayedItems.length} result`
          : ""}
      </h4> */}
      <div className="flex gap-1.5 items-center sm:flex-col sm:items-start">
        <label className="text-base font-semibold uppercase  md:text-sm">
          Sort by:
        </label>
        <div className="relative inline-block z-0" ref={dropdownRef}>
          <button
            onClick={toggleSortOptions}
            className="z-0 flex gap-2 w-52 justify-between rounded-md border border-gray-300 p-2 focus:outline-none lg:text-sm lg:p-1.5 sm:w-40"
          >
            <p className="text-[0.85rem] one-line-text">{selectedSortOption}</p>

            <FontAwesomeIcon
              icon={faAngleDown}
              alt="chevron-down"
              className={`w-4 h-4 transform transition-transform duration-500 ${
                showSortOptions ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <div
            className={`${
              showSortOptions
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0"
            } origin-top-right absolute right-0 mt-2 w-60 py-2 bg-white border border-gray-300 rounded-md shadow-lg transform transition-transform duration-300 ease-out lg:w-52`}
          >
            <ul className="text-sm text-start px-3 space-y-2 pl-2">
              <li
                onClick={() => {
                  sortItems("Recommended");
                  setSelectedSortOption("Recommended");
                  toggleSortOptions();
                }}
                className="cursor-pointer"
              >
                Recommended
              </li>
              <li
                onClick={() => {
                  sortItems("New Arrivals");
                  setSelectedSortOption("New Arrivals");
                  toggleSortOptions();
                }}
                className="cursor-pointer"
              >
                New Arrivals
              </li>
              <li
                onClick={() => {
                  sortItems("Price - Low to High");
                  setSelectedSortOption("Price - Low to High");
                  toggleSortOptions();
                }}
                className="cursor-pointer"
              >
                Price - Low to High
              </li>
              <li
                onClick={() => {
                  sortItems("Price - High to Low");
                  setSelectedSortOption("Price - High to Low");
                  toggleSortOptions();
                }}
                className="cursor-pointer"
              >
                Price - High to Low
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
