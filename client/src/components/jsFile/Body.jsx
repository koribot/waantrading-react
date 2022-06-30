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
        {/* {show === "categories" && (
          <div>
            <div>
              {content?.map((item) => {
                return (
                  <>
                    <p key={item.id}>{content.id}</p>
                    <img src={item.img} alt={item.id} width="100px" />
                  </>
                );
              })}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Body;
