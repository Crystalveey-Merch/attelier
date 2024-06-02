import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user.slice";
import {
  GuestLogin,
  Delivery,
  Payment,
  OrderSummary,
} from "../Components/checkout";
import {
  // getNoOfOrders,
  getProductDetails,
} from "../hooks";
import { useAtUngData } from "../Components/ShareContext";
// import { useLocation } from "react-router-dom";

export default function CheckoutPage() {
  //   const location = useLocation();
  const { orders, products } = useAtUngData();

  // Retrieve the purchaseData from localStorage
  const purchaseDataString = localStorage.getItem("purchaseData");
  const purchaseData = purchaseDataString
    ? JSON.parse(purchaseDataString)
    : null;
  //   const { purchaseData } = location.state;

  // Get the user from the redux store
  const user = useSelector(selectUser);
  const [guestEmail, setGuestEmail] = useState("");

  const [currentPage, setCurrentPage] = useState("select-guest");

  useEffect(() => {
    if (purchaseData && user) {
      setCurrentPage("checkout");
    } else if (purchaseData && !user && !guestEmail) {
      setCurrentPage("select-guest");
    } else if (purchaseData && !user && guestEmail) {
      setCurrentPage("checkout");
    }
  }, [purchaseData, user, guestEmail]);

  const [deliveryCompStaus, setDeliveryCompStatus] = useState("add");

  // delivery states
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [helpfulDeliveryMessage, setHelpfulDeliveryMessage] = useState("");
  // const [deliveryCity, setDeliveryCity] = useState("");
  // const [deliveryState, setDeliveryState] = useState("");
  // const [deliveryCountry, setDeliveryCountry] = useState("");
  // const [deliveryZip, setDeliveryZip] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [deliveryFirstName, setDeliveryFirstName] = useState("");
  const [deliveryLastName, setDeliveryLastName] = useState("");

  const [deliveryFee, setDeliveryFee] = useState(0);
  const [distanceValue, setDistanceValue] = useState(0);
  const [pickupLocation, setPickupLocation] = useState("");

  // payment states
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bankDetailsExpand, setBankDetailsExpand] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (distanceValue > 0) {
      const distance = distanceValue / 1000;
      if (distance <= 10) {
        setDeliveryFee(3000);
      } else if (distance > 10 && distance <= 20) {
        setDeliveryFee(5000);
      } else if (distance > 20 && distance <= 30) {
        setDeliveryFee(10000);
      } else {
        setDeliveryFee(15000);
      }
    }
  }, [distanceValue]);

  const [loading, setLoading] = useState(false);

  if (!orders || (!products && products.length === 0)) {
    return (
      <main className="mt-28 min-h-[80vh] flex justify-center items-center">
        <h2 className="text-3xl z-20 font-semibold text-center font-quicksand">
          Loading...
        </h2>
      </main>
    );
  }

  if (!purchaseData) {
    return (
      <main className="mt-28 min-h-[80vh] flex justify-center items-center">
        <h2 className="text-3xl z-20 font-semibold text-center font-quicksand">
          Empty cart
        </h2>
      </main>
    );
  }

  const totalBeforeCheckout = purchaseData?.cart?.reduce((acc, product) => {
    return (
      acc +
      getProductDetails(product.id, products)?.price * product.cartQuantity
    );
  }, 0);

  const total =
    deliveryMethod === "home-delivery"
      ? totalBeforeCheckout + deliveryFee
      : totalBeforeCheckout;

  return (
    <main className="mt-24 text-black min-h-[80vh] flex flex-col gap-16 py-10 px-16 xl:px-10 md:px-8 sm:px-4 md:mt-14">
      {purchaseData ? (
        currentPage === "select-guest" ? (
          <GuestLogin guestEmail={guestEmail} setGuestEmail={setGuestEmail} />
        ) : (
          <div className="w-full flex gap-10 justify-center lg:flex-col">
            <section className="w-[55%] flex flex-col gap-6 lg:w-full lg:order-2">
              <div className="w-full px-2.5 py-2 border border-gray-200 flex flex-col gap-0.5">
                <p className="text-sm text-black">You are checking out as:</p>
                <h4 className="text-sm font-semibold text-black">
                  {user ? user.email : guestEmail}
                </h4>
              </div>
              <hr className="border border-[rgba(145,158,171,0.2)] border-dashed" />
              <Delivery
                deliveryCompStaus={deliveryCompStaus}
                setDeliveryCompStatus={setDeliveryCompStatus}
                deliveryMethod={deliveryMethod}
                setDeliveryMethod={setDeliveryMethod}
                deliveryAddress={deliveryAddress}
                setDeliveryAddress={setDeliveryAddress}
                helpfulDeliveryMessage={helpfulDeliveryMessage}
                setHelpfulDeliveryMessage={setHelpfulDeliveryMessage}
                setDistanceValue={setDistanceValue}
                setPickupLocation={setPickupLocation}
                deliveryFee={deliveryFee}
                deliveryPhone={deliveryPhone}
                setDeliveryPhone={setDeliveryPhone}
                deliveryFirstName={deliveryFirstName}
                setDeliveryFirstName={setDeliveryFirstName}
                deliveryLastName={deliveryLastName}
                setDeliveryLastName={setDeliveryLastName}
              />
              <hr className="border border-[rgba(145,158,171,0.2)] border-dashed" />
              <Payment
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                bankDetailsExpand={bankDetailsExpand}
                setBankDetailsExpand={setBankDetailsExpand}
                termsAccepted={termsAccepted}
                setTermsAccepted={setTermsAccepted}
                deliveryMethod={deliveryMethod}
                deliveryAddress={deliveryAddress}
                helpfulDeliveryMessage={helpfulDeliveryMessage}
                distanceValue={distanceValue}
                pickupLocation={pickupLocation}
                deliveryFee={deliveryFee}
                // deliveryCity={deliveryCity}
                // deliveryState={deliveryState}
                // deliveryCountry={deliveryCountry}
                // deliveryZip={deliveryZip}
                deliveryPhone={deliveryPhone}
                deliveryFirstName={deliveryFirstName}
                deliveryLastName={deliveryLastName}
                deliveryCompStaus={deliveryCompStaus}
                setDeliveryCompStatus={setDeliveryCompStatus}
                purchaseData={purchaseData}
                guestEmail={guestEmail}
                total={total}
                loading={loading}
                setLoading={setLoading}
              />
            </section>
            <section className="lg:order-1">
              <OrderSummary
                purchaseData={purchaseData}
                total={total}
                deliveryMethod={deliveryMethod}
                totalBeforeCheckout={totalBeforeCheckout}
                deliveryFee={deliveryFee}
              />
            </section>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <h2 className="text-3xl z-20 font-semibold text-center font-quicksand">
            No purchase record found
          </h2>
        </div>
      )}
    </main>
  );
}
