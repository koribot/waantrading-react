import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Body from "../../components/jsFile/Body";
import Footer from "../../components/jsFile/Footer";
import Navbar from "../../components/jsFile/Navbar";
import SortByPrice from "../../components/jsFile/SortByPrice";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import styles from "../styles/ProductLists.module.scss";

const motor__products = [
  {
    id: 1,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 2,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 3,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 4,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 5,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 6,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 7,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 8,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 9,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 10,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 11,
    title: "MRO Optimizer System",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
];
const Food__Beverages__products = [
  {
    id: 1,

    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 2,

    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 3,

    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: 4,

    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
];

const sub__categories = [
  {
    id: 1,
    title: "Stickers",
  },
  {
    id: 2,
    title: "Rims",
  },
  {
    id: 3,
    title: "Decals",
  },
  {
    id: 4,
    title: "Seats",
  },
  {
    id: 5,
    title: "Tires",
  },
];

const ProductLists = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const address = [];
  const [sortPrice, setSortPrice] = useState("--");
  const [checkSubs, setCheckSubs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (let i = 0; i < id.length; i++) {
    if (id.charAt(i) !== ":" && id.charAt(i) !== "%" && id.charAt(i) !== " ") {
      address.push(id.charAt(i));
    }
  }
  const isAdress = address.join("");

  // console.log(address.join("") === "Motor");

  const handleChange = (event) => {
    setSortPrice(event.target.value);
  };
  const handleSubChange = (e) => {
    if (!checkSubs.includes(e)) {
      setCheckSubs([...checkSubs, e]);
    } else {
      setCheckSubs(checkSubs.filter((item) => item !== e));
    }
  };
  useEffect(() => {
    console.log(checkSubs);
  }, [checkSubs]);

  return (
    <div
      className={styles.productlists}
      id={theme === "Light" ? "light" : "dark"}
    >
      <Navbar mouse={true} />
      <div className={styles.main__wrapper}>
        <div className={styles.search__filter}>
          <div className={styles.search__filter__title}>
            <h2>{isAdress}</h2>
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
                  <input type="number" placeholder="₱ Min" />
                  <p>---</p>
                  <input type="number" placeholder="₱ Max" />
                </div>
                <button className={styles.apply__button}>Apply</button>
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
        <div className={styles.left__side}>
          <div className={styles.sort__by}>
            <p>Sort By</p>

            <div>
              <p>Price</p>
              <SortByPrice handleChange={handleChange} sortPrice={sortPrice} />
            </div>
          </div>
          <div className={`${styles.content__container}`}>
            {isAdress === "Motor" &&
              motor__products?.map((item) => {
                return (
                  <a
                    href="#"
                    className={`${styles.wrapper} dark-div-bg`}
                    key={item.id}
                  >
                    <div>
                      <img src={item.img} alt={item.id} width="100px" />
                      <p>{item.title}</p>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductLists;
