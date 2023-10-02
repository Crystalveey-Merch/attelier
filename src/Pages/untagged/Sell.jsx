import { useState } from "react";
import React, { useRef, useEffect } from 'react';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Refurblish = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="mt-24 sm:mt-16text-black Quicksand sm:px-5 px-40 py-10">
      <div>
        <p className="text-center Aceh">How to sell on untagg</p>
        <div className="flex sm:flex-col gap-12 my-10 justify-center m-auto">
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1 className="">STEP 1</h1>
              <p className="Aceh ">REGISTER</p>
              <img src="/Images/icons/reg.png" className="m-auto"></img>
              <p>
                Register by creating an account using either your Gmail,
                Facebook, accoount or Apple ID (or by using your email)
              </p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5  text-center">
              <h1 className="">STEP 2</h1>
              <p className="Aceh">UPLOAD PHOTO</p>
              <img src="/Images/icons/upload.png" className="m-auto"></img>
              <p>Ensure you meet our photo requirements</p>
            </ol>
          </div>
          <div className="card w-60 h-60 m-auto ">
            <ol className="my-5 text-center">
              <h1>STEP 3</h1>
              <p className="Aceh">START SELLING</p>
              <img src="/Images/icons/start.png" className="m-auto"></img>
              <p>
                Choose the appopriate categories for your item[s] and upload
                your image
              </p>
            </ol>
          </div>
        </div>
      </div>
      <div className="my-20 text-black">
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
