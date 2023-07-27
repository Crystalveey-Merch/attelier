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
      className="fixed top-0 left-0 w-full z-30 px-24 bg-white flex flex-col gap-6 py-5 items-center xl:px-8 sm:px-3  "
      // style={{ backgroundColor: "#efd7ec" }}
    >
      <div className=" flex justify-between items-center w-full ">
        <button
          id="menu-btn"
          onClick={handleMenu}
          className={`hamburger  ${
            menuOpen ? "open" : ""
          } hidden lg:block focus:outline-none z-30 `}
        >
          <span className="harburger-top bg-gray-900 transition duration-500 ease-in-out  "></span>
          <span className="harburger-middle bg-gray-900 transition duration-500 ease-in-out  "></span>
          <span className="harburger-bottom bg-gray-900 transition duration-500 ease-in-out  "></span>
        </button>
        <ul className=" flex gap-3 text-black lg:hidden">
          <li className="link-item">
            <Link
              to="/"
              className="middle  text-base font-semibold hover:text-gray-750"
            >
              Shop
            </Link>
          </li>
          <li className="link-item">
            <Link
              to="/"
              className="middle  text-base  font-semibold hover:text-gray-750"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle  text-base  font-semibold hover:text-gray-750"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="middle  text-base  font-semibold hover:text-gray-750"
            >
              Blog
            </Link>
          </li>
        </ul>
        <h2 className="font-lifesavers text-3xl font-extrabold text-black sm:text-xl">
          Crystalveey&apos;s Atelier
        </h2>
        <div className="flex gap-3 items-center text-black sm:gap-1">
          <div>
            <h4 className=" text-lg font-semibold">USD</h4>
          </div>
          <button className=" lg:hidden">
            <svg
              aria-hidden="true"
              className="w-6 h-6 "
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
          <button
            className="relative h-max"
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
              <ul className="px-5 w-48 py-5 bg-white shadow-2xl absolute top-5 -right-7 flex flex-col gap-5 rounded-lg transition ease-in-out duration-500 ">
                <li>
                  <Link
                    to="/"
                    className="middle  text-base  font-semibold hover:text-gray-750"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="middle  text-base  font-semibold hover:text-gray-750"
                  >
                    Men
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="middle  text-base font-semibold hover:text-gray-750"
                  >
                    Children
                  </Link>
                </li>
              </ul>
            )}
          </button>
          <button className="  h-6 w-6">
            <svg
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
          </button>
        </div>
      </div>
      <p className="bg-gray-200 h-px w-full lg:hidden"></p>
      <ul className="text-black flex justify-center gap-10 xl:gap-6 lg:hidden">
        <li>
          <Link
            to="/"
            className="middle  text-base font-semibold hover:text-gray-750"
          >
            New Arrivals
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Shop Ready to Wear
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Other Custom Made
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Men
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base font-semibold hover:text-gray-750"
          >
            Children
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Accessories
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            Collections
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="middle  text-base font-semibold hover:text-gray-750"
          >
            Shop
          </Link>
        </li>
        {/* <li>
          <Link
            to="/"
            className="middle  text-base  font-semibold hover:text-gray-750"
          >
            About
          </Link>
        </li> */}
      </ul>
      <div className=" header-links z-20">
        <div className="hidden bg-white lg:flex flex-col gap-14 h-screen px-10 py-5 pl-20 sm:pl-14 sm:px-6">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-gray-500 "
          />
          <ul className="flex flex-col gap-5">
            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/"
                className="middle  text-base  font-semibold hover:text-gray-750"
              >
                New Arrivals
              </Link>
            </li>
            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/"
                className="middle  text-base  font-semibold hover:text-gray-750"
              >
                New Arrivals
              </Link>
            </li>
            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/"
                className="middle  text-base  font-semibold hover:text-gray-750"
              >
                New Arrivals
              </Link>
            </li>
            <li className="border-b border-gray-700 pb-3">
              <Link
                to="/"
                className="middle  text-base  font-semibold hover:text-gray-750"
              >
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
