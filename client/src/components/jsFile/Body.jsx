import React from "react";
import styles from "../styles/Body.module.scss";
import Categories from "./Categories";
import ImageSlider from "./ImageSlider";
const Body = ({ show, content }) => {
  return (
    <div className={styles.body}>
      <div className={styles.body__wrapper}>
        {show === "main" && (
          <>
            <ImageSlider />
            <Categories />
          </>
        )}
        {show === "categories" && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Body;
