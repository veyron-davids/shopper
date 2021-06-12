import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SERVER_IMAGE } from "./config";
import classes from "./display-card.module.scss";

const AdvertCard = ({ items }) => {
  // NOTE = images size must be aroun 500 x 750

const img = `${SERVER_IMAGE}/${items.images[0]}`;
  // NOTE = images size must be around 500 x 750

  return (
    <div className={classes.wrapper}>
      <div className={classes.container__img}>
        <Link to={`/productPreview/${items._id}`}>
          <div className={classes.image}>
            <img src={img} alt="" />
          </div>
        </Link>
        <div className={`${classes.bottom}`}>
          <div className={classes.left}>
            <div className={classes.details__one}>
              <div className={classes.name}>{items.pname}</div>
              <div className={classes.price}>{`₦ ${items.price}`}</div>
            </div>
            {/* {currentUser && */}
          </div>
          <div className={classes.right}>
            <div
              className={classes.details__two}
              className={classes.card__details}
            ></div>
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
    </div>
  );
};

export default React.memo(AdvertCard);
