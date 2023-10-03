import React from "react";

const Consultation = () => {

    const goBack = () => {
        window.history.back();
        }
  return (
    <div className="mt-24 sm:mt-16 AcehLight mb-10">
       <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
      <i className="fas fa-arrow-left text-black"/>

      </div>
      <div className=" pt-10 m-auto flex flex-col justify-center text-center text-black sm:px-10 w-1/2 sm:w-full">
   
        <h1 className="text-4xl text-center Aceh text-black">
          Schedule your <a href="http://calendly.com/victoria-crystalveey"><span className="text-sky-500  underline">FREE</span></a>{" "}
          consultation
        </h1>
       
        <div className="m-auto w-full">
       <img src="/Images/icons/consult.png" className="m-auto py-14"></img>
       </div>
       
        <div className="text-left  px-10">

          <h1 className="AcehLight  text-center py-4 text-2xl">To book a Consultation date Click <a href="http://calendly.com/victoria-crystalveey"><span className="uppercase text-sky-500"> Here</span></a></h1>
         
        </div>
      </div>
    </div>
  );
};

export default Consultation;
