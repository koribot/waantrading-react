import React, { useContext } from "react";
import { useParams } from "react-router";
import Body from "../../components/jsFile/Body";
import Footer from "../../components/jsFile/Footer";
import Navbar from "../../components/jsFile/Navbar";
import ThemeContext from "../../helpers/Contexts/Themecontext";

const ProductLists = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  console.log(window.location.hash);
  return (
    <div id={theme === "Light" ? "light" : "dark"}>
      <Navbar mouse={true} />
      <Body show={"categories"} content={id} />
    </div>
  );
};

export default ProductLists;
