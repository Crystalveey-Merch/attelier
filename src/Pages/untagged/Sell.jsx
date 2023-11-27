import React, { useState } from "react";
import "react-international-phone/style.css";
import UploadBox from "../CustomMade/UpdoadBox";
import "../CustomMade/upload.css";
import { db } from "../../firebase/auth";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../firebase/auth";
import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore";
import { PhoneInput } from "react-international-phone";
import { useFileUpload } from "react-firebase-file-upload";
import { Helmet } from "react-helmet-async";

const Refurblish = () => {
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);
  const userId = auth.currentUser.uid;

  const goBack = () => {
    window.history.back();
  };
  const handleRadioChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory,
    }));
  };
  const [formData, setFormData] = useState({
    category: "",
    description:"",
    phone: "",
    itemType: "",
    itemQuantity: "",
    itemPrice: "",
    itemIssues: "",
    images: [],
    accountNo: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      images: imageUrl,
    });
    const currentDate = new Date().toLocaleString();

    console.log(formData);
    try {
      // Initialize Firebase if you haven't already
      // Add the form data to Firestore
      await addDoc(collection(db, "sell"), {
        ...formData,
        images: downloadURL,
        dateTime: currentDate,
        userId: userId  

      });
      console.log(formData);
      // Reset the form after successful submission
      setFormData({
        category: "",
        description:"",
        phone: "",
        itemType: "",
        itemQuantity: "",
        itemPrice: "",
        itemIssues: "",
        images: [],
        accountNo: "",
      });
      onUploadComplete();

      // Display a success message or redirect the user
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form: ", error);
      // Handle error appropriately, e.g., show an error message to the user
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="mt-24 sm:mt-16 text-black Quicksand sm:px-5 relative  pt-20 sm:pt-5 px-40 py-5">
      <Helmet>
     <title>Sell Untagg| Attelier</title>
    <meta name='description' content="Sell your Cloth Items on Attelier "/>
    <link rel=" canonical"  href='/sell'/>
    </Helmet>
      <div className="hidden  absolute top-0  sm:block pt-5 " onClick={goBack}>
        <i className="fas fa-arrow-left text-black" />
      </div>

      <div className="my-5 text-black">
        {/* <h1 className="my-10 Aceh text-xl">Book a Session</h1> */}
        <form className="Quicksand" onSubmit={handleSubmit}>
          <div className="my-8 flex flex-col m-auto"></div>
          <label className="py-2 Aceh ">
            {" "}
            Choose appropriate Category
            <span className="text-red-500 m-auto">*</span>{" "}
          </label>
          <div className="flex gap-3 mb-5 text-sm">
            <span className="flex gap-3">
              <input
                type="radio"
                id="radio-1"
                name="radio-1"
                value="men"
                checked={category === "men"}
                onChange={handleRadioChange}
                className="radio radio-sm box-white border-gray-600"
              />
              <label htmlFor="radio-1">Men</label>
            </span>
            <span className="flex gap-3">
              <input
                type="radio"
                id="radio-2"
                name="radio-2"
                value="women"
                checked={category === "women"}
                onChange={handleRadioChange}
                className="radio radio-sm border-gray-600"
              />
              <label htmlFor="radio-2">Women</label>
            </span>
            <span className="flex gap-3">
              <input
                type="radio"
                id="radio-3"
                name="radio-3"
                value="children"
                checked={category === "children"}
                onChange={handleRadioChange}
                className="radio radio-sm border-gray-600"
              />
              <label htmlFor="radio-3">Children</label>
            </span>
          </div>

          <div className="flex flex-col my-8 gap-2 w-full m-auto  ">
            <label className="Aceh">
              Product Description <span className="text-red-500 m-auto">*</span>{" "}
            </label>

            <textarea
              type="text"
              name="description"
              onChange={handleInputChange}
              placeholder=""
              className="p-3  w-full h-20 bg-gray-100   rounded w-1/2 "
              required
            />
          </div>
          <div>
            <label className="Aceh">Number of Item(s)</label>
            <span className="text-red-500 m-auto">*</span> <br />
            <input
              type="number"
              name="itemQuantity"
              value={formData.itemQuantity} // Set the value from the state
              onChange={handleInputChange}
              className="p-3 my-4 bg-white border  w-full"
            ></input>
          </div>

          <div className="flex flex-col my-5 gap-2 w-full m-auto ">
            <label className=" Aceh  ">
              Fair pricing{" "}
              <span className="text-gray-300 text-xs">
                ( Write the price of your product){" "}
                <span className="text-red-500 m-auto">*</span>{" "}
              </span>
            </label>
            <input
              type="number"
              name="itemPrice"
              value={formData.itemPrice} // Set the value from the state
              onChange={handleInputChange}
              className="sm:w-full  w-1/2 bg-white border  -black p-2"
            ></input>
          </div>

          <br></br>
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
          <label className="Aceh">
            Account Details <span className="text-red-500 m-auto">*</span>{" "}
          </label>
          <br></br>
          <textarea
            type="text"
            name="accountNo"
            value={formData.accountNo} // Set the value from the state
            onChange={handleInputChange}
            className="sm:w-full w-1/2 bg-white border my-3  p-2"
            required
          ></textarea>

          <div className="flex flex-col gap-4 w-full m-auto border bg-gray-100 p-2 ">
            <br></br>
            <label className="Aceh">
              Add Photos{" "}
              <span className="text-gray-300 text-xs">
                .jpg .gif and .png.10MB max
              </span>{" "}
              <span className="text-red-500 m-auto">*</span>{" "}
            </label>
            <div tabIndex={0} className="collapse bg-white">
              <input type="checkbox" />
              <div className="collapse-title text-sky-500 underline text-sm font-medium">
                Clothe Guidelines
              </div>
              <div className="collapse-content">
                <p className="text-sm">
                  All clothing items are required to be in excellent condition
                  (damaged items are not allowed). If your clothing item does
                  not meet the required standard, you can either sell another
                  item in excellent condition or opt for the refurblishing
                  service rendered by the company
                </p>
              </div>
            </div>
            <div tabIndex={1} className="collapse bg-white">
              <input type="checkbox" />
              <div className=" text-sm text-sky-500 underline collapse-title  font-medium">
                Photo Requirement
              </div>
              <div className="collapse-content">
                <ul className="text-sm list-decimal px-2 py-3 flex flex-col gap-3">
                  <li>
                    Do not take a photograph or scan a picture of item(s).
                  </li>
                  <li>
                    Must be taken within the last 7 days, showing current
                    appearance.{" "}
                  </li>
                  <li>The size of the photo should be 2 by 2 inches.</li>
                  <li>
                    The photo must be in colour. Must show full image of
                    item(s), front & back view on a plain white or off-white
                    background.{" "}
                  </li>
                  <li>Image must be clear & crisp</li>
                  <li>Do not let foreign objects obstruct image of item(s) </li>
                  <li>An example is shown below </li>
                </ul>
                <img src="/Images/Avatar/man-two.png" className="w-40" />
              </div>
            </div>

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
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
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
                    <div
                      onClick={() => onRemove(file)}
                      className="text-red-500"
                    >
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
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full transition ease-in-out duration-300"
                    style={{ width: `${progress[key]}%` }}
                  >
                    {" "}
                    {progress[key]}%
                  </div>
                </div>
              ))}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {isCompleted && (
              <div className="text-green-500">Upload Complete</div>
            )}
            <div className="btn" onClick={onUpload}>
              Upload
            </div>
          </div>

          <button
            type="Submit"
            className="bg-black flex w-40 my-8 px-5 py-2 justify-center text-white m-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Refurblish;
