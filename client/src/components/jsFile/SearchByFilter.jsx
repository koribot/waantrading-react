import React from "react";
import styles from "../styles/SearchByFilter.module.scss";
const SearchByFilter = ({
  handlePriceRange,
  handleSubChange,
  minPrice,
  maxPrice,
  sub__categories,
  isAdress,
}) => {
  return (
    <div className={styles.search__filter}>
      <div className={styles.search__filter__title}>
        <h4>{isAdress}</h4>
      </div>
      <div className={styles.search__filter__methods}>
        <div className={styles.sub__categories__method}>
          <p>Sub Categores</p>
          <div>
            {sub__categories.map((item, i) => {
              return (
                <div key={item.id}>
                  <input
                    type="checkbox"
                    name="sub"
                    // checked={currenctChecked.includes(i) && isChecked}
                    onChange={() => handleSubChange(item.title)}
                  />
                  <label
                    htmlFor="sub"
                    // onClick={() => handleClick(i)}
                  >
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.price__range__method}>
          <p>Price Range</p>
          <div>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="₱ Min"
                  value={isNaN(minPrice.toString()) ? "" : minPrice}
                  onChange={handlePriceRange}
                  name="min"
                />
                <p>-</p>
                <input
                  type="text"
                  placeholder="₱ Max"
                  name="max"
                  onChange={handlePriceRange}
                  value={isNaN(maxPrice) ? "" : maxPrice}
                />
              </div>
              <button className={styles.apply__button}>Apply</button>
            </div>
          </div>
        </div>
        <div className={styles.buy__format__method}>
          <p>Buy Format</p>
          <div>
            <div>
              <input type="checkbox" name="buy-now" />
              <label htmlFor="buy-now">Buy Now</label>
            </div>
            <div>
              <input type="checkbox" name="auction" />
              <label htmlFor="auction">Auction</label>
            </div>
          </div>
        </div>
        <div>
          <p>Stores</p>
        </div>
      </div>
    </div>
  );
};

export default SearchByFilter;
