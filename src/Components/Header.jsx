import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAtUngData } from "./ShareContext.jsx";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../redux/cart.slice.js";

export const Header = () => {
  const [authUser, setAuthUser] = useState(null);
  const { products } = useAtUngData();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  //  console.log(userId)\

  const userSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        toast.error("Signout Successful");
      })
      .catch((error) => toast.error(error));
  };


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };
  const navigate = useNavigate();

  const handleOnSelect = (item) => {
    // Construct the target URL
    const targetUrl = `/products/${item.id}`;

    // Use history.push() to navigate to the target URL
    navigate(targetUrl);
    // close
    document.getElementById("my_modal_4").close();
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <div className="flex  gap-1" id={item.id}>
          <img src={item.images[0].frontImage} className="w-10" />
          <div className="flex-col m-auto">
            <span
              className="Aceh"
              style={{ display: "block", textAlign: "left" }}
            >
              {item.name}
            </span>
            <span
              className="Aceh text-sky-500"
              style={{ display: "block", textAlign: "left" }}
            >
              {item.price.toLocaleString("en-NG", {
                style: "currency",
                currency: "NGN",
              })}
            </span>
          </div>
        </div>
      </>
    );
  };

  const totalCartItems = useSelector(selectTotalItems);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const headerLinks = document.querySelector(".header-links");
    headerLinks.classList.toggle("open");

    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerLinks.classList.remove("open");
        setMenuOpen(false);
      });
    });
    setMenuOpen((prev) => !prev);
  };

  const tabs = ["Crystaveey's Atelier"];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const preventScroll = () => {
    if (menuOpen) {
      document.body.classList.add("is-side-menu-open");
    } else {
      document.body.classList.remove("is-side-menu-open");
    }
  };

  useEffect(() => {
    preventScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  const [toggleAccount, setToggleAccount] = useState(false);
  return (
    <div
      className="fixed  w-full z-30 top-6 bg-white flex  flex-col gap-0 sm:m-0 items-center xl:px-8 sm:px-0  "
      // style={{ backgroundColor: "#efd7ec" }}
    >
      <div className=" flex sm:block AcehLight   m-auto border sm:border-b justify-between  items-center w-full    py-1 ">
        <div className="flex   gap-96 sm:gap-4 sm:px-4 m-auto justify-center  sm:border-b   ">
          <ul className=" flex gap-3 m-auto  text-black lg:hidden">
            <li className="link-item">
              <Link
                to="/aboutus"
                className="middle  text-sm   hover:text-gray-750"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="middle  text-sm   hover:text-gray-750"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://blog.crystalveey.com/atelier"
                target="_blank"
                rel="noreferrer"
                className="middle  text-sm   hover:text-gray-750"
              >
                Blog
              </a>
            </li>
          </ul>
          <button
            id="menu-btn"
            onClick={handleMenu}
            className={`hamburger  ${
              menuOpen ? "open" : ""
            } hidden focus:outline-none z-30 lg:flex flex-col gap-2     my-auto`}
          >
            <span className="harburger-top   bg-gray-900 transition duration-500 ease-in-out "></span>
            <span className="harburger-middle    bg-gray-900 transition duration-500 ease-in-out  "></span>
            <span className="harburger-bottom   bg-gray-900 transition duration-500 ease-in-out  "></span>
          </button>
          <Link
            to="/"
            className="m-auto flex  sm:ml-12 sm:flex-col justify-center"
          >
            <h1
              className="text-2xl px-2  sm:px-8	m-auto   text-center  sm:text-base text-black Pragmatica "
              style={{ lineHeight: "1rem" }}
            >
              CRYSTALVEEY
            </h1>
            <h1 className="Tabac spacing  text-2xl sm:text-base text-center text-black">
              ATELIER
            </h1>
          </Link>

          <div className="flex gap-6 sm:gap-4 justify-center   text-gray-600 ">
            {/* <select className="select w-full text-xl max-w-xs bg-white outline outline-0 ">
            <option>₦</option>
            <option>$</option>
          </select> */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <button
              className=" flex text-center "
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <i className="fa-solid fa-magnifying-glass m-auto text-black"></i>
              {/* <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-600 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                  fill="currentColor"
                ></path>
              </svg> */}
            </button>
            <dialog id="my_modal_4" className="modal w-full max-w-2xl rounded-xl sm:w-11/12">
              <div className="modal-box bg-white h-96">
                <div className="my-1 w-full Quicksand  ">
                  <ReactSearchAutocomplete
                    items={products}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    // close on select
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    styling={{
                      borderRadius: "none",
                      boxShadow: "none",
                      border: "none",
                      fontSize: "13px",
                      fontFamily: "Quicksand",
                      padding: "2px",
                    }}
                    placeholder="Input search"
                    autoFocus
                    className="w-full sm:w-full search border-b text-sm"
                    formatResult={formatResult}
                  />
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            <button
              className="flex m-auto sm:hidden h-max mx-2"
              onMouseEnter={() => setToggleAccount(true)}
              onMouseLeave={() => setToggleAccount(false)}
            >
              <i className="fa-regular fa-user m-auto text-black"></i>
              {/* <svg
                className="w-6 h-6 m-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2.5C8.96251 2.5 6.50012 4.96245 6.50012 8C6.50012 9.88946 7.45289 11.5564 8.90419 12.5466C5.53963 13.7791 3.11605 16.9629 3.004 20.7277C2.99168 21.1417 3.31733 21.4873 3.73136 21.4997C4.14539 21.512 4.49101 21.1863 4.50334 20.7723C4.62347 16.7357 7.93397 13.5 12 13.5C16.0659 13.5 19.3764 16.7357 19.4966 20.7723C19.5089 21.1863 19.8545 21.512 20.2685 21.4997C20.6826 21.4873 21.0082 21.1417 20.9959 20.7277C20.8839 16.963 18.4603 13.7791 15.0958 12.5466C16.5472 11.5564 17.5 9.88949 17.5 8C17.5 4.96245 15.0376 2.5 12 2.5ZM8.00012 8C8.00012 5.79085 9.79096 4 12 4C14.2091 4 16 5.79085 16 8C16 10.2092 14.2091 12 12 12C9.79096 12 8.00012 10.2092 8.00012 8Z"
                  fill="currentColor"
                />
              </svg> */}
              {toggleAccount && (
                <ul className="px-5 w-52 py-5 my-2 text-black bg-white shadow-2xl absolute top-5 right-20 text-left flex flex-col gap-5 rounded-lg transition ease-in-out duration-500 ">
                  <li className="w-full">
                    <Link
                      to="/"
                      className=" text-sky-500  text-xs   hover:text-gray-750"
                    >
                      Welcome!{authUser ? <h1>{authUser.displayName}</h1> : ""}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="  text-sm   hover:text-gray-750"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {authUser ? (
                    <li className="text-red-500 hover" onClick={userSignout}>
                      Sign out
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  )}

                  <Link to="/contact">
                    <li>Help Center</li>
                  </Link>
                </ul>
              )}
            </button>
            <Link to="/cart" className="  m-auto  w-7  h-5   relative ">
              <button className="flex    ">
                {/* <i className="fa-regular fa-user"></i> */}
                {/* <i className="fa-solid fa-cart-shopping m-auto text-black "></i> */}

                <svg
                  viewBox="0 0 30 30"
                  className="w-6 h-6 m-auto"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  co
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  ></path>
                </svg>
                {totalCartItems > 0 && (
                <div className=" top-0 right-0  absolute bg-black h-4 w-4 border border-white md-3 text-white rounded-full">
                  <h1 className="text-xs m-auto flex justify-center  ">
                    {totalCartItems}
                  </h1>
                </div>
              )}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ul className="text-black text-sm flex justify-center gap-10 p-3  xl:gap-6 AcehLight lg:hidden bg-white border-b w-full">
        <li className="">
          <Link to="/readytowear">
            <label className="middle cursor-pointer text-sm   hover:text-gray-750">
              Ready to Wear
            </label>
          </Link>
        </li>
        <li>
          <Link
            to="/custompage1"
            className="middle  text-sm   hover:text-gray-750"
          >
            Custom Made
          </Link>
        </li>
        <li>
          <Link
            to="/consultation"
            className="middle  text-sm   hover:text-gray-750"
          >
            Consultation
          </Link>
        </li>
        {/* <div className="dropdown middle dropdown-end hover:text-gray-750">
          <label tabIndex={0} className="text-center m-auto ">
            Categories &#8964;
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-black rounded-box w-52 mt-4"
          >
            <li>
              <a href="/category/women">Women</a>
            </li>
            <li>
              <a href="/category/men">Men</a>
            </li>
            <li>
              <a href="category/children">Kids</a>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
            </li>
            <li>
              <a href="/shoes">Shoes</a>
            </li>
            <li>
              <a href="/bags">Bags</a>
            </li>
          </ul>
        </div> */}

        <li>
          <a
            href="https://untagg.crystalveey.com"
            target="_blank"
            rel="noreferrer"
            className="middle  text-sm  hover:text-gray-750"
          >
            Untagg
          </a>
        </li>
        {/* <li>
        
          <Link
            to="/"
            className="middle  text-sm   hover:text-gray-750"
          >
            About
          </Link>
        </li> */}
      </ul>
      <div className=" header-links z-20  ">
        <div className="hidden bg-white text-black lg:flex flex-col gap-4 sm:gap-0  h-screen w-full p-4 pt-10  ">
          {authUser ? (
            <>
              <div
                className="flex  justify-left text-red-600  mt-4  w-full"
                onClick={userSignout}
              >
                <i className="fas fa-user  ">
                  {" "}
                  <span className=" AcehLight"> Sign out</span>{" "}
                </i>
              </div>
              <h1 className="mb-5 text-sm AcehLight mt-3 text-center  ">
                {" "}
                Welcome! {authUser.displayName}
              </h1>
            </>
          ) : (
            <NavLink to="/login">
              <div className="flex p-3 justify-center bg-gray-200 text-black mb-5 w-full ">
                <i className="fas fa-user  ">
                  {" "}
                  <span className=" AcehLight"> Sign in </span>{" "}
                </i>
              </div>
            </NavLink>
          )}

          <div className="tabs w-full   text-black">
            {tabs.map((tab, index) => (
              <a
                key={index}
                className={`tab tab-bordered text-black m-auto Aceh  ${
                  activeTabIndex === index ? "tab-active" : ""
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab}
              </a>
            ))}
          </div>

          {activeTabIndex === 0 && (
            <div className="AcehLight">
              <ul className="flex flex-col my-4 gap-5">
                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/readytowear"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Ready to Wear
                  </NavLink>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/custompage1"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Custom Order
                  </NavLink>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/categorylist"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Shop Category
                  </NavLink>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/category/accessories"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Accessories
                  </NavLink>
                </li>

                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/consultation"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Consultation
                  </NavLink>
                </li>
              </ul>
              <hr></hr>
              <ul className="flex flex-col my-4 gap-5">
                <li className="border-gray-200 link-item pb-2">
                  <NavLink
                    to="/dashboard"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    <button className="">Dashboard</button>
                  </NavLink>
                </li>
                <li className="border-gray-200 pb-2">
                  <NavLink
                    to="/aboutus"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="border-gray-200 pb-2">
                  <NavLink
                    to="/giftcards"
                    className="middle  text-sm link-item   hover:text-gray-750"
                  >
                    Gift Cards
                  </NavLink>
                </li>
              </ul>
              <hr></hr>
              <NavLink to="/contact">
                <ul className="my-4">
                  <li className="link-item text-sm">Contact Us</li>
                </ul>
              </NavLink>

              <NavLink to="/contact"></NavLink>
            </div>
          )}

          {activeTabIndex === 1 && (
            <div className="AcehLight py-5">
              <ul className="flex flex-col gap-5">
                <li className="border-gray-200 pb-2">
                  <NavLink
                    to="/refurblishpage1"
                    className="middle  text-sm  link-item hover:text-gray-750"
                  >
                    Refurblish
                  </NavLink>
                </li>
                <li className="border-gray-200 pb-2">
                  <NavLink
                    to="/sellpage1"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    Sell
                  </NavLink>
                </li>
                <li className="border-gray-200 pb-2">
                  <NavLink
                    to="/untagbuy"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    Buy
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
