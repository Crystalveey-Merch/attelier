import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const goBack = () => {
  window.history.back();
};

const Checkout = () => {
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

    const [selectedOption, setSelectedOption] = useState('option1');

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="mt-24 text-black pt-5 sm:mt-16 w-full AcehLight py-48 ">
        <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
          <i className="fas fa-arrow-left text-black" />
        </div>
        <div>
        <input
          type="radio"
          
          id="option1"
          className="radio border-black"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleRadioChange}
        />
        <label htmlFor="option1">Option 1</label>
        
      </div>
      <div>
        <input
          type="radio"
          id="option2"
          className="radio border-black"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleRadioChange}
        />
        <label htmlFor="option2">Option 2</label>
      
      </div>
      {selectedOption === 'option1' && <div>This is option 1 content.</div>}
      {selectedOption === 'option2' && <div>This is option 2 content.</div>}
        <div className="w-full px-72 sm:px-0 m-auto ">
          <div className=" m-auto justify-center sm:w-full ">
            <div className="  mx-5  m-auto">
              <h1 className="text-xl">Delivery</h1>

              <div className="flex flex-col gap-3 text-black  w-full">
                <span className=" flex flex-col gap-4">
                  <div  className="collapse focus:bg-gray-200 hover:bg-gray-300 ">
                    <input type="radio" name="radio-1" />
                      {/* <input type="radio"></input> */}
                      
                    <div className="collapse-title text-xl font-medium">
                      Pickup
                    </div>
                    <div className="collapse-content">
                      <div className="my-5 ">
                    
                        <h1>Pick up Location</h1>
                        <div className="border p-2 border-black rounded  bg-gray-200">
                          <h1 className="">
                            1/5 Pastor Olu-olusakin Avenue Alaguntan
                          </h1>
                          <p className="text-gray-500">
                            1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah,
                            Lagos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse ">
                    <input type="radio" name="radio-1" />
                    <div className="collapse-title text-xl font-medium">
                      Deliver
                    </div>
                    <div className="collapse-content">
                      <div className="my-5 ">
                        <h1>Pick up Location</h1>
                        <div className="border p-2 border-black rounded  bg-gray-200">
                          <h1 className="">
                            1/5 Pastor Olu-olusakin Avenue Alaguntan
                          </h1>
                          <p className="text-gray-500">
                            1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah,
                            Lagos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              
                
                <span className="flex gap-4">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio border-black"
                  />
                  <div>Deliver</div>
                </span>
                <div className="bg-gray-300  flex m-auto justify-center">
                  <div>
                    <input type="country"></input>
                  </div>
                </div>
              </div>

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
