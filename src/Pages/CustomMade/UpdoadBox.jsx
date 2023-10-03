import { useState } from "react";
import "./upload.css"

const UploadBox = () => {
    const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
    return (
      <div className="upload-box">
        <label htmlFor="image-upload" className="upload-icon text-sm  flex">
          <i className="fas fa-upload"></i>
          <span>Upload Image</span>
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          
        />
        {image && <img src={image} alt="Preview" className="image-preview" />}
      </div>
    );
  };
  
  export default UploadBox;
  