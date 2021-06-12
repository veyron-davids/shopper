import { Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import classes from "./productUpload.module.css";
import { map, selectImg } from "./store/upload-slice";

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="₦"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "rgb(119, 24, 24)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgb(119, 24, 24)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      // "&:hover fieldset": {
      //   borderColor: "yellow",
      // },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(119, 24, 24)",
      },
    },
  },
})(TextField);

const InputField = withStyles({
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
})(Input);

const tags = [
  {
    value: "Trending",
  },
  {
    value: "New Arrival",
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
    value: "Men",
  },
  {
    value: "Ladies",
  },
  {
    value: "Vogue",
  },
  {
    value: "Scriptures",
  },
  {
    value: "Best Sellers",
  }
  ,
  {
    value: "Couples",
  },
];

const ProductUploadDetails = ({ mapState }) => {
  const dispatch = useDispatch();
  const img = useSelector(selectImg);

  const [values, setValues] = useState({
    pname: "",
    description: "",
    price: "",
    numberInStock: "",
    tag: "",
    category: "",
    promotions: false,
    top: false,
  });

  useEffect(() => {
    dispatch(map(values));
  }, [values]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.upload__container}>
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
            // helperText={pnameError}
            // error={pnameError != null}
          />
          <CssTextField
            className={classes.text__field}
            label="Price"
            variant="outlined"
            required
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">₦</InputAdornment>
            //   ),
            // }}
            id="custom-css-outlined-input"
            value={values.price}
            onChange={handleChange("price")}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            // helperText={priceError}
            // error={priceError != null}
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
            // helperText={numberInStockError}
            // error={numberInStockError != null}
          />
          <CssTextField
            className={classes.text__field}
            label="Description"
            variant="outlined"
            required
            id="outlined-multiline-static"
            multiline
            rows={1}
            value={values.description}
            onChange={handleChange("description")}
            // helperText={descriptionError}
            // error={descriptionError != null}
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
            // helperText={tagError}
            // error={tagError != null}
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
            // helperText={categoryError}
            // error={categoryError != null}
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
            value={values.promotions}
            onChange={handleChange("promotions")}
            // helperText={tagError}
            // error={tagError != null}
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
            value={values.top}
            onChange={handleChange("top")}
            // helperText={categoryError}
            // error={categoryError != null}
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
      </form>
      {/* <button onClick={onClickHandler} className={classes.custom__button__up}>
        UPLOAD PRODUCT
      </button> */}
      {/* <button onClick={doSubmit} className={classes.custom__button__up}>
          UPLOAD PRODUCT
        </button> */}
    </div>
  );
};

export default ProductUploadDetails;
