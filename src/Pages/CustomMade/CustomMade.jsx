import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "./UpdoadBox";
import "./upload.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { auth, db, storage } from "../../firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const CustomMade = () => {
  const goBack = () => {
    window.history.back();
  };
  const [phone, setPhone] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    customization: "",
    measurementMode: "",
    images: [], // Default to 'Virtual'
    // ... other fields
  });
  const [selectedMeasuremennt, setSelectedMeasurement] = useState("");

  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);

  const [progressList, setProgressList] = useState([]); // Array to track progress
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (name === "phone") {
      setPhone(value); // Update the 'phone' state separately
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    console.log(value)
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  
  const handleImagesUpload = (e) => {
    const files = e.target.files;
    const newImages = [];
    const supportedFormats = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
  
    for (let i = 0; i < files.length; i++) {
      if (newImages.length < 4) { // Check the maximum limit
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
     handleImageUpload(images)
console.log(...images)  
  };
  
 
 

  const handleImageUpload = () => {
    const urls = [];
    const supportedFormats = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
  
    const uploadPromises = images.map(async (file) => {
      if (supportedFormats.includes(file.type)) {
        const storageRef = ref(storage, file.name);
  
        try {
          const snapshot = await uploadBytesResumable(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          urls.push(downloadURL);
        } catch (error) {
          console.error('Error uploading image: ', error);
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
  
  // Ensure that `files` is defined before calling `handleImageUpload`
 
  








  const handleMeasurementModeChange = (event) => {
    setSelectedMeasurement(event.target.value);
    setForm({
      ...form,
      measurementMode: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   await handleImageUpload(images)
    setForm({
      ...form,
      images: imageUrl,
    });
   
    // setLoading(true)
      try {

        const profileDocRef = doc(db, "custommade", form.phone); // Assuming you have a "profiles" collection in Firebase
        await setDoc(profileDocRef, form, { merge: true });
        
        // setLoading(false)
        console.log("Profile updated successfully!");
        toast.success("Profile updated successfully!");

        // setLoading(false)
        // Optionally, display a success message or navigate to a different page
    } catch (error) {
        console.error("Error updating profile: ", error);
        // Display an error message to the user
    }

    console.log(form);
    // Perform any other actions, like sending data to a server.
  };

  return (
    <div className="mt-24 sm:mt-16 AcehLight w-full">
      <div className="flex flex-row w-full">
        <div className="px-36 sm:px-5 p-10 w-full ">
          <div className="hidden   sm:block pt-5 " onClick={goBack}>
            <i className="fas fa-arrow-left text-black" />
          </div>

          <div className="my-10 text-black">
            <p className="text-center text-2xl ">Carefully Fill this form</p>
            <form className="AcehLight" onSubmit={handleSubmit}>
              <label className="Aceh">Name:</label>
              <div className="flex flex-row gap-4 w-full m-auto  ">
                <input
                  type="text"
                  placeholder="first name"
                  className="p-3 my-4 bg-white border  w-1/2 "
                  name="firstName"
                  required
                  value={form.firstName}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 my-4 bg-white border   w-1/2  "
                  name="lastName"
                  required
                  value={form.lastName}
                  onChange={handleInputChange}
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
                value={form.email}
                onChange={handleInputChange}
              />
              <br />
              <label className="Aceh">Phone number:</label>
              <br />
              <PhoneInput
                defaultCountry="ng"
                value={phone}
                onChange={(phone) => setForm({ ...form, phone })}
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
                value={form.customization}
                onChange={handleInputChange}
              ></textarea>

              <label className="Aceh">
                Prefered mode for taking measurement
              </label>
              <div className="flex flex-col my-4 gap-3 mb-5">
                <span className=" flex gap-3 ">
                  <input
                  id="virtual"
                    type="radio"
                    name="radio-1"
                    required
                    checked={selectedMeasuremennt === "Virtual"}
                    className="radio border-gray-600"
                    value="Virtual" // Set the value for the 'Virtual' option
                    onClick={handleMeasurementModeChange}
                  />
                 <label htmlFor="virtual"> <p  >Virtual</p></label>
                 
                
                </span>
                {selectedMeasuremennt ==="Virtual" && (
                  <div  className="bg-stone-200 p-2 mx-4 text-stone-500">
                  Measurement will be done online via  zoom or Google Meet. Meeting link will be sent to your email.
                  </div>
                 ) }
                <span className=" flex gap-3">
                  <input
                  id="onsite"
                    type="radio"
                    name="radio-1"
                    className="radio border-gray-600"
                    required
                    checked={selectedMeasuremennt === "Onsite"}

                    value="Onsite" // Set the value for the 'Virtual' option
                    onClick={handleMeasurementModeChange}
                  />
                 <label htmlFor="onsite"><p>Onsite</p></label>
                </span>
                {selectedMeasuremennt ==="Onsite" && (
                  <div  className="bg-stone-200 p-2 mx-4 text-stone-500">
                 Visit our  Office at
                  </div>
                 )}
                <span className=" flex gap-3">
                  <input
                  id="house"
                    type="radio"
                    name="radio-1"
                    className="radio border-gray-600"
                    checked={selectedMeasuremennt === "Specific Location"}

                    required
                    value="Specific Location" // Set the value for the 'Virtual' option
                    onClick={handleMeasurementModeChange}
                  />
                  <label htmlFor="house"> <p>Specific Location</p></label>
                </span>
                {selectedMeasuremennt ==="Specific Location" && (
                  <div  className="bg-stone-200 p-2 mx-4 text-stone-500">
                 Ensure you drop your exact Address below 
                  </div>
                 ) }
                <span>

                </span>
              </div>
              <label className="Aceh">Address</label>
              <br />
              <input
                type="text"
                placeholder="Your address"
                className="p-3 my-4 bg-white border  w-full"
                name="address"
                required
                value={form.address}
                onChange={handleInputChange}
              />
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
                  <div className="image-preview w-40 h-40 sm:w-20 sm:h-20    " key={index}>
                    <img src={image} alt={`Preview ${index}`} className="w-full h-full rounded-full" />
                    <button
                      className="remove-image-button text-red-500"
                      onClick={() => removeImage(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <p className="my-6">Max File size: 3mb, Max file: 4</p>
          
          <button
            type="submit"
            className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded"
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

export default CustomMade;
