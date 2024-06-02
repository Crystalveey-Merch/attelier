import { useEffect, useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { db, storage } from "../../firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user.slice";
import { useAtUngData } from "../../Components/ShareContext";
import { useNavigate } from "react-router-dom";
import { RouteMap } from "../../Components/RouteMap";

export const NewCustomMade = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { customMades } = useAtUngData();
  const [customId, setCustomId] = useState("");

  useEffect(() => {
    const generateCustomId = (type) => {
      if (customMades.length > 0) {
        const sortedCustomMades = customMades.sort((a, b) => {
          const aNumer = parseInt(a.customId.split(type)[1]);
          const bNumer = parseInt(b.customId.split(type)[1]);
          return bNumer - aNumer;
        });
        const lastCustom = sortedCustomMades[0];
        const lastCustomId = lastCustom.customId;
        const lastCustomNumber = lastCustomId.split(type)[1];
        const newOrderNumber = Number(lastCustomNumber) + 1;
        setCustomId(`${type}${newOrderNumber.toString().padStart(6, "0")}`);
      } else {
        setCustomId(`${type}100001`);
      }
    };
    generateCustomId("ATC");
  }, [customMades]);

  const goBack = () => {
    navigate(-1);
  };

  const loggedInFirstName = user?.displayName
    ? user?.displayName.split(" ")[0]
    : user?.name.split(" ")[0];
  const loggedInLastName = user?.displayName
    ? user?.displayName.split(" ")[1]
    : user?.name.split(" ")[1];
  const loggedInEmail = user?.email;

  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState(loggedInFirstName || "");
  const [lastName, setLastName] = useState(loggedInLastName || "");
  const [email, setEmail] = useState(loggedInEmail || "");
  const [phone, setPhone] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [measurementMode, setMeasurementMode] = useState("");
  const [measurementLocation, setMeasurementLocation] = useState("");
  const [distanceValue, setDistanceValue] = useState(0);
  const [helpfullLocationMessage, setHelpfullLocationMessage] = useState("");
  const [transportFee, setTransportFee] = useState(0);

  // images
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);
  const imageInputRef = useRef(null);

  const openImagePicker = () => {
    imageInputRef.current.click();
  };

  const handleImageFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    const previewUrls = [];
    const newFiles = [];

    files.forEach((file) => {
      const reader = new FileReader();
      // eslint-disable-next-line no-unused-vars
      reader.onload = (_e) => {
        previewUrls.push(reader.result);
        if (previewUrls.length === files.length) {
          setImagePreviewUrls([...imagePreviewUrls, ...previewUrls]);
        }
      };
      reader.readAsDataURL(file);
      newFiles.push(file);
    });

    setImageFiles([...imageFiles, ...newFiles]);
  };

  const cancelImage = (index) => {
    const files = [...imageFiles];
    const urls = [...imagePreviewUrls];
    files.splice(index, 1);
    urls.splice(index, 1);
    setImageFiles(files);
    setImagePreviewUrls(urls);
  };

  useEffect(() => {
    if (distanceValue > 0) {
      const distance = distanceValue / 1000;
      if (distance <= 10) {
        setTransportFee(3000);
      } else if (distance > 10 && distance <= 20) {
        setTransportFee(5000);
      } else if (distance > 20 && distance <= 30) {
        setTransportFee(10000);
      } else {
        setTransportFee(15000);
      }
    }
  }, [distanceValue]);

  const timestamp = serverTimestamp();

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "" || phone === "") {
      toast.error("Please fill all required fields");
      setSubmitting(false);
      return;
    }

    if (phone.length < 8) {
      toast.error("Please enter a valid phone number");
      setSubmitting(false);
      return;
    }

    if (customDescription === "") {
      toast.error("Please enter your customization preference");
      setSubmitting(false);
      return;
    }

    if (measurementMode === "") {
      toast.error("Please select a measurement mode");
      setSubmitting(false);
      return;
    }

    if (measurementMode === "user-location" && measurementLocation === "") {
      toast.error("Please enter your location");
      setSubmitting(false);
      return;
    }

    if (measurementMode === "user-location" && distanceValue === 0) {
      toast.error("Please select your location on the map");
      setSubmitting(false);
      return;
    }

    // Upload media files and get their download URLs
    const imageDownloadUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const imageRef = ref(storage, `custom-mades/${file.name}`);
        await uploadBytes(imageRef, file);
        const downloadUrl = await getDownloadURL(imageRef);
        return downloadUrl;
      })
    );

    const dataRef = doc(db, "custom-mades", customId);

    const customData = {
      customId,
      firstName,
      lastName,
      email,
      phone,
      customDescription,
      measurementMode,
      measurementLocation,
      distanceValue,
      helpfullLocationMessage,
      transportFee,
      images: imageDownloadUrls,
      status: "pending",
      denialReason: "",
      cancellationReason: "",
      cancelledBy: "",
      edited: false,
      editedOn: "",
      customMadePrice: 0,
      priceQuoteSent: false,
      requestForPriceChange: false,
      priceChangeRequest: "",
      userId: user.id || "",
      createdAt: timestamp,
      updatedAt: timestamp,
    };

    try {
      await setDoc(dataRef, customData);
      toast.success("Custom Made request submitted successfully");
      // navigate("/dashboard/custom-made");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error submitting request. Please try again");
    }
    setSubmitting(false);
    setCustomId("");
    setPhone("");
    setCustomDescription("");
    setMeasurementMode("");
    setMeasurementLocation("");
    setDistanceValue(0);
    setHelpfullLocationMessage("");
    setTransportFee(0);
    setImageFiles([]);
    setImagePreviewUrls([]);
  };

  return (
    <div className="mt-24 font-inter sm:mt-16 w-full">
      <Helmet>
        <title>Custom Made | Attelier</title>
        <meta name="description" content="Order for Custom Made designs" />
        <link rel=" canonical" href="/sell" />
      </Helmet>
      <div className="flex flex-row w-full">
        <div className="px-36 sm:px-5 p-10 w-full ">
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>

          <div className="my-10 text-black">
            <p className="text-center text-2xl ">Carefully Fill this form</p>
            <form className="" onSubmit={handleSubmit}>
              <label className="Aceh">Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-white border  w-1/2 "
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border   w-1/2  "
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <label className="Aceh">Email:</label>
              <br />
              <input
                type="email"
                placeholder="email"
                className="p-3 my-4 bg-white border  w-full"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="Aceh">Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="w-full my-4 text-3xl "
                required
                style={{ width: "100%" }}
                inputStyle={{ padding: "4px", fontSize: "15px", width: "100%" }}
                name="phone"
              />

              <br />

              <label className="Aceh">
                Write your customization Preference in details
              </label>
              <textarea
                className="w-full h-40 my-4   border bg-gray-100 p-5"
                name="customization"
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                rows={54}
                required
              ></textarea>

              <label className="Aceh">
                Prefered mode for taking measurement
              </label>
              <div className="flex flex-col my-4 gap-3 mb-5">
                <span className=" flex gap-3 ">
                  <input
                    id="virtual"
                    type="radio"
                    name="virtual"
                    checked={measurementMode === "virtual"}
                    className="radio border-gray-600"
                    value="virtual" // Set the value for the 'Virtual' option
                    onClick={(e) => setMeasurementMode(e.target.value)}
                  />
                  <label htmlFor="virtual">
                    {" "}
                    <p>Virtual</p>
                  </label>
                </span>
                {measurementMode === "virtual" && (
                  <div className="bg-stone-200 p-2 mx-4 text-stone-500">
                    Measurement will be done online via zoom or Google Meet.
                    Meeting link will be sent to your email.
                  </div>
                )}
                <span className="flex gap-3">
                  <input
                    id="onsite"
                    type="radio"
                    name="onsite"
                    className="radio border-gray-600"
                    checked={measurementMode === "onsite"}
                    value="onsite" // Set the value for the 'Virtual' option
                    onClick={(e) => setMeasurementMode(e.target.value)}
                  />
                  <label htmlFor="onsite">
                    <p>Onsite</p>
                  </label>
                </span>
                {measurementMode === "onsite" && (
                  <div className="bg-stone-200 p-2 mx-4 text-stone-500">
                    Visit our Office at 1 /5 Pastor Olu-olusakin Avenue
                    Alaguntan ajah, Lagos
                  </div>
                )}
                <span className=" flex gap-3">
                  <input
                    id="user-location"
                    type="radio"
                    name="user-location"
                    className="radio border-gray-600"
                    checked={measurementMode === "user-location"}
                    value="user-location"
                    onClick={(e) => setMeasurementMode(e.target.value)}
                  />
                  <label htmlFor="user-location">
                    {" "}
                    <p>At Your Location</p>
                  </label>
                </span>
                {measurementMode === "user-location" && (
                  <div className="bg-stone-200 p-2 mx-4 text-stone-500">
                    Measurement will be done at your location. Please provide
                    your address below.
                  </div>
                )}
                <span></span>
              </div>
              {measurementMode === "user-location" && (
                <>
                  <div className="pb-3 flex gap-2 flex-col">
                    <input
                      type="text"
                      placeholder="Your address"
                      className="p-3 my-4 bg-white border  w-full"
                      name="address"
                      value={measurementLocation}
                      onChange={(e) => setMeasurementLocation(e.target.value)}
                      readOnly
                    />
                    <textarea
                      placeholder="Helpful location description"
                      className="w-full bg-white rounded-md border border-gray-300 py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={helpfullLocationMessage}
                      onChange={(e) =>
                        setHelpfullLocationMessage(e.target.value)
                      }
                    />
                  </div>
                  <RouteMap
                    setDistanceValue={setDistanceValue}
                    setPickupLocation={setMeasurementLocation}
                    // setState={setDeliveryState}
                    // setCity={setDeliveryCity}
                    setAddress={setMeasurementLocation}
                    title="Select your location"
                  />
                </>
              )}
              <div className="flex flex-col gap-1.5 w-full">
                <label>
                  Upload inspirational image or images of the design you want to
                  customize (optional)
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    {imagePreviewUrls.map((url, index) => (
                      <div
                        key={index}
                        className="relative w-[100px] h-[100px] rounded-lg overflow-hidden"
                      >
                        <img
                          src={url}
                          alt="preview"
                          className="w-full h-full object-cover object-center"
                        />
                        <button
                          type="button"
                          onClick={() => cancelImage(index)}
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
                    onClick={openImagePicker}
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
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageFileChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
