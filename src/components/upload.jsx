import React, { useState } from "react";
import "./upload.css";
import { IoClose } from "react-icons/io5";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {};

  return (
    <div className="upload-box">
      <div className="elements">
        <label for="files" class="btn">
          Select Image
        </label>
        <input
          id="files"
          style={{ visibility: "hidden" }}
          type="file"
          onChange={changeHandler}
        />
        {isSelected ? (
          <div className="upload__elements">
            <p>{selectedFile.name} </p>
            {/* <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p> */}
            <IoClose className="delete__img" />
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </div>
  );
}
export default FileUploadPage;
