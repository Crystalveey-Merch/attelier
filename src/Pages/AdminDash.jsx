import { useState } from "react";
import UploadBox from "./CustomMade/UpdoadBox";
import "./CustomMade/upload.css";
import { db } from "../firebase/auth";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Multiselect from "multiselect-react-dropdown";
import { TagsInput } from "react-tag-input-component";
import { v4 as uuidv4 } from 'uuid';

const AdminDash = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [sendingOption, setSendingOption] = useState("");
  const [receiveOption, setReceiveOption] = useState("");
const [fabricType, setFabricType] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorInput, setColorInput] = useState("");
  const [descriptionInput, setDesctiptionInput] = useState("");
  const [description, setDescription] = useState([]);


  const handleTags = (fabricType = []) => {
    setFormData({ ...formData, fabricType });
  };
  const handleDesctiptionchange = (event) => {
    setDesctiptionInput(event.target.value);
    setFormData({
        ...formData,
        description: [...description, descriptionInput],
      });
  };
  const addDesctiption = () => {
    setDescription([...description, descriptionInput]);
    setDesctiptionInput("");

    toast.success("Description Added");
  };
  const removeDesctiption = (i) => {
    const updatedDescription = [...description];
    updatedDescription.splice(i, 1);
    setDescription(updatedDescription);
  };

  const handleColorInputChange = (e) => {
    const inputValue = e.target.value;
  setColorInput(inputValue);
  setFormData({
    ...formData,
    color: [...colors, inputValue],
  });
  };
  const addColor = () => {
    if (colorInput.match(/^#[0-9A-fa-f]{6}$/)) {
      setColors([...colors, colorInput]);
      setColorInput("");
    } else {
      toast.error(
        "Invalid color Format. Please use a valid hexadecimal color code (e.g. #FF0000)."
      );
    }
  };
  const removeColorInput = (index) => {
    const updatedColor = [...colors.slice(0, index), ...colors.slice(index + 1)];

    setColors(updatedColor);
  };
// console.log(colors)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    color: [],
    fabricType: [],
    newarrival: "",
    collection: "",
    imgSrc: [],
    description: [],
    size: [],
  });
console.log(formData)
  const handleCategoryChange = (e) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleCollectionChange = (e) => {
    setFormData({
      ...formData,
      collection: e.target.value,
    });
  };
  console.log(selectedSize.map((option) => option.key));


  const handleSelect = (selectedSizes) => {
    setSelectedSize(selectedSizes.map((option) => option.key));
    setFormData({
        ...formData,
        size: selectedSize,
      });
      
  };
//   console.log(selectedSize.map((option) => option.key));

  const handleRemove = (removedOption) => {
    const updatedOptions = selectedSize.filter(
      (option) => option.key !== removedOption.key
    );
    setSelectedSize(updatedOptions);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value});
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
        setFormData({
          ...formData,
          imgSrc: imageUrl,
        });
       
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
    const id = uuidv4();
    e.preventDefault();

  
    console.log(formData);
    try {
      // Initialize Firebase if you haven't already
      // Add the form data to Firestore
      const profileDocRef = doc(db, "products", id); // Assuming you have a "profiles" collection in Firebase
      await setDoc(profileDocRef, formData);
      console.log(formData);
      // Reset the form after successful submission
      setFormData({
        name: "",
        category: "",
        price: "",
        color: [],
        fabricType: [],
        newarrival: "",
        collection: "",
        imgSrc: [],
        description: [],
        size: [],
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
    <div className="mt-24 sm:mt-16 p-2 py-20 px-40 sm:px-5">
      <div>
        <h1 className="text-center text-xl my-10">Product Upload</h1>
      </div>
      <form className="AcehLight" onSubmit={handleSubmit}>
        <label className="Aceh">Product Name</label>
        <div className="flex flex-row gap-4 w-full m-auto  ">
          <input
            name="name"
            type="text"
            placeholder="Product name"
            value={formData.name} // Set the value from the state
            onChange={handleInputChange}
            className="p-3 my-4 bg-white border   w-full"
          />
        </div>
        <div></div>
        <label className="Aceh">Category</label>
        <br />
        <select
          className="  p-3 my-4 bg-white border   w-60"
          value={formData.category}
          onChange={handleCategoryChange}
        >
          <option disabled className="p-3 my-4 bg-white border px-10 ">
            Select a Category
          </option>
          <option value="Clothing" className="p-3 my-4 bg-white border ">
            Clothing
          </option>
          <option value="Two-pieces" className="p-3 my-4 bg-white border ">
            Two-pieces
          </option>
          <option value="Shoes" className="p-3 my-4 bg-white border ">
            Shoes
          </option>
          <option value="Accessories" className="p-3 my-4 bg-white border ">
            Accessories
          </option>
          <option value="Hoodies" className="p-3 my-4 bg-white border ">
            Hoodies
          </option>
          <option value="Merch" className="p-3 my-4 bg-white border ">
            Merch
          </option>
        </select>

        <br />
        <label className="Aceh">Collection</label>
        <br />
        <select
          className="  p-3 my-4 bg-white border   w-60"
          value={formData.collection}
          onChange={handleCollectionChange}
        >
          <option disabled className="p-3 my-4 bg-white border ">
            Select a Collection
          </option>
          <option value="Party Wears" className="p-3 my-4 bg-white border ">
            Party Wears
          </option>
          <option value="Comfort Wears" className="p-3 my-4 bg-white border ">
            Comfort wears
          </option>
          <option value="Resort Wears" className="p-3 my-4 bg-white border ">
            Resort Wears
          </option>
          <option value="Occasion Wears" className="p-3 my-4 bg-white border ">
            Occasion Wears
          </option>
          <option
            value="Afrocentric Wears"
            className="p-3 my-4 bg-white border "
          >
            Afrocentric Wears
          </option>
          <option value="Formal Wears" className="p-3 my-4 bg-white border ">
            Formal wears
          </option>
        </select>
        <br></br>
        <label className="Aceh">Select Available Size</label>

        <Multiselect
          placeholder="Select  sizes"
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={handleRemove}
          onSearch={function noRefCheck() {}}
          onSelect={handleSelect}
          className="mb-2  my-5"
          options={[
            {
              key: "6",
            },
            {
              key: "8",
            },
            {
              key: "10",
            },
            {
              key: "12",
            },
            {
              key: "14",
            },
            {
              key: "16",
            },
            {
              key: "18",
            },
            {
              key: "20",
            },
            {
              key: "S",
            },
            {
              key: "M",
            },
            {
              key: "L",
            },
            {
              key: "XL",
            },
            {
              key: "XXL",
            },
            {
              key: "1-2yr",
            },
            {
              key: "3-4yr",
            },
            {
              key: "5-6yr",
            },
            {
              key: "7-8yr",
            },
          ]}
          showCheckbox
        />

        <label className="Aceh my-2">Select Available Colors</label>
        <br></br>
        <div className="flex    my-4">
          <div className="border flex w-80 justify-between px-4">
            <input
              type="text"
              className="p-3"
              placeholder="Enter a Color"
              value={colorInput}
              onChange={handleColorInputChange}
            ></input>
            <input
              onChange={handleColorInputChange}
              type="color"
              value={colorInput}
              className="my-auto "
              multiple
            ></input>
          </div>
          <button type="button" className="btn mx-2" onClick={addColor}>
            Add Color
          </button>
        </div>

        <ul className="flex flex-wrap gap-5 p-2 ">
          {colors.map((color, i) => (
            <li key={i} style={{ backgroundColor: `${color}` }} className="p-2">
              <span className="relative text-gray-300">
                {color}

                <i
                  onClick={()=>removeColorInput(i)}
                  className="fas fa-xmark px-2 hover:text-md cursor-pointer"
                />
              </span>
            </li>
          ))}
        </ul>
        <label className="Aceh">Price</label>
        <div className="flex flex-row gap-4 w-full m-auto  ">
          <input
            name="price"
            type="text"
            placeholder="Product Price (N)"
            value={formData.price} // Set the value from the state
            onChange={handleInputChange}
            className="p-3 my-4 bg-white border   w-full"
          />
        </div>
        <label className="Aceh my-10">Fabric Type (e.g. silk, cotton)</label>

        <TagsInput
              value={fabricType}
              name="Tags"
              onChange={handleTags}
              required
              editable
              placeHolder="Enter fabric type"
              classNames="text-black  w-full text-xl rti--container my-5 "
            />{" "} 
        <label className="Aceh">Product Description</label>
        <div className="flex my-4  flex-row gap-4 m-auto   ">
          <input
            name="description"
            type="text"
            placeholder="Description"
            value={descriptionInput} // Set the value from the state
            onChange={handleDesctiptionchange}
            className="p-3 bg-white border   w-96"
          />
          <button type="button" className="btn text-xl" onClick={addDesctiption}>
            +
          </button>
        </div>
        <ul className="flex flex-col gap-5 my-4">
          {description.map((description, i) => (
            <li key={i} className="list-disc">
              <span className="w-96 bg-gray-200 p-3 ">
                {description}
                <i
                  onClick={removeDesctiption}
                  className="fas fa-xmark px-2 hover:text-md cursor-pointer  m-auto"
                />
              </span>
            </li>
          ))}
        </ul>
        <div>
          <label className="Aceh">New Arrival (True/False)</label>
          <br />
          <select
            type="text"
            name="newarrival"
            // value={formData.itemType} // Set the value from the state
            onChange={handleInputChange}
            className="p-3 my-4 bg-white border  w-96"
          >
            <option disabled className="text-gray-500">
              Select
            </option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
        </div>

        <br></br>
        <label className="Aceh">
          Upload clear images of each item, specifically the problem area that
          needs refurbishing
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
                type="button"
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
        <button type="submit" className="p-4 flex m-auto text-center bg-black px-10 my-10 text-white rounded">
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default AdminDash;
