import "./upload.css";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  console.log(selectedFile);

  return (
    <div className="upload-box">
      <div className="elements">
        <label htmlFor="uploadFile" className="btn">
          Select Image
        </label>
        <input
          id="uploadFile"
          style={{ display: "none" }}
          type="file"
          onChange={changeHandler}
        />
        {isSelected ? (
          <div className="upload__elements">
            <p>{selectedFile.name} </p>
            <img src={selectedFile.name} alt="" />
            <IoClose className="delete__img" />
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
    </div>
  );
}
export default FileUploadPage;
