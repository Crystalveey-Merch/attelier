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
        <div className="px-36 sm:px-1 p-10 w-full ">
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>
          <div className="relative m-auto justify-center flex">
          <img src="/Images/icons/stand1.jpeg" className="sm:hidden "/>
          <img src="/Images/icons/stand.jpeg" className="hidden sm:block "></img>
          <div className=" absolute top-48 left-5 text-white">
          <p className="text-xl ">Wear it. Love it. Refurbish it.</p>
          <p className="sm:text-4xl text-6xl Aceh w-64">Get the Price For Refurbishing</p>
          </div>
          </div>
          <div className="sm:px-5">
          
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

          <div className="my-10 sm:px-5 text-black">
            <form className="AcehLight">
              <label className="Aceh"> Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-white border   w-1/2 "
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border   w-1/2  "
                />
              </div>
<div></div>
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
                className="w-full my-4 text-xl  "
                style={{ width: "100%", height: "60px"}}
              />
              
            <div>
              <label className="Aceh">Type of item (shirt, top, trouser, gown, etc  )</label>
              <br />
              <input type="text" className="p-3 my-4 bg-white border  w-full"></input>
</div>
 <div>
              <label className="Aceh">Number of Item(s)</label>
              <br />
              <input type="text" className="p-3 my-4 bg-white border  w-full"></input>
</div>
              <br />
              <label className="Aceh">How will you like to send the item to us ?</label>
                <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>Drop off at the Refurblish  centre</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>Pick up from my address</p>
                </span>
                </div>


                <label className="Aceh">How will receive your refurbish item? </label>
                <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>- Pick up from the Refurbish centre</p>
                </span>
                <span className=" flex gap-3">
                <input type="radio" name="radio-1" className="radio border-gray-600" />
                <p>Deliver to my address</p>
                </span>
                </div>

              <label className="Aceh" >Please describe issues with your item in details</label>
              <textarea className="w-full h-40  bg-white border  p-5"></textarea>
             <div className="flex flex-col">
              <label className=" Aceh  ">
            Fair pricing:{" "}
            <span className="text-gray-300 text-xs">
              Write the price of your product <span className="text-red-500 m-auto">*</span>{" "}
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
              <br></br>
              <label className="Aceh">Upload clear images of each item, specifically the problem area that needs refurbishing</label>
              <div className="upload-boxes flex gap-4 my-5">
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
