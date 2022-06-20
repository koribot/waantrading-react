import React from "react";
import styles from "../styles/Body.module.scss";
import ImageSlider from "./ImageSlider";
const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.body__wrapper}>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Body;
