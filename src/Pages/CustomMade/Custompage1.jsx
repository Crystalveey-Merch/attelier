import React from "react";
import { Link } from "react-router-dom";


const Custompage1 = () => {

    const goBack = () => {
        window.history.back();
        }
  return (
    <div className="mt-24 sm:mt-16 AcehLight mb-10 py-10">
       <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
      <i className="fas fa-arrow-left text-black"/>

      </div>
      <div className=" pt-10 m-30  m-auto flex flex-col border shadow-xl rounded-xl justify-center text-center text-black sm:px-10 w-1/2 sm:w-full">
   
        <h1 className="text-2xl text-center Aceh text-black">
        TO ORDER A CUSTOMIZED PRODUCT
        </h1>
       <p>Please follow this steps:</p>
       <ul className="text-left px-10 py-5 sm:px-2 list flex flex-col gap-4 list-decimal">
       <li>Upload quality image(s) of your desired style(s)</li>
       <li>Write your customization preference in detail when filling the form below</li>
       <li>Choose your preferred mode of taking measurement</li>
       <li>Submit form</li>
       </ul>
       <div className="relative p-10 m-20 sm:m-5 sm:p-0 border rounded-xl  border bg-gray-200">
        <p className="sm:p-5 sm:m-5 ">Thank you for choosing our custom made service! We can’t wait to create something special for you</p>
        <div className="bg-black w-8 h-8 flex rounded-full text-white absolute top-0 right-0"><i className="fas fa-exclamation m-auto"/></div>
        </div>
        
      </div>
      <div className="text-left  px-2">

          <Link to="/custommade"><button className="AcehLight bg-black my-5 flex m-auto justify-center text-white py-3 px-6 text-xl">Next</button></Link>
         
        </div>
    </div>
  );
};

export default Custompage1;
