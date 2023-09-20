import React from "react";
import modelTwo from "../Images/Models/woman-two.jpg";

const Login = () => {
  return (
    <div className="w-full h-auto mt-40 flex Quicksand">
      <div className="w-4/5 h-98 sm:hidden">
        <img src={modelTwo} className=""/>
      </div>
      <div className="w-4/5 h-full p-auto m-auto ">
        <div className="mt-54 sm:mt-40 sm:mb-40 h-screen">
        <i class="fa-sharp fa-solid fa-cart-shopping text-9xl flex justify-center my-10"></i>
          <h2 className="text-xl text-center   text-black sm:text-xl mx-aluto">
            Login to Crystalveey&apos;s Atelier
          </h2>
          <div className="flex flex-col gap-10 mx-40 sm:mx-4 my-10">
          
            <div className="btn">
              <i class="fa-brands fa-google text-2xl"></i> Login with Google
            </div>
            <div className="btn">
              <i class="fa-brands fa-facebook text-2xl"></i> Login with Facebook
            </div>
            <div className="btn">
              <i class="fa-brands fa-apple text-2xl"></i> Login with Apple id
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
