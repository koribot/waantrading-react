import React from "react";
import styles from "../styles/ProductTableLists.module.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductTableList = ({ view, products }) => {
  return (
    <div className={view ? styles.content__container : styles.list__view}>
      {products.map((item) => {
        return (
          <div
            // href="#"
            className={`${styles.wrapper} dark-div-bg`}
            key={item.id}
          >
            <div className={styles.container}>
              <div>
                <LazyLoadImage src={item.img} alt={item.id} width="100px" />
              </div>
              <div>
                <div className={styles.top}>
                  <p className={styles.product__title}>
                    {item.title.length > 16
                      ? view
                        ? item.title.slice(0, 16) + "...."
                        : item.title.length > 150
                        ? item.title.slice(0, 100) + "...."
                        : item.title
                      : item.title}
                  </p>
                </div>
                <FavoriteBorderOutlinedIcon className={styles.wishlist__icon} />
                <div className={styles.bottom}>
                  {view ? <h4>₱ {item.price}</h4> : <h2>₱ {item.price}</h2>}
                </div>

                {
                  // view && (
                  <ShoppingCartOutlinedIcon
                    className={styles.add__cart__icon}
                  />
                  // )
                  // : (
                  //   <button>Add to Cart</button>
                  // )
                }
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTableList;
