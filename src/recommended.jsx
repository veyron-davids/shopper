import React from "react";
import { useSelector } from "react-redux";
import AdvertCard from "./display-card";
import recommended from "./recommended.module.css";
import { selectAllVogue } from "./store/product-slice";

const Recommended = () => {
  const vogue = useSelector(selectAllVogue);

  return (
    <div className={recommended.container}>
      <span>Recommended for you</span>
      <div className={recommended.container__content}>
        {vogue.length &&
          vogue.map((item) => <AdvertCard key={item._id} items={item} />)}
      </div>
    </div>
  );
};

export default Recommended;
