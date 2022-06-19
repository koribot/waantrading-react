import React from "react";
import styles from "../styles/Footer.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.fotter__content__container}>
          <div className={styles.footer__content__1}>
            <label>Contact Us</label>
            <div>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className={styles.footer__content__2}>
            <label>Helpful Links</label>
            <div>
              <a href="">Sell Now</a>
              <a href="">Report Item/Seller</a>
              <a href=""></a>
            </div>
          </div>
          <div className={styles.footer__content__3}>
            <label>Policies</label>
            <div>
              <a href="">Return Policy</a>
              <a href="">Shipping Policy</a>
              <a href="">Terms & Condition</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
