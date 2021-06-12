import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import dl from "./image.module.css";
import { generateBase64FromImage } from "./imageReader";
import upload from "./productUpload.module.css";

const ImageUploader = ({ image }) => {
  const [preview, setPreview] = useState([]);
  const [error, setError] = useState([]);
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handlePreview = async (event) => {
    for (let i = 0; i <= event.target.files.length; i++) {
      generateBase64FromImage(event.target.files[i])
        .then((b64) => {
          preview.push(b64);
        })
        .catch((e) => {
          console.log(e);
        });
      //   window.location.reload();
    }
    setPreview(...preview);
  };

  // IMAGES VALIDATION LOGIC START

  const checkMimeType = (event) => {
    let files = event.target.files;
    let err = null;
    const types = ["image/png", "image/jpeg", "image/gif"];
    for (var x = 0; x < files.length; x++) {
      if (types.every((type) => files[x].type !== type)) {
        err += files[x].type + " is not a supported format\n";
      }
    }
    error.push(err);
    setOpen(true);

    if (err !== "") {
      event.target.value = null; // discard selected file
      console.log(err);
      return false;
    }
    return true;
  };

  const maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null; // discard selected file
      console.log(msg);
      error.push(msg);
      setOpen(true);
      return false;
    }
    return true;
  };

  const checkFileSize = (event) => {
    let files = event.target.files;
    let size = 15000000000;
    let err = null;
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    error.push(err);
    setOpen(true);
    if (err !== "") {
      event.target.value = null;
      console.log(err);
      return false;
    }

    return true;
  };

  const onChangeHandler = (event) => {
    var files = event.target.files;
    handlePreview(event);
    image.selectedFile = files;
 
    setPreview({})
    // if (maxSelectFile(event) && checkMimeType(event) && checkFileSize(event)) {
    // }
  };

  const Text = () => {
    return <span className={upload.preview__span}>Image Preview</span>;
  };

  return (
    <div className={dl.upload__container}>
      <div>
        <div className={upload.cont}>
          <div
            className={upload.preview__img}
            style={{
              backgroundImage: `url('${preview[0]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            id={upload.file}
          >
            <input
              type="file"
              name="file"
              id="file"
              multiple
              onChange={onChangeHandler}
              className={upload.inputfile}
            />
            <label for="file">Click to select images</label>
          </div>
          <div
            className={upload.preview__img}
            style={{
              backgroundImage: `url('${preview[1]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {preview == null ? <Text /> : null}
          </div>
        </div>
        <div className={upload.cont}>
          <div
            className={upload.preview__img}
            style={{
              backgroundImage: `url('${preview[2]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {preview == null ? <Text /> : null}
          </div>
          <div
            id={upload.file__two}
            className={upload.preview__img}
            style={{
              backgroundImage: `url('${preview[3]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {preview == null ? <Text /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
