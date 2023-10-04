import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const goBack = () => {
  window.history.back();
};
const Checkout = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();
  return (
    <>
      <div className="mt-24  pt-5 sm:mt-16 w-full AcehLight py-48 ">
        <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
          <i className="fas fa-arrow-left text-black" />
        </div>
        <div className="w-full px-40 sm:px-0 m-auto ">
          <div className=" m-auto justify-center sm:w-full ">
            <div className="overflow-x-auto mx-10  m-auto">
              <h1>Delivery</h1>
              <div className="flex flex-col gap-3 text-black ">
                <span className=" flex gap-4">
                 <input type="radio" name="radio-1"  className="radio border-black text-black"/> 
                <div>Virtual</div> 
                 </span>
                 <span className="flex gap-4">

                 <input type="radio" name="radio-1" className="radio border-black" />
                 <div>
                 On site
                 </div>
                </span>
                </div>
                <h1>Delivery</h1>
                

              <button className=" hidden bg-black p-2 text-md m-auto flex justify-center text-white">
                {" "}
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  sm:block w-full static mb-10  px-40 sm:px-5">
        <div>
          <h1 className="text-lg text-black Aceh py-2">
            Subtotal: N{cartTotal}{" "}
          </h1>
          <Link to="/payment">
            <button className="bg-black px-10 py-3  m-auto text-xl sm:text-sm flex capitalize justify-center text-white">
              {" "}
              Pay with PAYSTACK
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
