import React, { useState } from "react";
import { isImgLink, MakedId } from "../utils";
import Modal from "./Modal";
import * as Styled from "../styles/style";

const FileUploadPage = () => {
  const [files, setFiles] = useState([]);
  const [modalProductUrl, setModalProductUrl] = useState(false);
  const [linkValue, setLinkValue] = useState("");

  const handleChange = (e) => {
    let mediaFile = e.target.files[0];
    setFiles([
      ...files,
      Object.assign(mediaFile, {
        id: MakedId(files),
        review: URL.createObjectURL(mediaFile),
      }),
    ]);
  };

  const saveModal = () => {
    let url = linkValue.split("/")[2];
    if (url === "youtu.be") {
      setFiles([
        ...files,
        {
          id: MakedId(files),
          type: "video",
          name: "youtube",
          review: linkValue,
        },
      ]);
      setLinkValue("");
      setModalProductUrl(false);
    } else if (isImgLink(linkValue)) {
      setFiles([
        ...files,
        {
          id: MakedId(files),
          type: "image",
          name: "browser_image",
          review: linkValue,
        },
      ]);
      setLinkValue("");
      setModalProductUrl(false);
    } else alert("Bunday file mavjud emas!");
  };

  const closeModal = () => {
    setLinkValue("");
    setModalProductUrl(false);
  };

  const remove = (file) => {
    const newFiles = files.filter((i) => i.id === file.id);
    setFiles(newFiles);
  };

  return (
    <div className="upload-box">
      <div className="elements">
        <input
          type="file"
          id="uploadFile"
          style={{ display: "none" }}
          onChange={(e) => handleChange(e)}
        />
        <Styled.Form>
          <label htmlFor="uploadFile" className="btn">
            Add files
          </label>
          <p className="text">or drop files to upload</p>
        <Styled.MediaUrl onClick={() => setModalProductUrl((prev) => !prev)}>
          Media Url
        </Styled.MediaUrl>
        </Styled.Form>
        {files.map((file) => (
          <div key={file}>
            <div>
              {file.type === "video/mp4" ? (
                <video width="188" height="188" controls>
                  <source src={file.review} type="video/mp4" />
                </video>
              ) : (
                file.name !== "youtube" && (
                  <img
                    src={file?.review}
                    style={{ width: 188, height: 188 }}
                    alt=""
                  />
                )
              )}
              {file.name === "youtube" && (
                <iframe
                  width="188"
                  height="188"
                  src={`https://www.youtube.com/embed/${
                    file.review.split("/")[3]
                  }`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <p
                onClick={() => remove(file.id)}
                style={{ cursor: "pointer", color: "red" }}
              >
                Delete media
              </p>
            </div>
          </div>
        ))}
        <Modal
          title="Media URL"
          active={modalProductUrl}
          setActive={setModalProductUrl}
          btn1="Save"
          btn2="Cancel"
          saveModal={saveModal}
          closeModal={closeModal}
        >
          <Styled.Input
            value={linkValue}
            style={{ width: "300px" }}
            onChange={(e) => setLinkValue(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
};
export default FileUploadPage;
