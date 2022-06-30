import React from "react";
import Box from "@mui/material/Box";
import { useContext } from "react";
import ThemeContext from "../Contexts/Themecontext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../../helpers/styles/CartModal.module.scss";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Modal from "@mui/material/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { createPortal } from "react-dom";

export default function CartModal({ cartModal, setCartModal }) {
  const [open, setOpen] = useState(cartModal);
  const { theme } = useContext(ThemeContext);
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(19.99);
  const style = {
    // top: "75%",

    // transform: "translate(-50%, -50%)",
    // width: "fit-content",
    minWidth: 400,
    background: `${theme === "Dark" ? "white" : "rgb(216, 209, 209)"}`,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,

    overflowY: "auto",
    trasition: "0.5s ease",
  };

  const handleAdd = (e) => {
    e === "add"
      ? setQty(qty < 10 ? qty + 1 : 10)
      : setQty(qty > 1 ? qty - 1 : 1);
  };
  // useEffect(() => {
  //   console.log(qty);
  // }, [qty]);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  // const handleMouseLeave = () => {
  //   setCartModal(false);

  //   const modalID = document.getElementById("modal");
  //   modalID.classList.remove("modal");
  //   document.body.style.overflow = "auto";
  // };
  return createPortal(
    <div
      className={styles.cartModal}
      id={theme === "Light" ? "light" : "dark"}
      // onMouseLeave={handleMouseLeave}
    >
      <div>
        <div style={style} className={styles.box}>
          {/* <Close onClick={handleClose} sx={style2} /> */}
          <div className={styles.top__container}>
            <h3 className={styles.cart__text}>Your Cart: {qty}</h3>
            <p className={`${styles.total__text} dark-text-color-black`}>
              Total Amount: {formatter.format(qty * price)}
            </p>
          </div>
          <div className={styles.main__container}>
            <div className={styles.container}>
              <LazyLoadImage
                src="https://i.ebayimg.com/images/g/UdYAAOSwnJph4rEG/s-l500.png"
                alt="title"
              />
              <div className={styles.quantity__container}>
                <RemoveIcon
                  onClick={() => handleAdd("left")}
                  style={{ color: "black" }}
                />
                <input value={qty} readOnly style={{ color: "black" }} />
                <AddIcon
                  onClick={() => handleAdd("add")}
                  style={{ color: "black" }}
                />
              </div>
              <div className={styles.price__container}>
                <p className="dark-text-color-black">${price}</p>
              </div>
              <div className={styles.price__container}>
                <button>Remove</button>
              </div>
            </div>
            {/* <div className={styles.container}>
              <LazyLoadImage
                src="https://i.ebayimg.com/images/g/UdYAAOSwnJph4rEG/s-l500.png"
                alt="title"
              />
              <div className={styles.quantity__container}>
                <RemoveIcon
                  onClick={() => handleAdd("left")}
                  style={{ color: "black" }}
                />
                <input value={qty} readOnly style={{ color: "black" }} />
                <AddIcon
                  onClick={() => handleAdd("add")}
                  style={{ color: "black" }}
                />
              </div>
              <div className={styles.price__container}>
                <p className="darkp">${price}</p>
              </div>
              <div className={styles.price__container}>
                <button>Remove</button>
              </div>
            </div> */}
            {/* <div className={styles.container}>
              <LazyLoadImage
                src="https://i.ebayimg.com/images/g/UdYAAOSwnJph4rEG/s-l500.png"
                alt="title"
              />
              <div className={styles.quantity__container}>
                <RemoveIcon
                  onClick={() => handleAdd("left")}
                  style={{ color: "black" }}
                />
                <input value={qty} readOnly style={{ color: "black" }} />
                <AddIcon
                  onClick={() => handleAdd("add")}
                  style={{ color: "black" }}
                />
              </div>
              <div className={styles.price__container}>
                <p className="darkp">${price}</p>
              </div>
              <div className={styles.price__container}>
                <button>Remove</button>
              </div>
            </div> */}
          </div>
          <div className={styles.checkout__button__container}>
            <button className={styles.checkout__btn}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
