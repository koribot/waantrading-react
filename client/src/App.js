import Home from "./pages/jsFile/Home";
import "../src/globalStyles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/jsFile/Login";
import { useContext, useEffect } from "react";
import Signup from "./pages/jsFile/Signup";
import Cart from "./pages/jsFile/Cart";
import ThemeContext from "./helpers/Contexts/Themecontext";
import "./globalStyles/App.css";
function App() {
  const { theme, modal } = useContext(ThemeContext);

  useEffect(() => {
    theme === "Dark"
      ? (document.body.style.backgroundColor = "black")
      : (document.body.style.backgroundColor = "rgb(216, 209, 209)");
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sell-now" element={<Home />} />
        <Route path="/Log-in" element={<Login />} />
        <Route path="/View-cart" element={<Cart />} />
        <Route path="/Sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
