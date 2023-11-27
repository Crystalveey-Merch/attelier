import { useCart } from "react-use-cart";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { PAYSTACK_PUBLIC_KEY } from "/src/Pages/Payment/payment.js";
import { Helmet } from "react-helmet-async";

export const PaymentDetails = () => {
  const [isPaymentButtonVisible, setIsPaymentButtonVisible] =useState(true)
  const publicKey = PAYSTACK_PUBLIC_KEY;
  const { isEmpty, items, cartTotal, updateItemQuantity, removeItem } =
    useCart();

    const goBack = () => {
      window.history.back();
      }
      
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    amount: "",
    email: "",
    // Add more fields as needed
  });

  const paymentData = {
    email: formData.email,
    amount: cartTotal * 100, // Amount in kobo (multiply by 100 to convert to Naira)
    publicKey,
    text: 'Pay Now',
    onSuccess: (reference) => {
      console.log('Payment successful. Reference:', reference);
      // Handle successful payment (e.g., update order status, redirect)
    },
    onClose: () => {
      console.log('Payment closed');
      // Handle payment closure (e.g., show a message to the user)
    },
    onError: (error) => {
      console.error('Payment error:', error);
      // Handle payment error (e.g., show an error message to the user)
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayNowClick = () => {
    // Perform any form validation here if needed
    // You can also perform additional checks before allowing payment

    // Initiate the Paystack payment when "Pay Now" button is clicked
    setIsPaymentButtonVisible(true)
    PaystackButton(paymentData);
  };

  return (
    <div className="mt-24 sm:mt-16 AcehLight text-black w-full m-auto">
     <Helmet>
     <title> Payment Page| Attelier</title>
    <meta name='description' content="Payment Page"/>
    <link rel=" canonical"  href='/:categoryName'/>
    </Helmet>
      <div className=" pt-5 w-2/5 justify-center m-auto sm:w-full">
      <div className="hidden   sm:block pt-5 pl-5" onClick={goBack}>
      <i className="fas fa-arrow-left text-black"/>

      </div>
        <form id="paymentForm" className="p-10" >
          <div className="form-group flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email-address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border p-2"
              required
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              type="tel"
              id="amount"
              value={cartTotal}
              name="amount"
              onChange={handleChange}
              disabled
              className="bg-white border p-2"
              required
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border p-2"
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" className="bg-white border p-2" />
          </div>
          <div className="form-submit flex my-5 m-auto justify-center ">
          {isPaymentButtonVisible && <PaystackButton className="border btn" {...paymentData} />}
          {/* <button
              className="btn"
              type="button"
              onClick={handlePayNowClick}
            >
              Pay Now
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};
