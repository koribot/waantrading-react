import React from "react";
import styles from "../styles/Categories.module.scss";

const categories = [
  {
    id: "1",
    name: "Food & Beverages",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPoY4AMsYxpXvKM72an9aSp0lFDvfNZGIK4e_EVlnJb9gAIfkquLs-Kue-iJAHv2L8N8&usqp=CAU",
  },
  {
    id: "2",
    name: "Motor",
    img: "https://previews.123rf.com/images/jackf/jackf1412/jackf141200725/34471246-set-of-motor-and-spare-parts-isolated-on-white-background.jpg",
  },
  {
    id: "3",
    name: "Clothing",
    img: "https://media.gq.com/photos/61d49bb8f347871ea8cd450e/master/pass/basics.jpg",
  },
  {
    id: "4",
    name: "Appliances",
    img: "https://imageio.forbes.com/specials-images/imageserve/615b7a2d10f14c6d90c57d56/Small-appliances-on-a-kitchen-countertop-/960x0.jpg?format=jpg&width=960",
  },
];
const Categories = () => {
  return (
    <div className={`${styles.categories}`}>
      {categories.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${styles.wrapper} dark-div-bg dark-div-shadow`}
          >
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
