import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "./UpdoadBox";
import "./upload.css";

const CustomMade = () => {
  const goBack = () => {
    window.history.back();
  };
  const [phone, setPhone] = useState("");
  return (
    <div className="mt-24 sm:mt-16 AcehLight w-full">
      <div className="flex flex-row w-full">
        <div className="px-36 sm:px-5 p-10 w-full ">
          <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>

          <div className="">
            <h1 className="text-md Aceh my-2 text-black">
              Upload clear images of your desired design and color
            </h1>

            <div className="upload-boxes flex gap-4">
              <UploadBox />
              <UploadBox />
              <UploadBox />
              <UploadBox />

              
            </div>
            <p className="my-2">Max File size: 3mb, Max file: 4</p>
          </div>

          <div className="my-10 text-black">
          
            <form className="AcehLight">
              <label>First Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-white border border-black  w-1/2 "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border border-black  w-1/2  "
                />
              </div>

              <label>Email:</label>
              <br />
              <input
                type="email"
                placeholder="email"
                className="p-3 my-4 bg-white border border-black w-full"
              />
              <br />
              <label>Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full my-4 text-xl "
                style={{ width: "100%" }}
              />
              
              <br />
             
             <label>Write your customization Preference in details</label>
             <textarea className="w-full h-40  bg-white border border-black p-5"></textarea>

             <label>Prefered mode for taking measurement</label>
             <div className="flex flex-col gap-3">
             <span className="">
             <input type="radio" name="radio-1"  className="radio border-black text-black"/> 
            Virtual
             </span>
             <span>
             <input type="radio" name="radio-1" className="radio border-black" />
             On site
             </span>
             <span>
             <input type="radio" name="radio-1" className="radio border-black" />
             At your house 
             </span>
             </div>
              <button className="p-4 text-center bg-black px-10 my-10 text-white rounded">
Submit              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMade;
