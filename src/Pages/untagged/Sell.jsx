import React, { useState } from "react";
import "react-international-phone/style.css";
import UploadBox from "../CustomMade/UpdoadBox";
import "../CustomMade/upload.css";
import { db } from "../../firebase/auth";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { PhoneInput } from "react-international-phone";


const Refurblish = () => {
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);

  const goBack = () => {
    window.history.back();
  };
  const handleRadioChange = (event) => {
    setCategory(event.target.value);
   console.log(category)
    setFormData({
      ...formData,
      category: category,
    });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    category: "",
    lastName: "",
    email: "",
    phone: "",
    itemType: "",
    itemQuantity: "",
    itemPrice:"",
    sendMethod: "",
    receiveMethod: "",
    itemIssues: "",
    images: [],
    accountNo:"",
  });

  const handlePhoneChange = (value) => {
    // Update the 'phone' field in the formData state
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleImagesUpload = (e) => {
    const files = e.target.files;
    const newImages = [];
    const supportedFormats = [
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "image/png",
    ];

    for (let i = 0; i < files.length; i++) {
      if (newImages.length < 4) {
        // Check the maximum limit
        const file = files[i];
        if (supportedFormats.includes(file.type)) {
          newImages.push(file); // Store the file itself in the newImages array
        } else {
          alert(`Unsupported file format: ${file.type}`);
        }
      } else {
        alert("Maximum limit of 4 images reached.");
        break;
      }
    }
    // Set images in state and upload to Firebase Storage
    setImages([...images, ...newImages]);
    handleImageUpload(images);
    console.log(...images);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = () => {
    const urls = [];
    const supportedFormats = [
      "image/jpeg",
      "image/jpg",
      "image/gif",
      "image/png",
    ];

    const uploadPromises = images.map(async (file) => {
      if (supportedFormats.includes(file.type)) {
        const storageRef = ref(storage, file.name);

        try {
          const snapshot = await uploadBytesResumable(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          urls.push(downloadURL);
        } catch (error) {
          console.error("Error uploading image: ", error);
        }
      } else {
        alert(`Unsupported file format: ${file.type}`);
      }
    });

    Promise.all(uploadPromises)
      .then(() => {
        toast.success("All images uploaded successfully");
        // Store the download URLs in your state or perform any other desired actions
        setImageUrl(urls);
      })
      .catch((error) => {
        console.error("Error uploading images:", error);
        toast.error("Failed to upload images");
      });
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleImageUpload(images);
    setFormData({
      ...formData,
      images: imageUrl,
    });
    console.log(formData);
    try {
      // Initialize Firebase if you haven't already
      // Add the form data to Firestore
      const profileDocRef = doc(db, "sell", formData.phone); // Assuming you have a "profiles" collection in Firebase
      await setDoc(profileDocRef, formData);
      console.log(formData);
      // Reset the form after successful submission
      setFormData({
        firstName: "",
        category: "",
        lastName: "",
        email: "",
        phone: "",
        itemType: "",
        itemQuantity: "",
        itemPrice:"",
        sendMethod: "",
        receiveMethod: "",
        itemIssues: "",
        images: [],
        accountNo:"",
      });

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
          <div className="flex  gap-3 mb-5 text-sm">
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                value="men"
                    checked={category === "men"}
                    onChange={handleRadioChange}
                className="radio radio-sm box-white border-gray-600"
              />
              <p>Men</p>
            </span>
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                value="women"
                    checked={category === "women"}
                    onChange={handleRadioChange}
                className="radio radio-sm border-gray-600"
              />
              <p>Women</p>
            </span>
            <span className=" flex gap-3">
              <input
                type="radio"
                name="radio-1"
                value="children"
                    checked={category === "children"}
                    onChange={handleRadioChange}
                className="radio radio-sm border-gray-600"
              />
              <p>Children</p>
            </span>
          </div>

          <div className="flex flex-col my-8 gap-2 w-full m-auto  ">
            <label className="Aceh">
              Product Description <span className="text-red-500 m-auto">*</span>{" "}
            </label>

            <textarea
              type="text"
              placeholder=""
              
              className="p-3  w-full h-20 bg-gray-100   rounded w-1/2 "
              required
            />
          </div>
          <div>
            <label className="Aceh">Number of Item(s)</label>
            <span className="text-red-500 m-auto">*</span>{" "}
            <br />
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
                (damaged items are not allowed). If your clothing item does not
                meet the required standard, you can either sell another item in
                excellent condition or opt for the refurblishing service
                rendered by the company
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
                <li>Do not take a photograph or scan a picture of item(s).</li>
                <li>
                  Must be taken within the last 7 days, showing current
                  appearance.{" "}
                </li>
                <li>The size of the photo should be 2 by 2 inches.</li>
                <li>
                  The photo must be in colour. Must show full image of item(s),
                  front & back view on a plain white or off-white background.{" "}
                </li>
                <li>Image must be clear & crisp</li>
                <li>Do not let foreign objects obstruct image of item(s) </li>
                <li>An example is shown below </li>
              </ul>
              <img src="/Images/Avatar/man-two.png" className="w-40" />
            </div>
          </div>
         
            <div className="upload-boxes flex gap-2 ">
            <div className="upload-boxes flex gap-4 my-5">
                <div className="upload-box relative ">
                  <label
                    htmlFor="image-upload"
                    className="upload-icon text-sm z-20 h-full w-full  flex m-auto ipointer "
                  >
                    <span className="m-auto text-sm">+ Add Images</span>
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept=".jpeg, .jpg, .gif, .png"
                    onChange={handleImagesUpload}
                    style={{ display: "none" }}
                    multiple // Allow multiple file selection
                  />
                </div>
                <div className="image-preview-container flex m-5  flex-wrap gap-3">
                  {imageUrl.map((image, index) => (
                    <div
                      className="image-preview w-40 h-40 sm:w-20 sm:h-20    "
                      key={index}
                    >
                      <img
                        src={image}
                        alt={`Preview ${index}`}
                        className="w-full h-full rounded-full"
                      />
                      <button
                        className="remove-image-button text-red-500"
                        onClick={() => removeImage(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>  
                </div>
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
