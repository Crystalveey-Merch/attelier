import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "../../CustomMade/UpdoadBox";
import "../../CustomMade/upload.css";
import { db } from "../../../firebase/auth";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../../firebase/auth";
import { doc, getDoc, setDoc,addDoc,collection } from "firebase/firestore";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useFileUpload } from "react-firebase-file-upload";

const RefurblishP3 = () => {
  const goBack = () => {
    window.history.back();
  };

  const [phone, setPhone] = useState("");
  const [sendingOption, setSendingOption] = useState("");
  const [receiveOption, setReceiveOption] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSendingOption(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      sendMethod: value,
    }));
  };
  
  const handleRadioChange2 = (event) => {
    const value = event.target.value;
    setReceiveOption(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      receiveMethod: value,
    }));
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    itemType: "",
    itemQuantity: "",
    sendMethod: "",
    receiveMethod: "",
    itemIssues: "",
    pricing: "",
    accountDetails: "",
    images: [],
  });
  const handlePhoneChange = (value) => {
    // Update the 'phone' field in the formData state
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  const _input = useFileUpload(storage, {
    // the type of files to upload
    accept: "image/png, image/jpeg, image/jpg, image/webp",
    // whether to accept multiple files or just one
    multiple: true,
    // where you want to save the uploaded files in firebase storage
    path: `product-images`,
  });
  const {
    /** Input type */
    type,
    /** Accepted file types (e.g. "image/png, image/jpeg") */
    accept,
    /** Allow multiple files to be selected */
    multiple,
    /** Disable input */
    disabled,
    /** onChange event to set selected files */
    onChange,
    /** Selected files */
    files,
    /** Loading state */
    loading,
    /** Error message */
    error,
    /** Upload progress for each file */
    progress,
    /** Upload status for each file */
    status,
    /** Download URL for each file */
    downloadURL,
    /** Upload complete state */
    isCompleted,
    /** Upload files to firebase storage */
    onUpload,
    /** Reset states when finished uploading */
    onUploadComplete,
    /** Remove file from selected files */
    onRemove,
  } = _input;


  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    console.log(formData);
    const currentDate = new Date().toLocaleString();

    try {
      // Initialize Firebase if you haven't already
      // Add the form data to Firestore
      await addDoc(collection(db, "refurblish"), {
        ...formData,
        images: downloadURL,
        dateTime: currentDate,

      });
      // Reset the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        itemType: "",
        itemQuantity: "",
        sendMethod: "",
        receiveMethod: "",
        itemIssues: "",
        pricing: "",
        accountDetails: "",
        images: [],
      });
      onUploadComplete()
      // Display a success message or redirect the user
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Handle error appropriately, e.g., show an error message to the user
      alert("An error occurred while submitting the form.");
    }
  };
  return (
    <div className="mt-24 sm:mt-16 AcehLight w-full">
      <div className="flex flex-row w-full">
        <div className="px-36 sm:px-1 p-10 w-full ">
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>
          <div className="relative m-auto justify-center flex">
            <img src="/Images/icons/stand1.jpeg" className="sm:hidden " />
            <img
              src="/Images/icons/stand.jpeg"
              className="hidden sm:block "
            ></img>
            <div className=" absolute top-48 left-5 text-white">
              <p className="text-xl ">Wear it. Love it. Refurbish it.</p>
              <p className="sm:text-4xl text-6xl Aceh w-64">
                Get the Price For Refurbishing
              </p>
            </div>
          </div>
          <div className="sm:px-5">
            <h1 className="sm:text-base text-xl AcehLight text-center my-2 leading-10 text-black">
              Fill all the required information and our refurbish team will get
              back to you within 3 buisness days with the pricing. To send more
              images, contact us directly at{" "}
              <a
                href="mailto:office.crystalveey@gmail.com"
                className="text-sky-500"
              >
                {" "}
                office.crystalveey@gmail.com
              </a>{" "}
              Thank you!{" "}
            </h1>
          </div>

          <div className="my-10 sm:px-5 text-black">
            <form className="AcehLight px-20 sm:px-0" onSubmit={handleSubmit}>
              <label className="Aceh"> Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  name="firstName"
                  type="text"
                  placeholder="first name"
                  value={formData.firstName} // Set the value from the state
                  onChange={handleInputChange}
                  className="p-3 my-4 bg-white border   w-1/2 "
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName} // Set the value from the state
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border   w-1/2  "
                />
              </div>
              <div></div>
              <label className="Aceh">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                value={formData.email} // Set the value from the state
                onChange={handleInputChange}
                placeholder="email"
                className="p-3 my-4 bg-white border  w-full"
              />
              <br />
              <label className="Aceh">Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                name="phone"
                value={formData.phone}
                // onChange={(phone) => setPhone(phone)}
                onChange={handlePhoneChange}
                className="w-full my-4 text-xl  "
                style={{ width: "100%", height: "60px" }}
              />

              <div>
                <label className="Aceh">
                  Type of item (shirt, top, trouser, gown, etc )
                </label>
                <br />
                <input
                  type="text"
                  name="itemType"
                  value={formData.itemType} // Set the value from the state
                  onChange={handleInputChange}
                  className="p-3 my-4 bg-white border  w-full"
                ></input>
              </div>
              <div>
                <label className="Aceh">Number of Item(s)</label>
                <br />
                <input
                  type="number"
                  name="itemQuantity"
                  value={formData.itemQuantity} // Set the value from the state
                  onChange={handleInputChange}
                  className="p-3 my-4 bg-white border  w-full"
                ></input>
              </div>
              <br />
              <label className="Aceh">
                How will you like to send the item to us ?
              </label>
              <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    id="radio-2"

                    name="radio-2"
                    value="pick-up"
                    checked={sendingOption === "pick-up"}
                    onChange={handleRadioChange}
                    className="radio border-gray-600"
                  />
                  <p> Drop off at the Refurblish centre</p>
                </span>
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    id="radio-1"
                    name="radio-1"
                    value="drop-off"
                    checked={sendingOption === "drop-off"}
                    onChange={handleRadioChange}
                    className="radio border-gray-600"
                  />
                  <p>Pick up from my address</p>
                </span>
              </div>

              <label className="Aceh">
                How will you receive your refurbish item?{" "}
              </label>
              <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    id="radio-3"
                    name="radio-3"
                    checked={receiveOption === "pick-up"}
                    onChange={handleRadioChange2}
                    value="pick-up"
                    className="radio border-gray-600"
                  />
                  <label htmlFor="radio-3">Deliver to my address </label>
                </span>
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    id="radio-4"
                    name="radio-4"
                    value="deliver"
                    checked={receiveOption === "deliver"}
                    onChange={handleRadioChange2}
                    className="radio border-gray-600"
                  />
                  <label htmlFor="radio-4">
                    Pick up from the Refurbish centre
                  </label>
                </span>
              </div>

              <label className="Aceh">
                Please describe issues with your item in details
              </label>
              <textarea
                name="itemIssues"
                className="w-full h-40  bg-white border  p-5"
                value={formData.itemIssues} // Set the value from the state
                onChange={handleInputChange}
              ></textarea>

              <br></br>
              <label className="Aceh">
                Account Details <span className="text-red-500 m-auto">*</span>{" "}
              </label>
              <br></br>
              <input
                type="text"
                name="accountDetails"
                value={formData.accountDetails} // Set the value from the state
                onChange={handleInputChange}
                className="sm:w-full w-1/2 bg-white border my-3  p-2"
                required
              ></input>
              <br></br>
              <label className="Aceh">
                Upload clear images of each item, specifically the problem area
                that needs refurbishing
              </label>
              <div className="flex items-center justify-center w-full p-5">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              className="hidden"
              type={type}
              accept={accept}
              multiple={multiple}
              disabled={disabled}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="flex gap-4 my-4">
          {files &&
            files.map((file, index) => (
              <div key={index} className="">
                {file.type?.includes("image") && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    className="rounded-full"
                  />
                )}
                <div onClick={() => onRemove(file)} className="text-red-500">
                  Remove
                </div>
              </div>
            ))}
        </div>
        {progress &&
          Object.keys(progress).map((key, index) => (
            <div
              key={index}
              className="w-full bg-gray-200 rounded-full dark:bg-gray-700"
            >
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition duration-400 ease-in-out"
                style={{ width: `${progress[key]}%` }}
              >
                {" "}
                {progress[key]}%
              </div>
            </div>
          ))}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {isCompleted && <div className="text-green-500">Upload Complete</div>}
        <div className="btn" onClick={onUpload}>
          Upload
        </div>
              <button
                type="submit"
                className=" btn p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded"
                disabled={!isCompleted }
              >
                Submit{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefurblishP3;
