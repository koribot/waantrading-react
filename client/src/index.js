import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/globalStyles/index.scss";
import { Theme } from "./helpers/Contexts/Themecontext";

// import { User } from "./helpers/userContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Theme>
    <App />
  </Theme>
);
