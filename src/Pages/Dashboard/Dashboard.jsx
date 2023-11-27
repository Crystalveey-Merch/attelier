import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-40 relative py-24 sm:mt-18 sm:py-0 sm:px-0  w-full r sm:mt-16  AcehLight  pt-2  px-5">


        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none hidden sm:block">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 Aceh">Atelier  Dashboard</div>
      <div className="flex-none sm:hidden">
      <ul className=" p-4  gap-10 flex  bg-gray-200 text-base-content ">
              {/* <p className="text-black text-xl Agceh font-bold text-center"> {greeting}<br />{authUser?.displayName}</p> */}
              {/* Sidebar content here */}
              <NavLink to="untagsell">
                <li>
                  <a>
                   
                    Untagg sell submission
                  </a>
                </li>
              </NavLink>
              <NavLink to="myorders">
                <li>
                  <a>
                    
                    My Orders
                  </a>
                </li>
              </NavLink>
            </ul>
      </div>
    </div>
    {/* Page content here */}
    <Outlet />
  </div> 
  <div className="drawer-side z-20">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-base-content  my-20 ">
              {/* <p className="text-black text-xl Agceh font-bold text-center"> {greeting}<br />{authUser?.displayName}</p> */}
              {/* Sidebar content here */}
              <NavLink to="untagsell">
                <li>
                  <a>
                 
                    Untagg sell submission
                  </a>
                </li>
              </NavLink>
              <NavLink to="myorders">
                <li>
                  <a>
                   
                    My Orders
                  </a>
                </li>
              </NavLink>
    </ul>
  </div>
</div>



    </div>
  );
};

export default Dashboard;
