import React from "react";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { PaystackButton } from "react-paystack";
// import { useState } from "react";
import { PAYSTACK_PUBLIC_KEY } from "/src/Pages/Payment/payment.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const goBack = () => {
  window.history.back();
};

const Checkout = () => {
  

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    amount: "",
    email: "",
    address: "",
    postalCode: "",
    country: "",
    city: "",
    state: "",
    phoneNumber: "",
    // Add more fields as needed
  });

  const [deliveryForm, setDeliveryForm] = useState({
    name: "",
    lastname: "",
    city: "",
    state: "",
    amount: "",
    email: "",
    address: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    // Add more fields as needed
  });
  const myModal = document.getElementById('my_modal_3')

  const handleChange = (e) => {
    e.preventDefault(); // Prevent form submission
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsModalOpen(true); // Open the modal
  };

  const handleDeliveryForm =(e) => {
    const { name, value } = e.target;
    setDeliveryForm({ ...deliveryForm, [name]: value });

    
  }

  const [isPaymentButtonVisible, setIsPaymentButtonVisible] = useState(true);
  const publicKey = PAYSTACK_PUBLIC_KEY;
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [selectePayment, setSelectedPayment] = useState("");
  const [selecteBilling, setSelectedBilling] = useState("");
  const [emailForPayment, setEmailForPayment] = useState(""); // State to store email for payment

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const isPaymentButtonVisible = Object.values(formData).every((value) => value !== "");


  const handleDelivery = (e) => {
    setSelectedDelivery(e.target.value);
  };
  const handlePayment = (e) => {
    setSelectedPayment(e.target.value);
  };
  const handleBilling = (e) => {
    setSelectedBilling(e.target.value);
    if (e.target.value === "option5") {
      setEmailForPayment(deliveryForm.email);
    } else {
      setEmailForPayment(""); // Reset emailForPayment if "Use a different Billing Address" is selected
    }

    
  };
  const shippingFee = "5000";

  const totalCost = cartTotal + parseInt(shippingFee);

  const paymentData = {
    email: emailForPayment || formData.email,
    amount: totalCost * 100, // Amount in kobo (multiply by 100 to convert to Naira)
    publicKey,
    text: "Pay Now",
    channels: ["card"],
    onSuccess: (reference) => {
      console.log("Payment successful. Reference:", reference);
      toast.success(
        
        <div className="text-black text-sm ">
          Payment successful

        </div>)
      // Handle successful payment (e.g., update order status, redirect)
    },
    onClose: () => {
      console.log("Payment closed");
      toast.error(
        
        <div className="text-black text-sm ">
          Payment closed

        </div>)
      // Handle payment closure (e.g., show a message to the user)
    },
    onError: (error) => {
      console.error("Payment error:", error);
      toast.error(
        
        <div className="text-black text-sm ">
          Payment Failed

        </div>)
      // Handle payment error (e.g., show an error message to the user)
    },
  };

  return (
    <>
      <div className="mt-24 text-black pt-5 sm:mt-16 w-full AcehLight   ">
        <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
          <i className="fas fa-arrow-left text-black" />
        </div>
        <div className="Aceh text-2xl my-5 text-center">Billing Details</div>

        <div className="w-full px-72 sm:px-0 m-auto ">
          <div className=" m-auto justify-center sm:w-full ">
            <div className="  sm:mx-0 mx-5 px-5 m-auto bg-white ">
              <div className="Aceh text-2xl my-1 ">Delivery</div>
              <div className=" flex-col flex gap-3  ">
                <div className="flex gap-3  border p-3 cursor-pointer	 mt-2 rounded">
                  <input
                    type="radio"
                    name="radio-7"
                    id="option1"
                    required
                    className="radio  radio-info radio-sm shadow-white "
                    value="option1"
                    checked={selectedDelivery === "option1"}
                    onChange={handleDelivery}
                  />
                  <label
                    htmlFor="option1"
                    className="text-md w-full cursor-pointer	"
                  >
                    {" "}
                    Pick up
                  </label>
                </div>
                {selectedDelivery === "option1" && (
                  <div>
                    <div className="mb-2 ">
                      <h1 className="text-sm ">Pick up Location</h1>
                      <div className="border p-2 border rounded  bg-gray-100">
                        <h1 className=" text-md ">
                          1/5 Pastor Olu-olusakin Avenue Alaguntan
                        </h1>
                        <p className="text-gray-500 text-md">
                          1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah, Lagos
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-3 border p-3 cursor-pointer	 rounded">
                  <input
                    type="radio"
                    id="option2"
                    required
                    className="radio  radio-info radio-sm box-shadow"
                    value="option2"
                    checked={selectedDelivery === "option2"}
                    onChange={handleDelivery}
                  />
                  <label
                    htmlFor="option2"
                    className="text-md w-full cursor-pointer	"
                  >
                    {" "}
                    Delivery
                  </label>
                </div>
              </div>

              {selectedDelivery === "option2" && (
                <form onSubmit={handleDeliveryForm} id="billing-form">
                  <div>
                    <div className=" p-10  sm:p-4 flex flex-col gap-8">
                      <CountrySelect
                        onChange={(e) => {
                          setCountryid(e.id);
                          setDeliveryForm({ ...deliveryForm, country: e.name })
                          console.log(e.name)
                        }}
                        required={true}
                        placeHolder="Select Country"
                        className="bg-white"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white "
                        name="country"
                        value={deliveryForm.country}
                      />
                      <input
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={deliveryForm.firstName}
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, firstName: e.target.value })}
                        className="p-3 w-full border bg-white"
                      ></input>
                      <input
                        placeholder="Last Name"
                        required
                        className="p-3 w-full border bg-white"
                        name="lastname"
                        value={deliveryForm.lastname}
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, lastname: e.target.value })}

                      ></input>
                      <input
                        placeholder="Email"
                        required
                        className="p-3 w-full border bg-white"
                        name="email"
                        value={deliveryForm.email}
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, email: e.target.value })}

                      ></input>

                      <textarea
                        placeholder="Street Address"
                        required
                        className="p-3 w-full border bg-white"
                        name="address"
                        value={deliveryForm.address}
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, address: e.target.value })}

                      ></textarea>

                      <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                          setstateid(e.id);
                          setDeliveryForm({ ...deliveryForm, state: e.name })
                        }}
                        required
                        name="state"
                        placeHolder="Select State"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                      />
                      <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        required
                        onChange={(e) => {
                          console.log(e);
                          setDeliveryForm({ ...deliveryForm, city: e.name })

                        }}
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                        placeHolder="Select City"

                      />
                      <input
                        required
                        placeholder="Postal Code"
                        className="p-3 w-full border bg-white"
                        name="postalCode"
                        value={deliveryForm.postalCode}
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, postalCode: e.target.value })}

                      ></input>
                      <input
                        required
                        placeholder="Phone number "
                        name="phoneNumber"
                        value={deliveryForm.phoneNumber}
                        // onChange={handleChange}
                        className="p-3 w-full border bg-white"
                        onChange={(e) => setDeliveryForm({ ...deliveryForm, phoneNumber: e.target.value })}

                      ></input>
                    </div>
                    <button id="submit1" className=" hidden">
                      submit
                    </button>
                  </div>
                </form>
              )}
              <div className="Aceh text-2xl my-1 border-t border-t-8 pt-6">
                Payment
              </div>
              <p className="text-gray-300">
                All transaction are secured and encrypted
              </p>

              <div className=" flex-col flex ">
                <div className="flex gap-3 text-gray-600  border p-3 sm:py-0 cursor-pointer	flex rounded">
                  <input
                    type="radio"
                    id="option3"
                    className="radio m-auto radio-info radio-sm "
                    value="option3"
                    checked={selectePayment === "option3"}
                    onChange={handlePayment}
                  />
                  <label
                    htmlFor="option3"
                    className="text-md w-full cursor-pointer  m-auto flex	"
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
                      <div className="border p- text-gray-600  rounded flex flex-col py-8 bg-gray-100">
                        <i className="fa-solid fa-credit-card m-auto text-5xl" />
                        <h1 className=" text-md text-center my-2 ">
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
                    className="radio m-auto radio-info radio-sm box-shadow"
                    value="option4"
                    checked={selectePayment === "option4"}
                    onChange={handlePayment}
                  />
                  <label
                    htmlFor="option4"
                    className="text-md w-full  cursor-pointer m-auto	"
                  >
                    {" "}
                    Bank deposit
                  </label>
                </div>
                {selectePayment === "option4" && (
                  <div>
                    <div className="bg-gray-200 p-10 sm:p-5 flex flex-col gap-4">
                      <p className="flex flex-col">
                        <span className="Aceh">Naira </span>
                        <span>Account name: CRYSTALVEEY MERCH </span>
                        <span>Account number: 0741537772</span>
                        <span>Bank: GTBank</span>
                        <span>Narration: "YOUR NAME"</span>
                      </p>
                      <p className="flex flex-col">
                        <span className="Aceh">Dollar</span>
                        <span>0803567624</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className=" Aceh text-2xl my-4 border-t border-t-8 pt-6">
                Billing Address
              </div>
              {selectedDelivery === "option1" && (
                <form onSubmit={handleChange} id="billing-form">
                  <div>
                    <div className="bg-gray-200 p-10  sm:p-4 flex flex-col gap-8">
                      <CountrySelect
                        onChange={(e) => {
                          setCountryid(e.id);
                        }}
                        required={true}
                        placeHolder="Select Country"
                        className="bg-white"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white "
                        name="firstName"
                        value={formData.country}
                      />
                      <input
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={FormData.firstName}
                        onChange={handleChange}
                        className="p-3 w-full border bg-white"
                      ></input>
                      <input
                        placeholder="Last Name"
                        required
                        className="p-3 w-full border bg-white"
                        name="lastName"
                        value={FormData.lastName}
                        onChange={handleChange}
                      ></input>
                      <input
                        placeholder="Email"
                        required
                        className="p-3 w-full border bg-white"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      ></input>

                      <textarea
                        placeholder="Address"
                        required
                        className="p-3 w-full border bg-white"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>

                      <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                          setstateid(e.id);
                        }}
                        required
                        placeHolder="Select State"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                      />
                      <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        required
                        onChange={(e) => {
                          console.log(e);
                        }}
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                        placeHolder="Select City"
                      />
                      <input
                        required
                        placeholder="Postal Code"
                        className="p-3 w-full border bg-white"
                      ></input>
                      <input
                        required
                        placeholder="Phone number "
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="p-3 w-full border bg-white"
                      ></input>
                    </div>
                    <button id="submit1" className=" hidden">
                      submit
                    </button>
                  </div>
                </form>
              )}

              {selectedDelivery === "option2" && (
                <div className=" flex-col flex ">
                  <div className="flex gap-3  border p-3 cursor-pointer	flex rounded">
                    <input
                      type="radio"
                      id="option5"
                      required
                      className="radio m-auto radio-info radio-sm box-shadow"
                      value="option5"
                      checked={selecteBilling === "option5"}
                      onChange={handleBilling}
                    />
                    <label
                      htmlFor="option5"
                      className="text-md w-full cursor-pointer  m-auto flex	"
                    >
                      {" "}
                      <p>Same as Delivery Address </p>
                    </label>
                  </div>

                  <div  className="flex gap-3 border p-3 cursor-pointer	 rounded">
                    <input
                      type="radio"
                      required
                      id="option6"
                      className="radio m-auto radio-info radio-sm box-shadow"
                      value="option6"
                      checked={selecteBilling === "option6"}
                      onChange={handleBilling}
                    />
                    <label
                      htmlFor="option6"
                      className="text-md w-full  cursor-pointer	"
                    >
                      {" "}
                      Use a different Billing Address
                    </label>
                  </div>
                  {selecteBilling === "option6" && (
                    <form onSubmit={handleChange} id="billing-form">
                  <div>
                    <div className="bg-gray-200 p-10  sm:p-4 flex flex-col gap-8">
                      <CountrySelect
                        onChange={(e) => {
                          setCountryid(e.id);
                        }}
                        required={true}
                        placeHolder="Select Country"
                        className="bg-white"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white "
                        name="firstName"
                        value={formData.country}
                      />
                      <input
                        placeholder="First Name"
                        required
                        name="firstName"
                        value={FormData.firstName}
                        onChange={handleChange}
                        className="p-3 w-full border bg-white"
                      ></input>
                      <input
                        placeholder="Last Name"
                        required
                        className="p-3 w-full border bg-white"
                        name="lastName"
                        value={FormData.lastName}
                        onChange={handleChange}
                      ></input>
                      <input
                        placeholder="Email"
                        required
                        className="p-3 w-full border bg-white"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      ></input>

                      <textarea
                        placeholder="Address"
                        required
                        className="p-3 w-full border bg-white"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>

                      <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                          setstateid(e.id);
                        }}
                        required
                        placeHolder="Select State"
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                      />
                      <CitySelect
                        countryid={countryid}
                        stateid={stateid}
                        required
                        onChange={(e) => {
                          console.log(e);
                        }}
                        inputClassName="bg-white border-none"
                        containerClassName="bg-white border-none"
                        placeHolder="Select City"
                      />
                      <input
                        required
                        placeholder="Postal Code"
                        className="p-3 w-full border bg-white"
                      ></input>
                      <input
                        required
                        placeholder="Phone number "
                        name="phone"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="p-3 w-full border bg-white"
                      ></input>
                    </div>
                    <button id="submit1" className=" hidden">
                      submit
                    </button>
                  </div>
                </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="  sm:block  flex flex-col static mb-10 py-10 m-auto   w-1/2">
          <div className="text-black AcehLight flex justify-between">
            Subtotal:<span> ₦{cartTotal} </span>
          </div>

          {selectedDelivery === "option1" && (
            <div className="flex justify-between AcehLight text-black">
              <span>Pick up</span>
              <span> Free</span>
            </div>
          )}
          {selectedDelivery === "option2" && (
            <div className="flex justify-between AcehLight text-black">
              <span>Delivery Fee:</span>
              <span> ₦{shippingFee}</span>
            </div>
          )}
          <div className="text-black Aceh flex text-xl justify-between">
            Total:
            <span>
              {" "}
              ₦{selectedDelivery === "option2" ? totalCost : cartTotal}
            </span>
          </div>
          {selectePayment === "option3" && isPaymentButtonVisible && (
            <PaystackButton
              className="bg-black px-10 py-3 mt-5 m-auto text-xl sm:text-sm flex capitalize justify-center text-white"
              {...paymentData}
            />
          )}
          {selectePayment === "option4" && (
          <button
          type="button"
          onClick={()=>document.getElementById('my_modal_3').showModal()}
            form="billing-form"
            className="bg-black px-10 py-3 mt-5  m-auto text-xl sm:text-sm flex capitalize justify-center text-white"
          >
            {" "}
            PAY NOW
          </button>)}
          <dialog id="my_modal_3" className="modal "  >
  <div className="modal-box bg-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <video src="/Images/icons/confirm.mp4" autoPlay loop  className="w-1/2 flex m-auto "/>
    <p className="py-4 text-success text-2xl text-center">We have received your order!!!</p>
    <h3 className="font-bold text-lg text-center">We will contact you as soon as we have confirmed your payment</h3>
    <div className="dropdown dropdown-hover flex justify-center">
  <label tabIndex={0} className="underline text-sm text-sky-500 m-1 text-center">Order Summery</label>
  <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-sky-500 rounded-box w-52">
  <table className="table ">
                  {/* head */}
                  <thead>
                    <tr className="text-black">
                      <th></th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  {items.map((item, id) => (
                    <tbody key={id}>
                      {/* row 1 */}
                      <tr>
                        <th className="border">

                        </th>
                        <td className="border">{item.name}</td>
                        <td className="border">{item.quantity}</td>
                        <td className="border">N{item.itemTotal}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
                <h1 className="text-xl AcehLight bold py-2 flex justify-between">
                  Subtotal ({items.length} items) <span> N{cartTotal}</span>{" "}
                </h1>
  </div>
</div>
<NavLink to="/">

    <button className="btn flex my-5 m-auto text-white">Go Home</button>
    </NavLink>
  </div>
  
 </dialog>
 <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Checkout;
