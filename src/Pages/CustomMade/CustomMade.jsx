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
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>

          <div className="my-10 text-black">
            <form className="AcehLight">
              <label className="Aceh">Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-white border  w-1/2 "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border   w-1/2  "
                />
              </div>

              <label className="Aceh">Email:</label>
              <br />
              <input
                type="email"
                placeholder="email"
                className="p-3 my-4 bg-white border  w-full"
              />
              <br />
              <label className="Aceh">Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full my-4 text-3xl "
                style={{ width: "100%" }}
                inputStyle={{ padding: "4px", fontSize: "15px", width: "100%" }}
              />

              <br />

              <label className="Aceh">
                Write your customization Preference in details
              </label>
              <textarea className="w-full h-40 my-4   border bg-gray-100 p-5"></textarea>

              <label className="Aceh">Prefered mode for taking measurement</label>
              <div className="flex flex-col my-4 gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>Virtual</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>Onsite</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>At your house</p>
                </span>
                </div>
             
              <div className="">
                <h1 className="text-md Aceh my-2 text-black">
                  Upload clear images of your desired design and color
                </h1>

                <div className="upload-boxes flex  gap-4">
                  <UploadBox />
                </div>
                <p className="my-2">Max File size: 3mb, Max file: 4</p>
              </div>
              <button className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded">
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMade;
