import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const goBack = () => {
  window.history.back();
};

const Checkout = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectePayment, setSelectedPayment] = useState("");
  const [selecteBilling, setSelectedBilling] = useState("");

  const handleDelivery = (e) => {
    setSelectedDelivery(e.target.value);
  };
  const handlePayment = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleBilling = (e) => {
    setSelectedBilling(e.target.value);
  };
  return (
    <>
      <div className="mt-24 text-black pt-5 sm:mt-16 w-full AcehLight py-48 ">
        <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
          <i className="fas fa-arrow-left text-black" />
        </div>

        <div className="w-full px-72 sm:px-0 m-auto ">
          <div className=" m-auto justify-center sm:w-full ">
            <div className="  mx-5  m-auto">
              <div className="Aceh text-2xl my-5">Delivery</div>
              <div className=" flex-col flex gap-3">
                <div className="flex gap-3  border p-3 cursor-pointer	 my-2rounded">
                  <input
                    type="radio"
                    id="option1"
                    className="radio border-black"
                    value="option1"
                    checked={selectedDelivery === "option1"}
                    onChange={handleDelivery}
                  />
                  <label
                    htmlFor="option1"
                    className="text-lg w-full cursor-pointer	"
                  >
                    {" "}
                    Pick up
                  </label>
                </div>
                <div className="flex gap-3 border p-3 cursor-pointer	 rounded">
                  <input
                    type="radio"
                    id="option2"
                    className="radio border-black"
                    value="option2"
                    checked={selectedDelivery === "option2"}
                    onChange={handleDelivery}
                  />
                  <label
                    htmlFor="option2"
                    className="text-lg w-full cursor-pointer	"
                  >
                    {" "}
                    Deliver
                  </label>
                </div>
              </div>
              {selectedDelivery === "option1" && (
                <div>
                  <div className="my-5 ">
                    <h1 className="text-lg Aceh">Pick up Location</h1>
                    <div className="border p-2 border-black rounded  bg-gray-200">
                      <h1 className=" text-lg">
                        1/5 Pastor Olu-olusakin Avenue Alaguntan
                      </h1>
                      <p className="text-gray-500 text-lg">
                        1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah, Lagos
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {selectedDelivery === "option2" && (
                <div>
                  <div className="bg-gray-200 p-10 flex flex-col gap-8">
                    <CountrySelect
                      onChange={(e) => {
                        setCountryid(e.id);
                      }}
                      placeHolder="Select Country"
                      className="bg-white"
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                    />
                    <input
                      placeholder="First Name"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Last Name"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Address"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <CitySelect
                      countryid={countryid}
                      stateid={stateid}
                      onChange={(e) => {
                        console.log(e);
                      }}
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                      placeHolder="Select City"
                    />
                    <StateSelect
                      countryid={countryid}
                      onChange={(e) => {
                        setstateid(e.id);
                      }}
                      placeHolder="Select State"
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                    />
                    <input
                      placeholder="Postal Code"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Phone (Optional)"
                      className="p-4 w-full border bg-white"
                    ></input>
                  </div>
                </div>
              )}
              <div className="Aceh text-2xl my-6">Payment</div>
              <p className="text-gray-300">All transaction are secured and encrypted</p>

              <div className=" flex-col flex ">
                <div className="flex gap-3  border p-3 cursor-pointer	flex rounded">
                  <input
                    type="radio"
                    id="option3"
                    className="radio border-black m-auto"
                    value="option3"
                    checked={selectePayment === "option3"}
                    onChange={handlePayment}
                  />
                  <label
                    htmlFor="option3"
                    className="text-lg w-full cursor-pointer  m-auto flex	Aceh"
                  >
                    {" "}
                    <p className="my-auto">Paystack </p>
                    <span className="flex gap-1 m-auto">
                      <img
                        src="/Images/icons/visa.png"
                        className="m-auto"
                      ></img>
                      <img
                        src="/Images/icons/master.png"
                        className="m-auto"
                      ></img>
                      <img
                        src="/Images/icons/maestrl.png"
                        className="m-auto"
                      ></img>
                      <img
                        src="/Images/icons/paypal.png"
                        className="m-auto"
                      ></img>
                    </span>
                  </label>
                </div>
                {selectePayment === "option3" && (
                  <div>
                    <div className=" ">
                      <div className="border p-2  rounded flex flex-col py-8 bg-gray-100">
                        <i className="fa-solid fa-credit-card m-auto text-5xl" />
                        <h1 className=" text-lg text-center ">
                          After clicking on Order now, you will be Redirected to
                          Paystack to complete your purchase securely
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-3 border p-3 cursor-pointer	 rounded">
                  <input
                    type="radio"
                    id="option4"
                    className="radio border-black m-auto"
                    value="option4"
                    checked={selectePayment === "option4"}
                    onChange={handlePayment}

                  />
                  <label
                    htmlFor="option4"
                    className="text-lg w-full cursor-pointer m-auto	"
                  >
                    {" "}
                    Bank deposit
                  </label>
                </div>
                {selectePayment === "option4" && (
                  <div>
                    <div className="bg-gray-200 p-10 flex flex-col gap-8">
                    <p>
                      <li>Beneficiary Name:</li>
                      <li> Crystalveey Bank: xxxxxxxxxxx </li>
                      <li>Account Number: 00196.........</li>
                      <li>Depositor/Reference: Your Name</li> 
                    </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="Aceh text-2xl my-6">Billing Address</div>

              <div className=" flex-col flex ">
                <div className="flex gap-3  border p-3 cursor-pointer	flex rounded">
                  <input
                    type="radio"
                    id="option5"
                    className="radio border-black"
                    value="option5"
                    checked={selecteBilling === "option5"}
                    onChange={handleBilling}
                  />
                  <label
                    htmlFor="option5"
                    className="text-lg w-full cursor-pointer  m-auto flex	Aceh"
                  >
                    {" "}
                    <p>Same as Billing Address </p>
                    
                  </label>
                </div>
                
                <div className="flex gap-3 border p-3 cursor-pointer	 rounded">
                  <input
                    type="radio"
                    id="option6"
                    className="radio border-black"
                    value="option6"
                    checked={selecteBilling === "option6"}
                    onChange={handleBilling}
                  />
                  <label
                    htmlFor="option6"
                    className="text-lg w-full Aceh cursor-pointer	"
                  >
                    {" "}
                   
                   Use a different Billing Address
                  </label>
                </div>
                {selecteBilling === "option6" && (
                  <div>
                  <div className="bg-gray-200 p-10 flex flex-col gap-8">
                    <CountrySelect
                      onChange={(e) => {
                        setCountryid(e.id);
                      }}
                      placeHolder="Select Country"
                      className="bg-white"
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                    />
                    <input
                      placeholder="First Name"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Last Name"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Address"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <CitySelect
                      countryid={countryid}
                      stateid={stateid}
                      onChange={(e) => {
                        console.log(e);
                      }}
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                      placeHolder="Select City"
                    />
                    <StateSelect
                      countryid={countryid}
                      onChange={(e) => {
                        setstateid(e.id);
                      }}
                      placeHolder="Select State"
                      inputClassName="bg-white border-none"
                      containerClassName="bg-white border-none"
                    />
                    <input
                      placeholder="Postal Code"
                      className="p-4 w-full border bg-white"
                    ></input>
                    <input
                      placeholder="Phone (Optional)"
                      className="p-4 w-full border bg-white"
                    ></input>
                  </div>
                </div>
                )}
              </div>

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
              ORDER NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
