import React from "react";
import modelTwo from "../Images/Models/woman-two.jpg";

const Login = () => {
  return (
    <div className="w-full h-auto flex Quicksand">
      <div className="w-4/5 h-auto sm:hidden">
        <img src={modelTwo} className=""/>
      </div>
      <div className="w-4/5  p-auto m-auto ">
        <div className="mt-54 sm:mt-40 sm:mb-40">
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
