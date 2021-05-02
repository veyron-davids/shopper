import React from "react";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { FaChild, FaFemale, FaMale } from "react-icons/fa";
import { GiLoveMystery } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { SiTrendmicro } from "react-icons/si";
import classes from "./Styles.module.css";

const RightBar = () => {
  return (
    <div className={classes.rigt__bar}>
      <div className={classes.bar__icon}>
        <FaMale className={classes.bar__title} />
        <span>Male</span>
      </div>
      <div className={classes.bar__icon}>
        <FaFemale className={classes.bar__title} />
        <span>Female</span>
      </div>
      <div className={classes.bar__icon}>
        <FaChild className={classes.bar__title} />
        <span>Children</span>
      </div>
      <div className={classes.bar__icon}>
        <ImManWoman className={classes.bar__title} />
        <span>Unisex</span>
      </div>
      <div className={classes.bar__icon}>
        <SiTrendmicro className={classes.bar__title} />
        <span>Trending</span>
      </div>
      <div className={classes.bar__icon}>
        <GiLoveMystery className={classes.bar__title} />
        <span>Love</span>
      </div>
      <div className={classes.bar__icon}>
        <SiTrendmicro className={classes.bar__title} />
        <span>Popular</span>
      </div>
      <div className={classes.bar__icon}>
        <BsFillChatSquareQuoteFill className={classes.bar__title} />
        <span>Quotes</span>
      </div>
    </div>
  );
};

export default RightBar;
