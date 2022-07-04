import React, { useEffect } from "react";
import styles from "../styles/ProductTableLists.module.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ProductTableList = ({
  view,
  products,
  selectedSubCategory,
  selectedBuyFormat,
  selectedMinPrice,
  selectedMaxPrice,
  sortPrice,
}) => {
  //sub category and buy format Filters
  let filters = [];
  if (selectedMinPrice !== undefined && selectedMaxPrice !== undefined) {
    filters = [
      ...selectedSubCategory,
      ...selectedBuyFormat,
      selectedMaxPrice,
      selectedMinPrice,
    ];
  } else {
    filters = [...selectedSubCategory, ...selectedBuyFormat];
  }

  let newLists = [...products];

  // const p = newLists.sort(function (x, y) {
  //   return y.price - x.price;
  // });
  // console.log(p);
  // selectedSubCategory = "Stickers, Decals"
  // format = "Buy Now"

  if (filters.length > 0 || sortPrice.length > 0) {
    newLists = [];
    for (let x = 0; x < products.length; x++) {
      let foundSubCategory = false,
        foundBuyFormat = false,
        foundPrice = false;

      if (selectedMinPrice > 0 && selectedMaxPrice > 0) {
        if (
          products[x].price >= selectedMinPrice &&
          products[x].price <= selectedMaxPrice
        ) {
          foundPrice = true;
        } else {
          foundPrice = false;
        }
      } else {
        foundPrice = true;
      }

      if (selectedSubCategory.length > 0) {
        foundSubCategory = selectedSubCategory.some(
          (subCategory) => subCategory === products[x].sub_category
        );
      } else {
        foundSubCategory = true;
      }

      if (selectedBuyFormat.length > 0) {
        foundBuyFormat = selectedBuyFormat.some(
          (buyFormat) => buyFormat === products[x].buyformat
        );
      } else {
        foundBuyFormat = true;
      }

      if (foundBuyFormat && foundSubCategory && foundPrice) {
        newLists.push(products[x]);
      }
      if (sortPrice === "Highest") {
        newLists.sort(function (x, y) {
          return y.price - x.price;
        });
      } else if (sortPrice === "Lowest") {
        newLists.sort(function (x, y) {
          return x.price - y.price;
        });
      }
    }
  }

  // function filtration(item) {
  //   return;
  // }

  // if (filters.length !== 0) {
  //   newLists = newLists.filter(filtration);
  // }

  // if (filters.length !== 0) {
  //   newLists.filter(filtration);
  // }

  // if (filters.length !== 0) {
  //   // newLists = [];
  //   if (selectedSubCategory.length !== 0 && selectedBuyFormat.length === 0) {
  //     newLists = newLists.filter((item) => item.sub_category === filters[0]);

  //     // for (let y = 0; y < products.length; y++) {
  //     //   for (let x = 0; x < filters.length; x++) {
  //     //     if (products[y].sub_category === filters[x]) {
  //     //       newLists.push(products[y]);
  //     //     }
  //     //   }
  //     //   // for (let i = 0; i < buyFormat.length; i++) {}
  //     // }
  //   }
  //   if (selectedSubCategory.length !== 0 && selectedBuyFormat.length !== 0) {
  //     for (let y = 0; y < products.length; y++) {
  //       for (let x = 0; x < filters.length; x++) {
  //         if (products[y].sub_category === filters[x]) {
  //           for (let b = 0; b < filters.length; b++) {
  //             if (products[y].buyformat === filters[b]) {
  //               newLists.push(products[y]);
  //             }
  //           }
  //         }
  //       }
  //       // for (let i = 0; i < buyFormat.length; i++) {}
  //     }
  //   }
  //   if (selectedSubCategory.length === 0 && selectedBuyFormat.length !== 0) {
  //     for (let y = 0; y < products.length; y++) {
  //       for (let x = 0; x < filters.length; x++) {
  //         if (products[y].type === filters[x]) {
  //           newLists.push(products[y]);
  //         }
  //       }
  //       // for (let i = 0; i < buyFormat.length; i++) {}
  //     }
  //   }
  // }

  return (
    <div className={view ? styles.content__container : styles.list__view}>
      {newLists.map((item) => {
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
