import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { default as axios, default as Axios } from "axios";
import React, { useState } from "react";
import { UPLOAD_SERVER } from "./config";
import classes from "./productUpload.module.css";

const tags = [
  {
    value: "Good",
  },
  {
    value: "Better",
  },
  {
    value: "Best",
  },
  {
    value: "Worst",
  },
];
const promotions = [
  {
    value: "true",
  },
  {
    value: "false",
  },
];
const top = [
  {
    value: "true",
  },
  {
    value: "false",
  },
];
const categories = [
  {
    value: "Good",
  },
  {
    value: "Better",
  },
  {
    value: "Best",
  },
  {
    value: "Worst",
  },
];

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#32ca84",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const ProductUpload = ({ history }) => {
  const [pnameError, setPnameError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [priceError, setPriceError] = useState();
  const [imageError, setimageError] = useState();
  const [numberInStockError, setNumberInStockError] = useState();
  const [tagError, setTagError] = useState();
  const [categoryError, setCategoryError] = useState();

  const [preview, setPreview] = useState(null);
  const [data, setData] = useState([]);

  const [values, setValues] = useState({
    pname: "",
    description: "",
    price: "",
    numberInStock: "",
    tag: "",
    category: "",
    promotions: true,
    top: true,
  });

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    Axios.post(UPLOAD_SERVER, formData, config).then((response) => {
      if (response.data.success) {
        console.log(response);
      } else {
        alert("Failed to save the Image in Server");
      }
    });
  };

  const handlePreview = async (event) => {
    data.push(event.target.files);
    // generateBase64FromImage(event.target.files[0])
    //   .then((b64) => {
    //     setPreview(b64);
    //   })
    //   .catch((e) => {});
  };

  console.log(data);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const doSubmit = async () => {
    const fd = new FormData();
    fd.append("file", data);
    // fd.append(data, values);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(UPLOAD_SERVER, values);
      console.log(response);
      if (response.status === 200) {
        window.location = "/admin";
      }
    } catch (err) {}
  };

  const Text = () => {
    return <span className={classes.preview__span}>Image Preview</span>;
  };
  return (
    <div className={classes.ProductUpload}>
      <div className={classes.upload__container}>
        <span className={classes.upload__title}>Create a New Product</span>
        {/* <div className={classes.image__preview}>
          {preview.map((image, index) => (
            <Roll left>
              <DropZone onDelete={Delete} image={image} key={index} />
            </Roll>
          ))}
        </div> */}
        <form>
          <div className={classes.form__up}>
            <CssTextField
              className={classes.text__field}
              label="Product Name"
              autoFocus
              variant="outlined"
              required
              id="custom-css-outlined-input"
              value={values.pname}
              onChange={handleChange("pname")}
              helperText={pnameError}
              error={pnameError != null}
            />
            <CssTextField
              className={classes.text__field}
              label="Price"
              type="Number"
              variant="outlined"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₦</InputAdornment>
                ),
              }}
              id="custom-css-outlined-input"
              value={values.price}
              onChange={handleChange("price")}
              helperText={priceError}
              error={priceError != null}
            />
          </div>
          <div className={classes.form__up}>
            <CssTextField
              className={classes.text__field}
              label="Product Count"
              variant="outlined"
              type="number"
              required
              id="custom-css-outlined-input"
              value={values.numberInStock}
              onChange={handleChange("numberInStock")}
              helperText={numberInStockError}
              error={numberInStockError != null}
            />
            <CssTextField
              className={classes.text__field}
              label=""
              accept=".jpg, .jpeg, .png"
              variant="outlined"
              type="file"
              required
              id="custom-css-outlined-input"
              value={values.image}
              onChange={handlePreview}
              helperText={imageError}
              error={imageError != null}
            />
          </div>
          <div className={classes.form__up}>
            <CssTextField
              className={classes.text__field}
              label="Product tag"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              id="custom-css-outlined-input"
              value={values.tag}
              onChange={handleChange("tag")}
              helperText={tagError}
              error={tagError != null}
            >
              {tags.map((option) => (
                <option
                  className={classes.select}
                  key={option.value}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))}
            </CssTextField>
            <CssTextField
              className={classes.text__field}
              label="Product Category"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              id="custom-css-outlined-input"
              value={values.category}
              onChange={handleChange("category")}
              helperText={categoryError}
              error={categoryError != null}
            >
              {categories.map((option) => (
                <option
                  className={classes.select}
                  key={option.value}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))}
            </CssTextField>
          </div>
          <div className={classes.form__up}>
            <CssTextField
              className={classes.text__field}
              label="Promotions"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              id="custom-css-outlined-input"
              value={values.tag}
              onChange={handleChange("promotions")}
              helperText={tagError}
              error={tagError != null}
            >
              {promotions.map((option) => (
                <option
                  className={classes.select}
                  key={option.value}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))}
            </CssTextField>
            <CssTextField
              className={classes.text__field}
              label="Top Sellers"
              variant="outlined"
              select
              SelectProps={{
                native: true,
              }}
              id="custom-css-outlined-input"
              value={values.category}
              onChange={handleChange("Top")}
              helperText={categoryError}
              error={categoryError != null}
            >
              {top.map((option) => (
                <option
                  className={classes.select}
                  key={option.value}
                  value={option.value}
                >
                  {option.value}
                </option>
              ))}
            </CssTextField>
          </div>
          <div className={classes.form__up}>
            <CssTextField
              className={classes.text__field}
              label="Description"
              variant="outlined"
              required
              id="outlined-multiline-static"
              multiline
              rows={10.5}
              value={values.description}
              onChange={handleChange("description")}
              helperText={descriptionError}
              error={descriptionError != null}
            />
            <div
              className={classes.preview__img}
              style={{
                backgroundImage: `url('${preview}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {preview == null ? <Text /> : null}
            </div>
          </div>
        </form>
        <button onClick={doSubmit} className={classes.custom__button__up}>
          UPLOAD PRODUCT
        </button>
      </div>
    </div>
  );
};

export default ProductUpload;
