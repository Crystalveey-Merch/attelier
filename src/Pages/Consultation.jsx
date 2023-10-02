import React from "react";

const Consultation = () => {

    const goBack = () => {
        window.history.back();
        }
  return (
    <div className="mt-24 sm:mt-16 AcehLight mb-10">
      <div className=" pt-10 m-auto text-center text-black sm:px-10 w-1/2 sm:w-full">
      <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
      <i className="fas fa-arrow-left text-black"/>

      </div>
        <h1 className="text-4xl text-center Aceh text-black">
          Schedule your <span className="text-sky-500  underline">FREE</span>{" "}
          consultation
        </h1>
        <p className="text-black mb-8 py-5">
          {" "}
          Fill out the following information and set up a time talk. Once you
          are done setting up a time, please check your email for your email for
          your confirmation.
        </p>
        <p className="pb-10 "> Crystalveey’s Consultants</p>
        
        <p className="pb-10 Aceh text-2xl ">15 Minutes Initial consultation</p>
        <p className="text-black mb-4 text-left">
          {" "}
         <i className="fas fa-stopwatch "/> 15 min
        </p>
        <p className="text-black mb-4 text-left">
          {" "}
         <i className="fas fa-video"/> Web conferencing details provided upon confirmation.
        </p>
        <p className="text-black mb-8 text-left">
          {" "}
          For our initial cosultation we will discuss what style you have in mind, what material you would like to use, your measurement & lastly Our price.

        </p>
        <hr></hr>
        <div className="text-left  px-10">

          <h1 className="Aceh  text-center py-4">Select Day</h1>
         
        
        </div>
      </div>
    </div>
  );
};

export default Consultation;
