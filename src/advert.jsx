import React from "react";
import { default as adverts, default as classes } from "./advert.module.css";

const Advert = ({ adOne, adTwo }) => {
  return (
    <div className={adverts.container}>
      <img src={adOne} className={classes.container__img} alt="Ads" />
      {adTwo && (
        <img src={adTwo} className={classes.container__img} alt="Ads" />
      )}
    </div>
  );
};

export default Advert;
