import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "../../CustomMade/UpdoadBox";
import "../../CustomMade/upload.css";

const RefurblishP3 = () => {
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

          <div className="">
            <h1 className="sm:text-base text-xl AcehLight text-center my-2 leading-10 text-black">
              Fill all the required information and our refurbish team will get
              back to you within 3 buisness days with the pricing. To send more
              images, contact us directly at{" "}
              <a
                href="mailto:office.crystalveey@gmail.com"
                className="text-sky-500"
              >
                {" "}
                office.crystalveey@gmail.com
              </a>{" "}
              Thank you!{" "}
            </h1>

            
            
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
                className="w-full my-4 text-xl  "
                style={{ width: "100%", height: "60px"}}
              />
              <label>Type of Item</label>
              <br />
              <input type="text" className="p-3 my-4 bg-white border border-black w-full"></input>

              <br />
              <label>How will you send Item? </label>
                <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Drop off</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Pick up from my address</p>
                </span>
                </div>


                <label>How will you receive Item? </label>
                <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Pick up</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio" />
                <p>Deliver to my address</p>
                </span>
                </div>

              <label >Please describe issues with your item in details</label>
              <textarea className="w-full h-40  bg-white border border-black p-5"></textarea>
              
              <label>Upload clear images of each item, specifically the problem area that needs refurbishing</label>
              <div className="upload-boxes flex gap-4 my-5">
              <UploadBox />
              <UploadBox />
              <UploadBox />
              <UploadBox />
            </div>
            <p className="my-2">Max File size: 3mb, Max file: 4</p>
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

export default RefurblishP3;
