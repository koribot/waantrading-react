import React from "react";
import Navbar from "../../components/jsFile/Navbar";
import "../styles/Home.scss";
import { useContext } from "react";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import Footer from "../../components/jsFile/Footer";
import Body from "../../components/jsFile/Body";
const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id={theme === "Light" ? "light" : "dark"} className="home__container">
      <Navbar mouse={true} />
      <Body show={"main"} />
      <Footer />
    </div>
  );
};

export default Home;
