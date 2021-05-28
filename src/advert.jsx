import React from "react";
import Ads from "./assets/advert.jpg";
import adverts from "./advert.module.css";
import classes from "./advert.module.css";



const Advert = () => {
    return (
      <div className={adverts.container}>
        <img src={Ads} className={classes.container__img} alt="Ads" />
        <img src={Ads} className={classes.container__img} alt="Ads" />
      </div>
    );
};

export default Advert;
