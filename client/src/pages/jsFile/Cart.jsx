import React from "react";
import Navbar from "../../components/jsFile/Navbar";
import { useContext } from "react";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import styles from "../styles/Cart.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../../components/jsFile/Footer";
const Cart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme === "Light" ? "light" : "dark"} className={styles.container}>
      <Navbar />
      <div className={styles.content__container}>
        <div className={styles.content__body}>
          <div
            className={`${styles.content__body__wrapper} dark-div-bg dark-div-shadow`}
          >
            <div
              className={`${styles.content__title__container} dark-div-border`}
            >
              <h2 className={styles.content__title__text}>
                Your Shopping Cart
              </h2>

              <p className="pricelabel">Price</p>
            </div>

            <div className={styles.content__description__container}>
              <div
                className={`${styles.content__container__2} dark_div_border`}
              >
                <img
                  src="https://m.media-amazon.com/images/I/61otSxk3MRL._AC_SX466_.jpg"
                  alt="item"
                  width="200px"
                  height="200px"
                  className={styles.product__image}
                />
                <div className={styles.content__description}>
                  <div className={styles.content__1__container}>
                    <p>
                      BYJU’S Learning (featuring Disney), Pre-K Premium Kit -
                      Preschool - Ages 3-5-Featuring Disney & Pixar
                      Characters-Learn Numbers, Letters, Shapes & Colors-Powered
                      by Osmo-Works with Fire Tablet
                    </p>
                    <p>$199</p>
                  </div>
                  <div className={styles.content__2__container}>
                    <div>
                      <div>
                        <p>Quantity</p>
                      </div>
                      <div>
                        <RemoveIcon id={"cart__svg"} />
                        <input value="0" readOnly></input>
                        <AddIcon id={"cart__svg"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.subtotal} dark-div-bg dark-div-shadow`}>
            <h2>Subtotal (0): $0</h2>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
