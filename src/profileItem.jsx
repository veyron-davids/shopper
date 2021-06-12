import React from "react";
import styles from "./profile.module.css";

const ProfileItem = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.texts}>
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default ProfileItem;
