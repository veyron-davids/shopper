import React from "react";
import Apple from "./assets/apple.png";
import Google from "./assets/googl.png";
import bottomNav from "./bottomNav.module.css";
import Logo from "./logo";

const BottomNav = () => {
  return (
    <div className={bottomNav.container}>
      <Logo className={bottomNav.logo} />
      <div className={bottomNav.container__two}>
        <div className={bottomNav.container__flex}>
          <i className="fa fa-shopping-bag" id={bottomNav.fa}></i>
          <div className={bottomNav.container__three}>
            <span className={bottomNav.span}>
              DOWNLOAD SHOPPER.IO APP FREE (SOON!!!)
            </span>

            <span className={bottomNav.span__two}>Get exclusive offers</span>
          </div>
        </div>
        <div className={bottomNav.container__icon}>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={Google} alt="" className={bottomNav.img} />
          </a>
          <a href="https://www.apple.com/ng/ios/app-store/" target="_blank">
            <img src={Apple} alt="" className={bottomNav.img} />
          </a>
          {/* <img src={Apple} alt="" className={bottomNav.img} /> */}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
