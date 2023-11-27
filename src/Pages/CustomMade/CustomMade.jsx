import custom from "/Images/Fashionista/custom.jpeg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UploadBox from "./UpdoadBox";
import "./upload.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { auth, db, storage } from "../../firebase/auth";
import { doc, getDoc, setDoc,addDoc,collection } from "firebase/firestore";
import { useFileUpload } from "react-firebase-file-upload";
import { Helmet } from "react-helmet-async";

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

  // const [loading, setLoading] = useState(false);
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


  const handleMeasurementModeChange = (event) => {
    setSelectedMeasurement(event.target.value);
    setForm({
      ...form,
      measurementMode: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentDate = new Date().toLocaleString();

    // setLoading(true)
      try {
        await addDoc(collection(db, "custommade"), {     

          ...form,
            images: downloadURL,
            dateTime: currentDate,

          });

        console.log("Profile submitted successfully!");
        toast.success("form submitted successfully!");

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
     <Helmet>
     <title>Custom Made| Attelier</title>
    <meta name='description' content="Order for Custom Made designs"/>
    <link rel=" canonical"  href='/sell'/>
    </Helmet>
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
              <label>Upload clear images of each item, specifically the problem area that needs refurbishing</label>
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
        {isCompleted && <div className="text-green-500">Upload Complete</div>}
        <div className="btn" onClick={onUpload}>
          Upload
        </div>
          
          <button
            type="submit"
            className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded" 
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

export default CustomMade;
