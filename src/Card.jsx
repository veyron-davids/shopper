import React, { useEffect, useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Card.module.scss";
import { SERVER_IMAGE } from "./config";
import {
  addToCart,
  fetchCart,
  selectCart,
  selectLoading,
  selectSuccess,
} from "./store/product-slice";

const Card = ({ items, handleClick, index }) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(false)

  const [qty, setQty] = useState(1);

  const handleActive = () => {
    setActive(!active);
  };

  const loading = useSelector(selectLoading);
  const cart = useSelector(selectCart);

 
 
  const dispatch = useDispatch();

  const getProductIndex = () => {
    const idx = cart.findIndex((ct) => {
      return ct.productId._id.toString() === items._id.toString();
    });
    const index = Number(idx);
    if (index >= 0 && cart[index] && cart[index].quantity != 0) {
      setQty(cart[index].quantity);
      setActive(true);
    }

  };

  useEffect(() => {
    dispatch(fetchCart);
    getProductIndex();
  }, [loading]);

  const refreshPage = () => {
    window.location.reload();
  };


  function currencyFormat(num) {
    return "₦" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const price = currencyFormat(items.price);
  const img = `${SERVER_IMAGE}/${items.images[0]}`;


  // NOTE = images size must be aroun 500 x 750

  // const Image = styled.div`
  //   height: 80%;
  //   width: 100%;
  //   background: url("${SERVER_IMAGE}/${items.images[0]}") no-repeat center center;
  //   -webkit-background-size: 100%;
  //   -moz-background-size: 100%;
  //   -o-background-size: 100%;
  //   background-size: 100%;
  //   &:hover {
  //     transform: scale(1.1);
  //     transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  //   }
  // `;

  // NOTE = images size must be around 500 x 750

  return (
    <div className={classes.wrapper}>
      <div className={classes.container__img}>
        <Link to={`/productPreview/${items._id}`}>
          <div className={classes.image}>
            <img src={img} alt="" />
          </div>
        </Link>
        <div className={`${classes.bottom} ${active ? classes.clicked : ""}`}>
          <div className={classes.left}>
            <div className={classes.details__one}>
              <div className={classes.name}>{items.pname}</div>
              <div className={classes.price}>{`${price}`}</div>
            </div>
            {/* {currentUser && */}
            <div className={classes.buy}>
              <span
                className={classes.basket__icon}
                onClick={() => {
                  handleActive();
                  handleClick();

                  dispatch(addToCart(items._id)).then(() => {
                  
                    refreshPage();
                  });
                }}
              >
                <HiOutlineShoppingCart />
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.done}>
              <AiOutlineMinus className={classes.it} />
            </div>
            <div className={classes.inc}>
              <AiOutlinePlus
                className={classes.i}
                onClick={() => {
                  handleClick();
                  dispatch(addToCart(items._id)).then(() => {
                    refreshPage();
                  });
                }}
              />
            </div>

            {items._id && loading ? (
              <div className={classes.ring}></div>
            ) : (
              <span className={classes.span}>{qty}</span>
            )}

            <div
              className={classes.details__two}
              className={classes.card__details}
              lds__dual__ring
            ></div>
            <div className={classes.remove}>
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={handleActive}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.inside}>
        <div className={classes.icon}>
          <span>
            <AiOutlineInfoCircle />
          </span>
        </div>
        <div className={classes.contents}>
          <span>{items.pname}</span>
          <span>{items.category}</span>
          <span>{items.description}</span>
        </div>
      </div>
      {/* <Dialogue open={active}/> */}
    </div>
  );
};

export default React.memo(Card);
