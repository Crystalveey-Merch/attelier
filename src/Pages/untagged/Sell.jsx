import { useState } from "react";
import React, { useRef, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "../CustomMade/UpdoadBox";
import "../CustomMade/upload.css";

const Refurblish = () => {
  const [phone, setPhone] = useState("");
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="mt-24 sm:mt-16 text-black Quicksand sm:px-5 pt-20 sm:pt-5 px-40 py-5">
      <div className="hidden   sm:block pt-5 " onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>
      <div className="collapse collapse-arrow my-2 bg-white border">
        <input type="radio" name="my-accordion-2"  />
        <div className="collapse-title text-md font-medium">
          Clothe Guidelines
        </div>
        <div className="collapse-content">
          <p className="text-sm">
            All clothing items are required to be in excellent condition
            (damaged items are not allowed). If your clothing item does not meet
            the required standard, you can either sell another item in excellent
            condition or opt for the refurblishing service rendered by the
            company
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow my-2 border bg-white">
        <input type="radio" name="my-accordion-2" />
        <div className=" text-md collapse-title  font-medium">
          Photo Requirement 
        </div>
        <div className="collapse-content">
         <ul className="text-sm list-decimal px-2 py-3 flex flex-col gap-3">
          <li>Do not take a photograph or scan a picture of item(s).</li>
          <li>Must be taken within the last 7 days, showing current appearance.  </li>
          <li>The size of the photo should be 2 by 2 inches.</li>
          <li>The photo must be in colour. Must show full image of item(s), front & back view on a plain white or off-white background. </li>
          <li>Image must be clear & crisp</li>
          <li>Do not let foreign objects obstruct image of item(s) </li>
          <li>An example is shown below </li>

         </ul>
         <img src="/Images/Avatar/man-two.png" className="w-40" />
        </div>
      </div>

      <div className="my-5 text-black">
        {/* <h1 className="my-10 Aceh text-xl">Book a Session</h1> */}
        <form className="Quicksand">
          <div className="my-5 flex flex-col m-auto">
          <label  className="py-2"> Choose a Category </label>
                <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Men</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Women</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Children</p>
                </span>
                </div>
           
          </div>

          <div className="flex flex-col gap-4 w-full m-auto  ">
            <label>Add Photos</label>
              <div className="upload-boxes flex gap-4 my-2">
              <UploadBox />
             
            </div>
            <p className="my-2 text-gray-500">supported formats are .jpg .gif and .png.10MB max</p>

          </div>
          <div className="flex flex-col gap-4 w-full m-auto  ">
            <label>Product Description </label>
            <textarea
              type="text"
              placeholder=""
              className="p-3 my-4 w-full h-40 bg-gray-200 rounded w-1/2 "
            />
          </div>
          <label>Fair pricing: Write the price of your product </label>
          <input type="text" className="sm:w-full  w-1/2 bg-white border my-3 border-black p-2"></input>
          <br></br>
          <label>Account Details </label>
          <input type="text" className="sm:w-full w-1/2 bg-white border my-3 border-black p-2"></input>
          <button
            type="Submit"
            className="bg-black flex w-40 my-4 px-5 py-4 justify-center text-white m-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Refurblish;
