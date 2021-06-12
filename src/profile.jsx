import React from "react";
import { AiFillLike, AiFillMessage } from "react-icons/ai";
import { BsGiftFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import profile from "./profile.module.css";
import ProfileItem from "./profileItem";

const Profile = () => {
  const iconOne = <FaClipboardList />;
  const titleOne = "Your Orders";
  const sub = "Track, edit, return or buy things again";

  const IconTwo = <MdSecurity />;
  const titleTwo = "Login & Security";
  const subTwo = "Edit login, name, and mobile number";

  const IconThree = <BsGiftFill />;
  const titleThree = "Gifts & Discounts";
  const subThree = "View your list of gifts and discounts";

  //LEVEL ONE

  const IconFour = <RiAccountBoxFill />;
  const titleFour = "Account";
  const subfour = "Edit your name, delivery address, and password";

  const IconFive = <AiFillLike />;
  const titleFive = "Wish Lists";
  const subFive = "View list of items you are loved and saved ";

  const IconSix = <AiFillMessage />;
  const titleSix = "Messages";
  const subSix = "View messages from our partners";

  //LEVEL <>

  const IconSeven = <RiAccountBoxFill />;
  const titleSeven = "Complaints";
  const subSeven = "Create a ticket on any service challenge";

  const IconEigth = <AiFillLike />;
  const titleEigth = "Preferences";
  const subEigth = "Set your preferred shopping sytle and taste";

  const IconNine = <FaHandshake />;
  const titleNine = "Become a Partner";
  const subNine = "Let's do business together";

  return (
    <div className={profile.profile__container}>
      <div className={profile.profile__content}>
        <div className={profile.level__one}>
          <ProfileItem icon={iconOne} title={titleOne} subtitle={sub} />
          <ProfileItem icon={IconTwo} title={titleTwo} subtitle={subTwo} />
          <ProfileItem
            icon={IconThree}
            title={titleThree}
            subtitle={subThree}
          />
        </div>
        <div className={profile.level__two}>
          <ProfileItem icon={IconFour} title={titleFour} subtitle={subfour} />
          <ProfileItem icon={IconFive} title={titleFive} subtitle={subFive} />
          <ProfileItem icon={IconSix} title={titleSix} subtitle={subSix} />
        </div>
        <div className={profile.level__three}>
          <ProfileItem
            icon={IconSeven}
            title={titleSeven}
            subtitle={subSeven}
          />
          <ProfileItem
            icon={IconEigth}
            title={titleEigth}
            subtitle={subEigth}
          />
          <ProfileItem icon={IconNine} title={titleNine} subtitle={subNine} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
