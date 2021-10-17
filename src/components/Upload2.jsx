import React, { useState } from "react";

const Upload2 = () => {
  // const [file, setFile] = useState(null);

  // function uploadSingleFile(e) {
  //   setFile(URL.createObjectURL(e.target.files[0]));
  //   console.log("file", file);
  // }

  // function upload(e) {
  //   e.preventDefault();
  //   console.log(file);
  // }
  const [images, setImages] = useState([]);
  const formData = new FormData();
  const [photo, setPhoto] = useState("");

  const handleImg = (e) => {
    setImages(e.target.files[0]);
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
              <img src={photo} alt="" />
              <button onClick={() => handlePhoto()}>DELETE</button>
            </>
          )}
        </div>

        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={(e) => handleImg(e)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary btn-block"
          // onClick={upload}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload2;
