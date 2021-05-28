import React from "react";
import Flip from "react-reveal/Flip";
import AdvertCard from "./display-card";
import recommended from "./recommended.module.css";

const Recommended = () => {
  return (
    <div className={recommended.container}>
      <span>Recommended for you</span>
      <div className={recommended.container__content}>
         <Flip bottom>
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
          <AdvertCard />
        </Flip>
      </div>
    </div>
  );
};

export default Recommended;
