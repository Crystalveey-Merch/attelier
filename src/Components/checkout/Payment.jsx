/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/user.slice";
import { PaystackButton } from "react-paystack";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  // convertNumberToNaira,
  // convertPriceToLocale,
  getProductDetails,
} from "../../hooks";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  serverTimestamp,
  db,
  storage,
  doc,
  // updateDoc,
  setDoc,
} from "../../firebase/auth";
import moment from "moment";
import { SuccessModal } from "./SuccessModal";
import { emptyCart } from "../../redux/cart.slice";
import { useAtUngData } from "../ShareContext";

export const Payment = ({
  paymentMethod,
  setPaymentMethod,
  bankDetailsExpand,
  setBankDetailsExpand,
  termsAccepted,
  setTermsAccepted,
  deliveryMethod,
  deliveryAddress,
  // deliveryCity,
  // deliveryState,
  // deliveryCountry,
  // deliveryZip,
  helpfulDeliveryMessage,
  distanceValue,
  pickupLocation,
  deliveryFee,
  deliveryPhone,
  deliveryFirstName,
  deliveryLastName,
  deliveryCompStaus,
  setDeliveryCompStatus,
  purchaseData,
  guestEmail,
  total,
  loading,
  setLoading,
}) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, products } = useAtUngData();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const generateOrderId = (type) => {
      if (orders.length > 0) {
        const sortedOrders = orders.sort((a, b) => {
          const aNumer = parseInt(a.orderId.split(type)[1]);
          const bNumer = parseInt(b.orderId.split(type)[1]);
          return bNumer - aNumer;
        });
        const lastOrder = sortedOrders[0];
        const lastOrderId = lastOrder.orderId;
        const lastOrderNumber = lastOrderId.split(type)[1];
        const newOrderNumber = Number(lastOrderNumber) + 1;
        setOrderId(`${type}${newOrderNumber.toString().padStart(6, "0")}`);
      } else {
        setOrderId(`${type}100001`);
      }
    };
    generateOrderId("AT");
  }, [orders]);

  const [screenshotURLs, setScreenshotURLs] = useState([]);
  const [screenshotFiles, setScreenshotFiles] = useState([]);

  const screenShotRef = useRef(null);

  const openScreenshotPicker = () => {
    if (screenShotRef.current) {
      screenShotRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const totalFilesCount = screenshotFiles.length + files.length;

    if (totalFilesCount > 3) {
      // If total files count exceeds 3, show a warning and return without adding more files
      toast.error("You can only upload a maximum of 3 screenshots");
      return;
    }

    const previewUrls = [];
    const newFiles = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        previewUrls.push(reader.result);
        if (previewUrls.length === files.length) {
          setScreenshotURLs([...screenshotURLs, ...previewUrls]);
        }
      };
      reader.readAsDataURL(file);
      newFiles.push(file);
    });

    setScreenshotFiles([...screenshotFiles, ...newFiles]);
  };

  const handleRemoveScreenshot = (index) => {
    const files = [...screenshotFiles];
    const urls = [...screenshotURLs];
    files.splice(index, 1);
    urls.splice(index, 1);
    setScreenshotFiles(files);
    setScreenshotURLs(urls);
  };

  const payStackPublickKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  //   const [loading, setLoading] = useState(false);

  //   const total =
  //     deliveryMethod === "home-delivery"
  //       ? purchaseData.totalBeforeCheckout + 5000
  //       : purchaseData.totalBeforeCheckout;
  const [openPaymentSentModal, setOpenPaymentSentModal] = useState(false);

  const handleCloseModal = () => {
    setOpenPaymentSentModal(false);
    // deleteCookie("purchaseData");
    dispatch(emptyCart());
    navigate("/");
  };

  // useEffect(() => {
  //   // Execute this function only once after 30 seconds
  //   const interval = setInterval(() => {
  //     deleteCookie("purchaseData"); // Remove the "purchaseData" cookie
  //     dispatch(emptyCart()); // Dispatch the action to empty the cart
  //     console.log("Order placed successfully");
  //     navigate("/"); // Navigate to the home page
  //   }, 30000);

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(interval);
  // }, [dispatch, router]);

  const componentProps = {
    email: user ? user.email : guestEmail,
    name: `${deliveryFirstName} ${deliveryLastName}`,
    amount: total * 100,
    publicKey: payStackPublickKey,
    text: "Pay with PayStack",
    onSuccess: () => {
      handlePayByPaystack();
    },
    onClose: () => {
      toast.error("Popup closed without payment");
    },
  };

  const updatedProducts = purchaseData.cart.map((product) => {
    const productDetails = getProductDetails(product?.productId, products);
    return {
      ...product,
      productDetails,
      colors: getProductDetails(product?.productId, products)?.colors,
      sizes: getProductDetails(product?.productId, products)?.sizes,
      name: getProductDetails(product?.productId, products)?.name,
      images: getProductDetails(product?.productId, products)?.images,
      quantity: getProductDetails(product?.productId, products)?.quantity,
    };
  });

  // console.log("updatedProducts", updatedProducts);

  const handlePayByBank = async () => {
    setLoading(true);

    if (screenshotFiles.length === 0) {
      toast.error("Please upload a screenshot of your payment receipt");
      setLoading(false);
      return;
    }
    const screenshotPrevieURLs = await Promise.all(
      screenshotFiles.map(async (file) => {
        const storageRef = ref(storage, `payments-screenshot/${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
      })
    );

    const orderRef = doc(db, "orders", orderId);

    try {
      await setDoc(orderRef, {
        orderId,
        customer: {
          email: user ? user.email : guestEmail,
          firstName: deliveryFirstName,
          lastName: deliveryLastName,
          phone: deliveryPhone,
          id: user ? user.id : "",
        },
        deliveryMethod,
        deliveryStatus: "pending",
        pickedDeliveryDate: "",
        actualDeliveryDate: "",
        actualDeliveryTime: "",
        deliveryStartTimestamp: "",
        deliveryEndTimestamp: "",
        deliveryCost: deliveryMethod === "home-delivery" ? deliveryFee : 0,
        deliveryCancelationReason: "",
        deliveryCancelationCost: "",
        deliveryAddress,
        helpfulDeliveryMessage,
        distanceValue,
        pickupLocation,
        // deliveryCity,
        // deliveryState,
        // deliveryCountry,
        // deliveryZip,
        deliveryPhone,
        deliveryFirstName,
        deliveryLastName,
        // update product in cart with correct details
        productsPurchased: updatedProducts,
        total,
        isDiscounted: false,
        discount: 0,
        coupon: null,
        status: "pending",
        paymentStatus: "pending",
        paymentMethod: "bank",
        paymentCurrency: "NGN",
        paymentCurrencyLocale: "en-NG",
        cancellationCost: 0,
        refundAmount: 0,
        cancellationReason: "",
        refundNote: "",
        createdAt: serverTimestamp(),
        timeCreated: moment().format("h:mm:ss a"),
        dateCreated: moment().format("MMMM Do YYYY"),
        paymentScreenshots: screenshotPrevieURLs,
      });
      setDeliveryCompStatus("completed");
      setLoading(false);
      setOpenPaymentSentModal(true);
      toast.success("Order placed successfully");
      setTermsAccepted(false);
      setScreenshotFiles([]);
      setScreenshotURLs([]);
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error placing order, please try again", error);
      setLoading(false);
    }
  };

  const handlePayByPaystack = async () => {
    setLoading(true);

    const orderRef = doc(db, "orders", orderId);

    try {
      await setDoc(orderRef, {
        orderId,
        customer: {
          email: user ? user.email : guestEmail,
          firstName: deliveryFirstName,
          lastName: deliveryLastName,
          phone: deliveryPhone,
          id: user ? user.id : "",
        },
        deliveryMethod,
        deliveryStatus: "pending",
        pickedDeliveryDate: "",
        actualDeliveryDate: "",
        actualDeliveryTime: "",
        deliveryStartTimestamp: "",
        deliveryEndTimestamp: "",
        deliveryCost: deliveryMethod === "home-delivery" ? deliveryFee : 0,
        deliveryCancelationReason: "",
        deliveryCancelationCost: "",
        deliveryAddress,
        helpfulDeliveryMessage,
        distanceValue,
        pickupLocation,
        // deliveryCity,
        // deliveryState,
        // deliveryCountry,
        // deliveryZip,
        deliveryPhone,
        deliveryFirstName,
        deliveryLastName,
        // update product in cart with correct details
        productsPurchased: updatedProducts,
        total,
        isDiscounted: false,
        discount: 0,
        coupon: null,
        status: "pending",
        paymentStatus: "paid",
        paymentMethod: "paystack",
        paymentCurrency: "NGN",
        paymentCurrencyLocale: "en-NG",
        cancellationCost: 0,
        refundAmount: 0,
        cancellationReason: "",
        refundNote: "",
        createdAt: serverTimestamp(),
        timeCreated: moment().format("h:mm:ss a"),
        dateCreated: moment().format("MMMM Do YYYY"),
      });
      setDeliveryCompStatus("completed");
      setLoading(false);
      setOpenPaymentSentModal(true);
      toast.success("Order placed successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error placing order, please try again", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {deliveryCompStaus === "completed" ? (
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-black">Payment Details</h3>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-xl">Choose payment method</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center w-full border border-gray-300 rounded-md p-4">
                <input
                  type="radio"
                  name="payment"
                  id="paystack"
                  className="w-5 h-5 cursor-pointer"
                  checked={paymentMethod === "paystack"}
                  onClick={() => (
                    setPaymentMethod("paystack"), setBankDetailsExpand(false)
                  )}
                />
                <label htmlFor="paystack" className="flex gap-2 items-center">
                  <p className="text-sm text-black">Pay with PayStack</p>
                </label>
              </div>
              <div className="flex flex-col gap-10 w-full border border-gray-300 rounded-md p-4">
                <div className="flex gap-4 items-center">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    id="card"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => (
                      setPaymentMethod("bank"), setBankDetailsExpand(true)
                    )}
                  />
                  <label htmlFor="card" className="flex gap-2 items-center">
                    <p className="text-sm text-gray-700">
                      Pay through Bank Transfer
                    </p>
                  </label>
                </div>
                <div
                  className={`${
                    bankDetailsExpand ? "flex" : "hidden"
                  } flex-col gap-5 w-full`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-900 font-bold">
                      Read the terms and conditions before making payment.{" "}
                      <p className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600">
                        Terms and Conditions
                      </p>
                    </p>
                    <h2 className="font-semibold text-lg">
                      Naira Account Details
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Bank Name:
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          Guaranty Trust Bank
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Name:
                        </p>
                        <p className="text-sm text-gray-700">
                          CRYSTALVEEY MERCH
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Number:
                        </p>
                        <p className="text-sm text-gray-700">0741537772</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      Dollar Account Details
                    </h2>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Bank Name:
                        </p>
                        <p className="text-sm text-gray-700 font-medium">
                          Guaranty Trust Bank
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Name:
                        </p>
                        <p className="text-sm text-gray-700">
                          CRYSTALVEEY MERCH
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <p className="text-sm text-gray-700 font-medium">
                          Account Number:
                        </p>
                        <p className="text-sm text-gray-700">0788271037</p>
                      </li>
                    </ul>
                  </div>
                  {/* <p className="text-sm text-gray-900 font-bold">
                    Please ensure you include
                  </p> */}
                  <p className="text-sm text-gray-900 font-bold">
                    <span className="text-red-500 font-semibold">
                      Note: Please upload a screenshot of the payment receipt
                      below.(Min: 1 screenshot, Max: 3 screenshots)
                    </span>
                    <br />
                    For any issues or concerns contact{" "}
                    <a
                      href="tel:+2348126091411"
                      className="text-blue-500 underline"
                    >
                      +234 812 609 1411
                    </a>{" "}
                    /{" "}
                    <a
                      href="mailto:info@crystalveey.com"
                      className="text-blue-500 underline"
                    >
                      info@crystalveey.com
                    </a>
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 flex-wrap">
                      {screenshotURLs.map((url, index) => (
                        <div
                          key={index}
                          className="relative w[100px] max-w-[300px] h-[300px] rounded-lg overflow-hidden"
                        >
                          <img
                            src={url}
                            alt="screenshot"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveScreenshot(index)}
                            className="absolute top-1.5 right-1.5 w-7 h-7 flex justify-center items-center bg-red-500 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                              stroke="#fff"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={openScreenshotPicker}
                      className="w-[100px] h-[100px] flex justify-center items-center border border-gray-300 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-10 h-10 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                    <input
                      type="file"
                      ref={screenShotRef}
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  <p className="text-sm text-gray-900 font-bold">
                    Click the button below if you have successfully made a
                    transfer.
                  </p>
                </div>
              </div>
              {/* terms */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={termsAccepted}
                  className="w-5 h-5 cursor-pointer"
                  onClick={() =>
                    !termsAccepted
                      ? setTermsAccepted(true)
                      : setTermsAccepted(false)
                  }
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <span className="text-blue-500 font-semibold cursor-pointer hover:text-blue-600">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              {paymentMethod === "paystack" ? (
                <>
                  {!termsAccepted ? (
                    <button
                      className={`place-self-center bg-[#000000] text-white w-max font-semibold text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-gray-900 md:text-base md:p-2.5 ${
                        !termsAccepted
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                      }`}
                      onClick={() =>
                        toast.info("Please accept the terms and conditions")
                      }
                    >
                      Pay with PayStack
                    </button>
                  ) : (
                    <PaystackButton
                      className={`place-self-center bg-[#000000] text-white  w-max font-semibold text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-gray-900 md:text-base md:p-2.5 ${
                        !termsAccepted
                          ? "opacity-50 cursor-not-allowed"
                          : "opacity-100 cursor-pointer"
                      }`}
                      {...componentProps}
                    />
                  )}
                </>
              ) : (
                <button
                  className={`place-self-center bg-[#000000] text-white  w-max font-semibold text-lg rounded-lg px-8 py-3 transition duration-300 ease-in-out hover:bg-gray-900 md:text-base md:p-2.5 ${
                    paymentMethod === "" || !termsAccepted || loading
                      ? "opacity-50 cursor-not-allowed"
                      : "opacity-100 cursor-pointer"
                  }`}
                  onClick={() =>
                    termsAccepted
                      ? handlePayByBank()
                      : toast.info("Please accept the terms and conditions")
                  }
                  disabled={paymentMethod === "" || loading}
                >
                  {loading ? "Loading..." : "Confirm Payment"}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-lg font-semibold text-black p-4 opacity-50 bg-gray-100">
          Payment Details
        </h3>
      )}
      <SuccessModal
        open={openPaymentSentModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};
