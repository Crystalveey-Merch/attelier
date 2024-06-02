/* eslint-disable react/prop-types */
import { useEffect } from "react";
// import { Country, State } from "country-state-city";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user.slice";
import { toast } from "react-toastify";
import { RouteMap } from "../RouteMap";

export const Delivery = ({
  deliveryCompStaus,
  setDeliveryCompStatus,
  deliveryMethod,
  setDeliveryMethod,
  deliveryAddress,
  setDeliveryAddress,
  // deliveryCity,
  // setDeliveryCity,
  // deliveryState,
  // setDeliveryState,
  // deliveryCountry,
  // setDeliveryCountry,
  // deliveryZip,
  // setDeliveryZip,
  helpfulDeliveryMessage,
  setHelpfulDeliveryMessage,
  setDistanceValue,
  deliveryFee,
  setPickupLocation,
  deliveryPhone,
  setDeliveryPhone,
  deliveryFirstName,
  setDeliveryFirstName,
  deliveryLastName,
  setDeliveryLastName,
}) => {
  const user = useSelector(selectUser);
  // const [countries, setCountries] = useState([]);
  // const [states, setStates] = useState([]);
  // const [cities, setCities] = useState([]);

  // console.log(states, deliveryState, deliveryCity);
  // console.log(isLoading);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const countries = Country.getAllCountries();
  //   setCountries(countries);
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const states = State.getStatesOfCountry(deliveryCountry);
  //   setStates(states);
  //   setIsLoading(false);
  // }, [deliveryCountry]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     const cities = City.getCitiesOfState(deliveryCountry, deliveryState);
  //     setCities(cities);
  //     setIsLoading(false);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [deliveryState]);

  useEffect(() => {
    if (user) {
      setDeliveryFirstName(
        user.displayName
          ? user.displayName.split(" ")[0]
          : user.name.split(" ")[0]
      );
      setDeliveryLastName(
        user.displayName
          ? user.displayName.split(" ")[1]
          : user.name.split(" ")[1]
      );
      // setDeliveryPhone(user.phone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleGoToPayment = (e) => {
    e.preventDefault();
    if (!deliveryMethod) {
      toast.error("Please select a delivery method");
      return;
    }
    if (deliveryMethod === "home-delivery") {
      if (!deliveryFirstName || !deliveryLastName) {
        toast.error("Please enter your first and last name");
        return;
      }
      if (!deliveryPhone || deliveryPhone.length < 9) {
        toast.error("Please enter your phone number");
        return;
      }
    }
    setDeliveryCompStatus("completed");
  };

  return (
    <>
      {/* add or edit */}
      {deliveryCompStaus === "add" || deliveryCompStaus === "edit" ? (
        <form className="flex flex-col gap-6" onSubmit={handleGoToPayment}>
          <h3 className="text-lg font-semibold text-black">Delivery Details</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 sm:flex-col sm:gap-3.5">
              <div className="flex gap-4 items-center w-full border border-gray-300 rounded p-4">
                <input
                  type="radio"
                  name="delivery"
                  id="delivery"
                  className="w-5 h-5 cursor-pointer"
                  checked={deliveryMethod === "home-delivery"}
                  onClick={() => setDeliveryMethod("home-delivery")}
                />
                <label htmlFor="delivery" className="flex gap-2 items-center">
                  <p className="text-sm text-black">
                    Home Delivery (
                    {deliveryFee
                      ? `${deliveryFee.toLocaleString("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        })}`
                      : "Based on distance"}
                    ){" "}
                  </p>
                </label>
              </div>
              <div className="flex gap-4 items-center w-full border border-gray-300 rounded p-4">
                <input
                  type="radio"
                  name="delivery"
                  id="pickup"
                  className="w-5 h-5 cursor-pointer"
                  checked={deliveryMethod === "pickup"}
                  onClick={() => setDeliveryMethod("pickup")}
                />
                <label htmlFor="pickup" className="flex gap-2 items-center">
                  <p className="text-sm text-black">Pickup (₦0)</p>
                </label>
              </div>
            </div>
            {deliveryMethod === "home-delivery" ? (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">
                  Delivery Address
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 sm:flex-col sm:gap-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-md border border-gray-300 bg-white py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryFirstName}
                      onChange={(e) => setDeliveryFirstName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryLastName}
                      onChange={(e) => setDeliveryLastName(e.target.value)}
                      required
                    />
                  </div>
                  {/* <div className="flex gap-4 sm:flex-col sm:gap-3">
                    <select
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryCountry}
                      onChange={(e) => setDeliveryCountry(e.target.value)}
                      required
                      placeholder="Select Country"
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Zip"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryZip}
                      onChange={(e) => setDeliveryZip(e.target.value)}
                      required
                    />
                  </div> */}
                  {/* <div className="flex gap-4 sm:flex-col sm:gap-3">
                    <select
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryState}
                      onChange={(e) => setDeliveryState(e.target.value)}
                      required
                      placeholder="Select State"
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.name}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="City"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={deliveryCity}
                      onChange={(e) => setDeliveryCity(e.target.value)}
                      required
                    />
                  </div> */}
                  <div className="flex gap-4 sm:flex-col sm:gap-3">
                    <PhoneInput
                      defaultCountry="ng"
                      name="phone"
                      placeholder=""
                      value={deliveryPhone}
                      onChange={setDeliveryPhone}
                      required
                      className="w-[400px] bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <textarea
                      placeholder="Helpful delivery instructions"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={helpfulDeliveryMessage}
                      onChange={(e) =>
                        setHelpfulDeliveryMessage(e.target.value)
                      }
                    />
                  </div>
                  <div className="flex gap-4 sm:flex-col sm:gap-3">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      required
                      readOnly
                    />
                  </div>
                  <div className="w-full">
                    <RouteMap
                      setDistanceValue={setDistanceValue}
                      setPickupLocation={setPickupLocation}
                      // setState={setDeliveryState}
                      // setCity={setDeliveryCity}
                      setAddress={setDeliveryAddress}
                      title="Select Delivery Address"
                    />
                  </div>
                </div>
              </div>
            ) : deliveryMethod === "pickup" ? (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">
                  Pickup Location
                </h3>
                <h4 className="text-sm text-black">
                  1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah, Lagos
                </h4>
              </div>
            ) : (
              <></>
            )}
          </div>
          <button className="w-max px-4 bg-black text-white py-3 rounded-md font-semibold text-sm flex place-self-end">
            {deliveryCompStaus === "add"
              ? "Continue to Payment"
              : "Save Changes"}
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-between">
            <h3 className="text-lg font-semibold text-black">
              Delivery Details
            </h3>
            <button
              className="text-sm font-semibold bg-gray-100 text-black px-4 py-2 rounded-md"
              onClick={() => setDeliveryCompStatus("edit")}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <p className="text-sm text-black">
                <span className="font-semibold">Delivery Method:</span>{" "}
                {deliveryMethod === "home-delivery"
                  ? "Home Delivery"
                  : "Pickup"}
              </p>
            </div>
            {deliveryMethod === "home-delivery" ? (
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <p className="text-sm text-black">
                    <span className="font-semibold">Name:</span>{" "}
                    {deliveryFirstName} {deliveryLastName}
                  </p>
                </div>
                {/* <div className="flex gap-4">
                  <p className="text-sm text-black">
                    <span className="font-semibold">Country:</span>{" "}
                    {deliveryCountry}
                  </p>
                  <p className="text-sm text-black">
                    <span className="font-semibold">Zip:</span> {deliveryZip}
                  </p>
                </div>
                <div className="flex gap-4">
                  <p className="text-sm text-black">
                    <span className="font-semibold">State:</span>{" "}
                    {deliveryState}
                  </p>
                  <p className="text-sm text-black">
                    <span className="font-semibold">City:</span> {deliveryCity}
                  </p>
                </div> */}
                {helpfulDeliveryMessage && (
                  <div className="flex gap-4">
                    <p className="text-sm text-black">
                      <span className="font-semibold">
                        Helpful Instructions:
                      </span>{" "}
                      {helpfulDeliveryMessage}
                    </p>
                  </div>
                )}
                <div className="flex gap-4 sm:flex-col sm:gap-3">
                  <p className="text-sm text-black">
                    <span className="font-semibold">Address:</span>{" "}
                    {deliveryAddress}
                  </p>
                  <p className="text-sm text-black">
                    <span className="font-semibold">Phone:</span>{" "}
                    {deliveryPhone}
                  </p>
                </div>
              </div>
            ) : deliveryMethod === "pickup" ? (
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black">
                  Pickup Location
                </h3>
                <h4 className="text-sm text-black">
                  1 /5 Pastor Olu-olusakin Avenue Alaguntan ajah, Lagos
                </h4>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};
