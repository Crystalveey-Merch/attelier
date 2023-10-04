import { useState } from "react";
import "./upload.css"

const UploadBox = () => {
  const [images, setImages] = useState([]);


  const handleImageUpload = (e) => {
    const files = e.target.files;
    const newImages = [];

    const supportedFormats = ["image/jpeg", "image/jpg", "image/gif", "image/png"];

    for (let i = 0; i < files.length; i++) {
      if (newImages.length < 4) { // Check the maximum limit
        const file = files[i];
        if (supportedFormats.includes(file.type)) {
          const reader = new FileReader();
          reader.onload = () => {
            newImages.push(reader.result);
            if (newImages.length === files.length) {
              setImages([...images, ...newImages]);
            }
          };
          reader.readAsDataURL(file);
        } else {
          alert(`Unsupported file format: ${file.type}`);
        }
      } else {
        alert("Maximum limit of 4 images reached.");
        break; // Stop processing additional files
      }
    }
  };
  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  
    return (
      <><div className="upload-box relative ">
        <label
          htmlFor="image-upload"
          className="upload-icon text-sm z-20 h-full w-full  flex m-auto ipointer "
        >
          <i className="fas fa-upload m-auto"></i>
          <span className="m-auto">Upload Image(s)</span>
        </label>
        <input
          type="file"
          id="image-upload"
          accept=".jpeg, .jpg, .gif, .png" 
          onChange={handleImageUpload}
          style={{ display: "none" }}
          multiple // Allow multiple file selection
        />

      </div><div className="image-preview-container flex flex-wrap gap-3">
          {images.map((image, index) => (
            <div className="image-preview w-48 h-48 sm:w-20 sm:h-20  " key={index}>
              <img src={image} alt={`Preview ${index}`}  className="w-full h-full"/>
              <button
                className="remove-image-button"
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div></>
      
    );
  };
  
  export default UploadBox;
  