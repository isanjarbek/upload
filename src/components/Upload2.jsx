import React, { useState } from "react";

const Upload2 = () => {
  const [photo, setPhoto] = useState("");

  const handleImg = (e) => {
    console.log(e.target.files[0]);
    const { files } = e.target;
    if (files.length === 0) {
      return;
    }

    const file = files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPhoto(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handlePhoto = () => {
    setPhoto("");
  };

  return (
    <div>
      <form>
        <div className="form-group preview">
          {photo && (
            <>
              <img src={photo} alt="" style={{ borderRadius: "50%" }} />
              <button onClick={() => handlePhoto()}>DELETE</button>
            </>
          )}
        </div>

        <div className="form-group">
          <input
            type="file"
            id="uploadFile"
            className="form-control"
            onChange={(e) => handleImg(e)}
            style={{ display: "none" }}
          />
          <label htmlFor="uploadFile" className="btn">
            Select Image
          </label>
        </div>
      </form>
    </div>
  );
};

export default Upload2;
