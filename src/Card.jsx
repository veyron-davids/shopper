import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./Card.module.scss";


const Card = ({ items }) => {

  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  // NOTE = images size must be aroun 500 x 750

  const Image = styled.div`
    height: 80%;
    width: 100%;
    background: url(https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)
      no-repeat center center;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `;

  // NOTE = images size must be around 500 x 750

  return (
    <div className={classes.wrapper}>
      <div className={classes.container__img}>
        <Link to={`/productPreview/${items._id}`}>
        </Link>
        <Image></Image>
        <div className={`${classes.bottom} ${active ? classes.clicked : ""}`}>
          <div className={classes.left}>
            <div className={classes.details__one}>
              <div className={classes.name}>{items.pname}</div>
              <div className={classes.price}>{`₦ ${items.price}`}</div>
            </div>
            {/* {currentUser && */}
            <div className={classes.buy}>
              <span
                className={classes.basket__icon}
                // onClick={() => {
                //   addItem(items._id);
                //   handleActive();
                // }}
              >
                <HiOutlineShoppingCart
                // onClick={() => addItem(item)}
                />
              </span>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.done}>
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div
              className={classes.details__two}
              className={classes.card__details}
            >
              <h1></h1>
              {/* {!currentUser ?
                <p>Please Login</p> : null
              } */}
            </div>
            <div className={classes.remove}>
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={() => {
                  handleActive();
                }}
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
        <div className={classes.contents}>{/* {pname} {category} */}</div>
      </div>
    </div>
  );
};

export default React.memo(Card);
