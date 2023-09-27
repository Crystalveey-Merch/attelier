import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
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

  const tabs = ["Crystaveey", "Untag"];
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
      className="fixed top-0 left-0 w-full z-30  bg-white flex  flex-col gap-0 sm:m-0  w-full items-center xl:px-8 sm:px-0  "
      // style={{ backgroundColor: "#efd7ec" }}
    >
      <div className=" flex sm:block Quicksand border border-b border justify-between items-center w-full px-10 sm:px-2 py-2 ">
        <div className="flex sm:border-b   ">
          <button
            id="menu-btn"
            onClick={handleMenu}
            className={`hamburger  ${
              menuOpen ? "open" : ""
            } hidden lg:block focus:outline-none z-30 my-4`}
          >
            <span className="harburger-top  bg-gray-900 transition duration-500 ease-in-out  "></span>
            <span className="harburger-middle bg-gray-900 transition duration-500 ease-in-out  "></span>
            <span className="harburger-bottom bg-gray-900 transition duration-500 ease-in-out  "></span>
          </button>
          <ul className=" flex gap-3 justify-start text-black lg:hidden">
            <li className="link-item">
              <Link
                to="/aboutus"
                className="middle  text-sm   hover:text-gray-750"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="middle  text-sm   hover:text-gray-750">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="middle  text-sm   hover:text-gray-750">
                Blog
              </Link>
            </li>
          </ul>
          <Link to="/" >
          <div className=" m-auto ml-96">
          <img src="/Images/Avatar/logo.jpeg" className="w-48"/>
          </div>
          </Link>
        </div>
        <div className="flex gap-3  items-center   justify-center text-gray-600 sm:gap-1">
          {/* <select className="select w-full text-xl max-w-xs bg-white outline outline-0 ">
            <option>₦</option>
            <option>$</option>
          </select> */}
          <div className="my-2 flex  border-gray-600 ">
            <input
              className="p-2 bg-white border w-50 "
              placeholder="Search"
            ></input>
            <button className=" bg-black px-4">
              <svg
                aria-hidden="true"
                className="w-6 h-5 text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className="relative h-max mx-2"
            onMouseEnter={() => setToggleAccount(true)}
            onMouseLeave={() => setToggleAccount(false)}
          >
            <svg
              width="24"
              height="24"
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
            </svg>
            {toggleAccount && (
              <ul className="px-5 w-48 py-5 text-white bg-black shadow-2xl absolute top-5 -right-7 text-left flex flex-col gap-5 rounded-lg transition ease-in-out duration-500 ">
                <li>
                  <Link to="/" className="  text-sm   hover:text-gray-750">
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>Help Center</li>
              </ul>
            )}
          </button>

          <button className="  h-6 w-6">
            <Link to="/cart">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                ></path>
              </svg>
            </Link>
          </button>
        </div>
      </div>
      <p className="bg-gray-200 h-px w-full lg:hidden"></p>
      <ul className="text-white text-sm flex justify-center gap-10 h-full p-4  xl:gap-6 Quicksand lg:hidden bg-black w-full">
        <li>
        <div className="dropdown middle dropdown-end hover:text-gray-750">
          <label  tabIndex={0} className="middle  text-sm   hover:text-gray-750">
            Shop Ready to Wear  &#8964;
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-black rounded-box w-52 mt-4"
          >
            <li>
              <a href="/category/women">Afrocentric</a>
            </li>
            <li>
              <a href="/category/men">Comfort Wears</a>
            </li>
            <li>
              <a href="category/children">Formal Wears</a>
            </li>
            <li>
              <a href="/accessories">Party Wears</a>
            </li>
            <li>
              <a href="/shoes">Resort Wears</a>
            </li>
            <li>
              <a href="/bags">Occassion Wears</a>
            </li>
          </ul>
        </div>
        </li>
        <li>
          <Link
            to="/custommade"
            className="middle  text-sm   hover:text-gray-750"
          >
            Order Custom Made
          </Link>
        </li>
        <div className="dropdown middle dropdown-end hover:text-gray-750">
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
        </div>

        <li>
          <Link to="/" className="middle  text-sm  hover:text-gray-750">
            Shop Untag
          </Link>
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
      <div className=" header-links z-20 ">
        <div className="hidden bg-white text-black lg:flex flex-col gap-4 h-screen w-full p-4 pt-10  w-full  ">
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
            <div className="Quicksand">
              <ul className="flex flex-col my-4 gap-5">
                <li className=" border-gray-200 pb-2">
                  <a
                    href="/category/women"
                    className="middle  text-sm link-item   hover:text-gray-750"
                  >
                    Women
                  </a>
                </li>
                <li className=" border-gray-200 link-item pb-2">
                  <a
                    href="/category/men"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Men
                  </a>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <a
                    href="/category/children"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Children
                  </a>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <a
                    href="/accessories"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Accessories
                  </a>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <a
                    href="/shoes"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Shoes
                  </a>
                </li>
                <li className="border-gray-200 link-item pb-2">
                  <a
                    href="/bags"
                    className="middle  text-sm   hover:text-gray-750"
                  >
                    Bags
                  </a>
                </li>
              </ul>
              <hr></hr>
              <ul className="flex flex-col my-4 gap-5">
                <li className="border-gray-200 pb-2">
                  <a
                    href="/custommade"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    Custom Order
                  </a>
                </li>
                <li className="border-gray-200 pb-2">
                  <a
                    href="/aboutus"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    About Us
                  </a>
                </li>
                <li className="border-gray-200 pb-2">
                  <a
                    to="/"
                    className="middle  text-sm link-item   hover:text-gray-750"
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
              <hr></hr>
              <ul className="my-4">
                <li className="link-item">Contact Us</li>
              </ul>
            </div>
          )}

          {activeTabIndex === 1 && (
            <div>
              <ul className="flex flex-col gap-5">
                <li className="border-gray-200 pb-2">
                  <a
                    href="/"
                    className="middle  text-sm  link-item hover:text-gray-750"
                  >
                    Refurblish
                  </a>
                </li>
                <li className="border-gray-200 pb-2">
                  <a
                    href="/"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    Sell 
                  </a>
                </li>
                <li className="border-gray-200 pb-2">
                  <a
                    href="/"
                    className="middle  text-sm link-item  hover:text-gray-750"
                  >
                    Buy 
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
