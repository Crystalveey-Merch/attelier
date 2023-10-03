import { useState } from "react";
import React, { useRef, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Refurblish = () => {
  const [phone, setPhone] = useState("");
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="mt-15 sm:mt-16 text-black Quicksand sm:px-5 px-40 py-5">
      <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>

      <div className="my-5 text-black">
        {/* <h1 className="my-10 Aceh text-xl">Book a Session</h1> */}
        <form className="Quicksand">
        <div className="my-5 flex flex-col m-auto">
        <h1 className="py-10">Category:</h1>
          <select className="select w-full max-w-xs bg-gray-200  sm:mx-2">
            <option disabled selected>
              Pick a Category
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Children</option>
          </select>
        </div>
          
          <div className="flex flex-col gap-4 w-full m-auto  ">
          <label>Add Photos</label>
            <input
              type="file"
              placeholder=""
              className="p-3 my-4 w-full bg-gray-200 rounded w-1/2 "
            />
          
          </div>
          <div className="flex flex-col gap-4 w-full m-auto  ">
          <label>Product Description </label>
            <textarea
              type="text"
              placeholder=""
              className="p-3 my-4 w-full h-40 bg-gray-200 rounded w-1/2 "
            />
          
          </div>
          <button type="Submit" className="bg-black flex w-40 px-5 py-4 justify-center text-white m-auto">Submit</button>
         
        </form>
      </div>
    </div>
  );
};

export default Refurblish;
