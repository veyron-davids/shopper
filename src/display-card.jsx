import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classes from "./display-card.module.scss";

const AdvertCard = () => {
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
        <Link >
          <Image></Image>
        </Link>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <div className={classes.details__one}>
              <div className={classes.name}>Explore Now</div>
              <div className={classes.price}></div>
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

export default React.memo(AdvertCard);
