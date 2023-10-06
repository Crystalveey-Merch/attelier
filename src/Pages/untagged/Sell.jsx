import React, { useState } from "react";
import "react-international-phone/style.css";
import UploadBox from "../CustomMade/UpdoadBox";
import "../CustomMade/upload.css";

const Refurblish = () => {
  const [phone, setPhone] = useState("");
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="mt-24 sm:mt-16 text-black Quicksand sm:px-5 relative  pt-20 sm:pt-5 px-40 py-5">
      <div className="hidden  absolute top-0  sm:block pt-5 " onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>

      <div className="my-5 text-black">
        {/* <h1 className="my-10 Aceh text-xl">Book a Session</h1> */}
        <form className="Quicksand">
          <div className="my-8 flex flex-col m-auto"></div>
          <label className="py-2 Aceh ">
            {" "}
            Choose appropriate Category
            <span className="text-red-500 m-auto">*</span>{" "}
          </label>
          <div className="flex  gap-3 mb-5 text-sm">
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-sm box-white border-gray-600"
              />
              <p>Men</p>
            </span>
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-sm border-gray-600"
              />
              <p>Women</p>
            </span>
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                className="radio radio-sm border-gray-600"
              />
              <p>Children</p>
            </span>
          </div>

          <div className="flex flex-col my-8 gap-2 w-full m-auto  ">
            <label className="Aceh">
              Product Description <span className="text-red-500 m-auto">*</span>{" "}
            </label>

            <textarea
              type="text"
              placeholder=""
              className="p-3  w-full h-20 bg-gray-100   rounded w-1/2 "
              required
            />
          </div>
          <div>
            <label className="Aceh">Number of Item(s)</label>
            <span className="text-red-500 m-auto">*</span>{" "}
            <br />
            <input
              type="text"
              className="p-3 my-4 bg-white border  w-full"
            ></input>
          </div>

          <div className="flex flex-col my-5 gap-2 w-full m-auto ">
            <label className=" Aceh  ">
              Fair pricing{" "}
              <span className="text-gray-300 text-xs">
               ( Write the price of your product){" "}
                <span className="text-red-500 m-auto">*</span>{" "}
              </span>
            </label>
            <input
              type="text"
              className="sm:w-full  w-1/2 bg-white border  -black p-2"
            ></input>
          </div>

          <br></br>
          <label className="Aceh">
            Account Details <span className="text-red-500 m-auto">*</span>{" "}
          </label>
          <br></br>
          <input
            type="text"
            className="sm:w-full w-1/2 bg-white border my-3  p-2"
            required
          ></input>

         
          <div className="flex flex-col gap-4 w-full m-auto  ">
            <br></br>
            <label className="Aceh">
              Add Photos{" "}
              <span className="text-gray-300 text-xs">
                .jpg .gif and .png.10MB max
              </span>{" "}
              <span className="text-red-500 m-auto">*</span>{" "}
            </label>
            <div tabIndex={0} className="collapse bg-white">
           <input type="checkbox" />
            <div className="collapse-title text-sky-500 underline text-sm font-medium">
              Clothe Guidelines
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                All clothing items are required to be in excellent condition
                (damaged items are not allowed). If your clothing item does not
                meet the required standard, you can either sell another item in
                excellent condition or opt for the refurblishing service
                rendered by the company
              </p>
            </div>
          </div>
          <div tabIndex={1} className="collapse bg-white">
           <input type="checkbox" />
           <div className=" text-sm text-sky-500 underline collapse-title  font-medium">
              Photo Requirement
            </div>
            <div className="collapse-content">
            <ul className="text-sm list-decimal px-2 py-3 flex flex-col gap-3">
                <li>Do not take a photograph or scan a picture of item(s).</li>
                <li>
                  Must be taken within the last 7 days, showing current
                  appearance.{" "}
                </li>
                <li>The size of the photo should be 2 by 2 inches.</li>
                <li>
                  The photo must be in colour. Must show full image of item(s),
                  front & back view on a plain white or off-white background.{" "}
                </li>
                <li>Image must be clear & crisp</li>
                <li>Do not let foreign objects obstruct image of item(s) </li>
                <li>An example is shown below </li>
              </ul>
              <img src="/Images/Avatar/man-two.png" className="w-40" />
            </div>
          </div>
         
            <div className="upload-boxes flex gap-2 ">
              <UploadBox />
            </div>
          </div>
          <button
            type="Submit"
            className="bg-black flex w-40 my-8 px-5 py-2 justify-center text-white m-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Refurblish;
