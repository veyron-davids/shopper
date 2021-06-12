import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "./imageUploader";
import classes from "./productUpload.module.css";
import ProductUploadDetail from "./productUploadDetails";
import CustomizedSteppers from "./stepper";
import {
  postImage,
  postProduct,
  selectImg,
  selectProducInfo,
} from "./store/upload-slice";

// STEPPERS //

function getSteps() {
  return ["Images", "Details", "Review"];
}

// STEPPERS //

const ProductUpload = ({ history }) => {
  const dispatch = useDispatch();
  const images = useSelector(selectImg);
  const info = useSelector(selectProducInfo);
  // STEPPERS //

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  // STEPPERS //

  const [data, setData] = useState([]);
  const [dis, setDis] = useState(true);
  const [image, setImage] = useState({
    selectedFile: null,
    loaded: 0,
  });



  // STEPPERS //

  const handleNext = () => {
    if (image.selectedFile == null) {
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    if (activeStep === steps.length - 1) {
      setActiveStep(0);
    } else {
      return;
    }
  };

  // STEPPERS  END//

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDis(true);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClick = async () => {
    if (image.selectedFile == null && activeStep === 0) {
      setDis(false);
      return;
    } else if (activeStep === 1 || activeStep === 2) {
      return;
    }
    const data = new FormData();
    for (var x = 0; x < image.selectedFile.length; x++) {
      data.append("file", image.selectedFile[x]);
    }
    dispatch(postImage(data));
  };

  const OpenSnack = () => {
    setDis(false);
  };



  // IMAGES VALIDATION LOGIC END

  const doSubmit = async () => {
    if (activeStep === steps.length - 1) {
      dispatch(postProduct(info));
    } else {
      return;
    }
  };

  return (
    <div className={classes.ProductUpload}>
      {/* <div className={classes.Product__cont}> */}
      <div className={classes.steppers}>
        <CustomizedSteppers activeStep={activeStep} steps={steps} />
      </div>
      {activeStep === 0 && <ImageUploader image={image} />}
      {activeStep === 1 && <ProductUploadDetail />}
      {/* {activeStep === 2 &&} */}
      <div className={classes.buttons}>
        <button
          className={classes.custom__button__up}
          disabled={activeStep === 0}
          onClick={() => {
            handleBack();
            handleReset();
          }}
        >
          {activeStep === steps.length - 1 ? "CANCEL" : "BACK"}
        </button>
        <div
          id={classes.transf}
          className={classes.custom__button__up}
          onClick={() => {
            handleClick();
            handleNext();
            doSubmit();
          }}
        >
          {activeStep === steps.length - 1 ? "UPLOAD PRODUCT" : "NEXT"}
        </div>
      </div>
      {/* </div> */}
      {!dis && (
        <Snackbar open={!dis} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please select at leeast one image
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ProductUpload;
