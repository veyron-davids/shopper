import React from "react";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { GiLoveMystery } from "react-icons/gi";
import { SiTrendmicro } from "react-icons/si";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";

const RightBar = () => {
    return (
      <div className="rigt-bar">
        <div className="bar-icon">
          <FaMale className="bar-title" />
          <span>Male</span>
        </div>
        <div className="bar-icon">
          <FaFemale className="bar-title" />
          <span>Female</span>
        </div>
        <div className="bar-icon">
          <FaChild className="bar-title" />
          <span>Children</span>
        </div>
        <div className="bar-icon">
          <ImManWoman className="bar-title" />
          <span>Unisex</span>
        </div>
        <div className="bar-icon">
          <SiTrendmicro className="bar-title" />
          <span>Trending</span>
        </div>
        <div className="bar-icon">
          <GiLoveMystery className="bar-title" />
          <span>Love</span>
        </div>
        <div className="bar-icon">
          <SiTrendmicro className="bar-title" />
          <span>Popular</span>
        </div>
        <div className="bar-icon">
          <BsFillChatSquareQuoteFill className="bar-title" />
          <span>Quotes</span>
        </div>
      </div>
    );
};

export default RightBar;
