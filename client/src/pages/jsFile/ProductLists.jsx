import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Body from "../../components/jsFile/Body";
import Footer from "../../components/jsFile/Footer";
import Navbar from "../../components/jsFile/Navbar";
import SearchByFilter from "../../components/jsFile/SearchByFilter";
import SortByPrice from "../../components/jsFile/SortByPrice";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import styles from "../styles/ProductLists.module.scss";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useMediaQuery } from "react-responsive";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProductTableList from "../../components/jsFile/ProductTableList";

const motor__products = [
  {
    id: 1,
    title:
      "16 pcs Reflective Car Motor Wheel Hub Rim Stripe Tape Decal Stickers Accessories",
    img: "https://i.ebayimg.com/images/g/HLwAAOSwOBBhAP2Y/s-l1600.jpg",
    sub_cat: "Stickers",
    price: 8.99,
    type: "Auction",
  },
  {
    id: 2,
    title: "10 x 1.75 Flat Tread Wagon Tire 2 PK",
    img: "https://i.ebayimg.com/images/g/5r0AAOSweR1egVb2/s-l1600.jpg",
    sub_cat: "Tires",
    price: 26.87,
    type: "Buy Now",
  },
  {
    id: 3,
    title:
      "KKE 21/19 MX Wheels Rims For SUZUKI RM125 96-07 RM250 96-07 Motor CNC Gold Hubs",
    img: "https://i.ebayimg.com/images/g/5IcAAOSwhgRfQH2k/s-l1600.jpg",
    sub_cat: "Rims",
    price: 629.0,
    type: "Auction",
  },
  {
    id: 4,
    title: "Yamaha 300 four stroke V6 Shadow Outboard motor decals.",
    img: "https://i.ebayimg.com/images/g/vR0AAOSwzrZemEZL/s-l1600.jpg",
    sub_cat: "Decals",
    price: "27.99",
    type: "Buy Now",
  },
];
const food_beverages__products = [
  {
    id: 1,
    title:
      "Kagan Spicy Suka Kagan Spicy Suka Kagan Spicy Suka Kagan Spicy Suka Kagan Spicy Suka Kagan Spicy Suka",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/287319435_589775396057445_8339241769222489705_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdpsuWsIvRNf1EEtGStidME-KYY-iElUoT4phj6ISVSjosNGIY8ITuME1UgPeh9R0B2RQsotJcFdNamaiEx8aE&_nc_ohc=AQEBtxfQnUsAX_lN4iq&tn=PRN1RgDyq-arcBVn&_nc_ht=scontent-ort2-2.xx&oh=00_AT-HnwKdWdgxOdJvpGMp4cqOgHeuktJ5wOMG7TpNAgp0ww&oe=62C471E8",
    sub_cat: "Condiments",
    price: 150,
    type: "Buy Now",
  },
  {
    id: 2,
    title: "Karne Baka",
    img: "https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg",
    sub_cat: "Meats",
    price: 350,
    type: "Buy Now",
  },
  {
    id: 3,
    title: "Kangkong",
    img: "https://cdn.shopify.com/s/files/1/1891/5035/products/Kankong_x700.jpg?v=1654209710",
    sub_cat: "Vegetables",
    price: 20,
    type: "Buy Now",
  },
  {
    id: 4,
    title: "Vitamilk",
    img: "https://i.ebayimg.com/images/g/WlEAAOSw6YxiO5MJ/s-l500.png",
    sub_cat: "Drinks",
    price: 20,
    type: "Buy Now",
  },
];
const appliances__products = [
  {
    id: 1,
    title: "Kagan Spicy Suka ",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/287319435_589775396057445_8339241769222489705_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdpsuWsIvRNf1EEtGStidME-KYY-iElUoT4phj6ISVSjosNGIY8ITuME1UgPeh9R0B2RQsotJcFdNamaiEx8aE&_nc_ohc=AQEBtxfQnUsAX_lN4iq&tn=PRN1RgDyq-arcBVn&_nc_ht=scontent-ort2-2.xx&oh=00_AT-HnwKdWdgxOdJvpGMp4cqOgHeuktJ5wOMG7TpNAgp0ww&oe=62C471E8",
    sub_cat: "Condiments",
    price: 150,
    type: "Buy Now",
  },
  {
    id: 2,
    title: "Karne Baka",
    img: "https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg",
    sub_cat: "Meats",
    price: 350,
    type: "Buy Now",
  },
  {
    id: 3,
    title: "Kangkong",
    img: "https://cdn.shopify.com/s/files/1/1891/5035/products/Kankong_x700.jpg?v=1654209710",
    sub_cat: "Vegetables",
    price: 20,
    type: "Buy Now",
  },
  {
    id: 4,
    title: "Vitamilk",
    img: "https://i.ebayimg.com/images/g/WlEAAOSw6YxiO5MJ/s-l500.png",
    sub_cat: "Drinks",
    price: 20,
    type: "Buy Now",
  },
];
const clothing__products = [
  {
    id: 1,
    title: "Kagan Spicy Suka",
    img: "https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/287319435_589775396057445_8339241769222489705_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEdpsuWsIvRNf1EEtGStidME-KYY-iElUoT4phj6ISVSjosNGIY8ITuME1UgPeh9R0B2RQsotJcFdNamaiEx8aE&_nc_ohc=AQEBtxfQnUsAX_lN4iq&tn=PRN1RgDyq-arcBVn&_nc_ht=scontent-ort2-2.xx&oh=00_AT-HnwKdWdgxOdJvpGMp4cqOgHeuktJ5wOMG7TpNAgp0ww&oe=62C471E8",
    sub_cat: "Condiments",
    price: 150,
    type: "Buy Now",
  },
  {
    id: 2,
    title: "Karne Baka",
    img: "https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg",
    sub_cat: "Meats",
    price: 350,
    type: "Buy Now",
  },
  {
    id: 3,
    title: "Kangkong",
    img: "https://cdn.shopify.com/s/files/1/1891/5035/products/Kankong_x700.jpg?v=1654209710",
    sub_cat: "Vegetables",
    price: 20,
    type: "Buy Now",
  },
  {
    id: 4,
    title: "Vitamilk",
    img: "https://i.ebayimg.com/images/g/WlEAAOSw6YxiO5MJ/s-l500.png",
    sub_cat: "Drinks",
    price: 20,
    type: "Buy Now",
  },
];

const motor__sub__categories = [
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
const food__beverages__sub__categories = [
  {
    id: 1,
    title: "Condiments",
  },
  {
    id: 2,
    title: "Meats",
  },
  {
    id: 3,
    title: "Vegetables",
  },
  {
    id: 4,
    title: "Drinks",
  },
];
const appliances__sub__categories = [
  {
    id: 2,
    title: "Kitchen Utensils",
  },
  {
    id: 3,
    title: "Cooking Appliances",
  },
  {
    id: 4,
    title: "Washing Appliances",
  },
  {
    id: 5,
    title: "Cleaning Appliances",
  },
];
const clothing__sub__categories = [
  {
    id: 1,
    title: "Muslim Dress",
  },
  {
    id: 2,
    title: "T-shirts",
  },
  {
    id: 3,
    title: "Shorts",
  },
  {
    id: 4,
    title: "Shoes",
  },
];

const ProductLists = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const address = [];
  const [sortPrice, setSortPrice] = useState("--");
  const [checkSubs, setCheckSubs] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [view, setView] = useState(true);
  const isMobile = useMediaQuery({ query: `(max-width: 600px)` });

  useEffect(() => {
    if (isMobile) {
      setView(true);
    }
  }, [isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (let i = 0; i < id.length; i++) {
    if (id.charAt(i) !== ":" && id.charAt(i) !== "%" && id.charAt(i) !== " ") {
      address.push(id.charAt(i));
    }
  }

  const isAdress = address.join("");
  const categories = [];
  for (let i = 0; i < isAdress.length; i++) {
    if (isAdress[i] !== "&") {
      categories.push(isAdress[i]);
    }
  }
  const formattedName = categories.join("").concat("__products");
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

  const handlePriceRange = (e) => {
    const target = e.target.value;
    // console.log(e.target.name);
    if (e.target.name === "min") {
      setMinPrice(parseInt(target));
    } else {
      setMaxPrice(parseInt(target));
      // console.log(maxPrice);
    }
  };

  return (
    <div
      className={styles.productlists}
      id={theme === "Light" ? "light" : "dark"}
    >
      {/* header */}
      <Navbar mouse={true} />

      <div className={styles.main__wrapper}>
        <SearchByFilter
          handlePriceRange={handlePriceRange}
          handleSubChange={handleSubChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          sub__categories={
            isAdress === "Motor"
              ? motor__sub__categories
              : isAdress === "Food&Beverages"
              ? food__beverages__sub__categories
              : isAdress === "Appliances"
              ? appliances__sub__categories
              : isAdress === "Clothing"
              ? clothing__sub__categories
              : ""
          }
          isAdress={isAdress}
        />
        <div className={styles.left__side}>
          <div className={styles.sort__by}>
            <div className={styles.sort__by__options}>
              <div>
                <p>Sort By</p>
              </div>
              <div>
                <p>Price</p>
                <SortByPrice
                  handleChange={handleChange}
                  sortPrice={sortPrice}
                />
              </div>
            </div>
            <div className={styles.sort__by__view}>
              <p>View</p>
              {!view ? (
                <FormatListBulletedIcon onClick={() => setView(!view)} />
              ) : (
                <ViewColumnIcon onClick={() => setView(!view)} />
              )}
            </div>
          </div>
          <ProductTableList
            view={view}
            products={
              isAdress === "Motor"
                ? motor__products
                : isAdress === "Food&Beverages"
                ? food_beverages__products
                : isAdress === "Appliances"
                ? appliances__products
                : isAdress === "Clothing"
                ? clothing__products
                : ""
            }
          />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductLists;
