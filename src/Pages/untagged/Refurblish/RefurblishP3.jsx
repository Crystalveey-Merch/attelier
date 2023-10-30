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
import { doc, getDoc, setDoc } from "firebase/firestore";

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
    setSendingOption(event.target.value);
   
    setFormData({
      ...formData,
      sendMethod: sendingOption,
    });
  };
  const handleRadioChange2 = (event) => {
    
    setReceiveOption(event.target.value);
    setFormData({
      ...formData,
      receiveMethod: receiveOption,
    });
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
      const profileDocRef = doc(db, "refurblish", formData.phone); // Assuming you have a "profiles" collection in Firebase
      await setDoc(profileDocRef, formData);
      console.log(formData);
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
            <form className="AcehLight" onSubmit={handleSubmit}>
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
                    name="radio-2"
                    value="drop-off"
                    checked={sendingOption === "drop-off"}
                    onChange={handleRadioChange}
                    className="radio border-gray-600"
                  />
                  <p>Drop off at the Refurblish centre</p>
                </span>
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    name="radio-2"
                    value="pick-up"
                    checked={sendingOption === "pick-up"}
                    onChange={handleRadioChange}
                    className="radio border-gray-600"
                  />
                  <p>Pick up from my address</p>
                </span>
              </div>

              <label className="Aceh">
                How will receive your refurbish item?{" "}
              </label>
              <div className="flex flex-col gap-3 mb-5">
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    name="radio-1"
                    checked={receiveOption === "pick-up"}
                    onChange={handleRadioChange2}
                    value="pick-up"
                    className="radio border-gray-600"
                  />
                  <p>- Pick up from the Refurbish centre</p>
                </span>
                <span className=" flex gap-3">
                  <input
                    type="radio"
                    name="radio-1"
                    value="deliver"
                    checked={receiveOption === "deliver"}
                    onChange={handleRadioChange2}
                    className="radio border-gray-600"
                  />
                  <p>Deliver to my address</p>
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
              <p className="my-2">Max File size: 3mb, Max file: 4</p>
              <button className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded">
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
