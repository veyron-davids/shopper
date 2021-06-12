import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import item from "./cartPage.module.css";
import { postCartUpdate, selectFetch } from "./store/product-slice";

const qty = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

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
        borderColor: "rgb(119, 24, 24)",
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

const CartItem = ({ cartItem }) => {
  const [values, setValues] = useState({
    quantity: cartItem.quantity,
  });
  const [data, setData] = useState([cartItem._id]);
  const dispatch = useDispatch();
  const loading = useSelector(selectFetch);
 

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    data.push(parseInt(event.target.value));
  };

  useEffect(() => {
    setValues({ quantity: cartItem.quantity });
    if (values.quantity != cartItem.quantity) {
      dispatch(postCartUpdate(data));
      window.location.reload();
    }
  }, [values.quantity]);

  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const price = currencyFormat(cartItem.productId.price);
  const total = currencyFormat(
    Number(cartItem.quantity) * Number(cartItem.productId.price)
  );

  return (
    <div className={item.item__container}>
      <div className={item.content}>
        <div className={item.img__cont}>
          <img
            src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>

        <div className={item.content__upper}>
          <span>{cartItem.productId.pname}</span>
          <div className={item.label}>
            <div className={item.label__span}>
              {" "}
              <AiOutlineHeart className={item.icon} />
              <span>SAVE FOR LATER</span>
            </div>
            <div className={item.label__span}>
              <MdDelete className={item.icon} /> <span>REMOVE</span>
            </div>
          </div>
        </div>
      </div>
      <div className={item.quantity}>
        {!loading ? (
          <CssTextField
            className={item.qty}
            variant="outlined"
            select
            defaultValue={values.quantity}
            SelectProps={{
              native: true,
            }}
            id="custom-css-outlined-input"
            value={values.quantity}
            onChange={handleChange("quantity")}
          >
            {qty.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </CssTextField>
        ) : (
          <div className={item.ring}></div>
        )}
      </div>
      <div className={item.price}>
        <span>{`${price}`}</span>
      </div>
      <div className={item.total}>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default CartItem;
