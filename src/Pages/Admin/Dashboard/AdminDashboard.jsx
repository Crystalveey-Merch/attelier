import { Outlet } from "react-router"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/auth";
  import { useNavigate } from "react-router";

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSave, faSignOut } from "@fortawesome/free-solid-svg-icons";


const AdminDashboard = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();


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
  const userId = authUser?.uid;


  return (
    <div>
        <div className=" py-40 sm:mt-18 sm:py-0 sm:px-0 px-5 w-screen relative ">
        <p className="text-center text-2xl">ADMIN DASHBOARD</p>
     <div className=" sticky sm:top-20 z-10 hidden sm:block w-full  mt-5 ">
            <ul className="menu  text-black menu-horizontal bg-gray-200    dark:text-slate-200 m-auto justify-between  rounded-box  w-full">
              <li>
                <NavLink to="profile" className="tooltip" data-tip="Home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="statistics"
                  className="tooltip"
                  data-tip="Stats"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                    />
                  </svg>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="myposts"
                  className="tooltip"
                  data-tip="Published"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="drafts" className="tooltip text-white" data-tip="Draft">
                <FontAwesomeIcon icon={faSave}/>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="bookmarks"
                  className="tooltip text-white"
                  data-tip="Bookmarks"
                >
                <FontAwesomeIcon icon={faBookmark}/>
                </NavLink>
              </li>
             
              <li>
                <Link
                  to="#"
                  className="tooltip text-white"
                  data-tip="Log-out"
                  // onClick={userSignout}
                >
                <FontAwesomeIcon icon={faSignOut}/>

                </Link>
              </li>
            </ul>
          </div>
          <div className="drawer drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content  
                 border  justify-center "> 

                  <Outlet />
                  {/* Hide the button on small screens (mobile) */}
                 
              </div>
              <div className="drawer-side">
                  <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                  {/* Apply responsive classes to the menu */}
                  <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content sm:hidden">
                      {/* <p className="text-black text-xl Agceh font-bold text-center"> {greeting}<br />{authUser?.displayName}</p> */}
                      {/* Sidebar content here */}
                      <li><NavLink to='uploadproduct'>Upload Product</NavLink></li>
                      <li><NavLink to='products'>All Products</NavLink></li>
                      <li><NavLink to='refurblish'>Refurblish </NavLink></li>
                      <li><NavLink to='RefurblishAndSell'>Refurblish  & Sell</NavLink></li>
                      <li><NavLink to='orders'>Orders</NavLink></li>
                      <li><NavLink to='users'>Users</NavLink></li>
                      <li><NavLink to='untagsell'>Untag Sell</NavLink></li>
                      <li><NavLink to='custommade'>Custom Made</NavLink></li>


                  </ul>
              </div>
          </div>
      </div>
        
    </div>
  )
}

export default AdminDashboard