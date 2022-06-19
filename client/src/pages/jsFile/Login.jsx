import React from "react";
import styles from "../styles/Login.module.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState, useContext } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import { useEffect } from "react";
import emailValidator from "email-validator";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useContext(ThemeContext);
  const route = useNavigate();
  const [userInfo, setUserInfo] = useState({ Email: "", Password: "" });
  const [isButtonDisable, setIsButtonDisable] = useState(true);

  useEffect(() => {
    if (
      userInfo.FirstName !== "" &&
      userInfo.Password !== "" &&
      emailValidator.validate(userInfo.Email) === true &&
      userInfo.Password.length >= 8
    ) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [userInfo]);

  const handleChange = (e) => {
    if (e.target.attributes.placeholder.value === "Email") {
      setUserInfo({
        ...userInfo,
        Email: e.target.value,
      });
    }
    if (e.target.attributes.placeholder.value === "Password") {
      setUserInfo({
        ...userInfo,
        Password: e.target.value,
      });
    }
  };

  return (
    <>
      <div className={styles.arrowBack} onClick={() => route("/")}>
        <ArrowBackOutlinedIcon
          className={theme === "Dark" ? styles.dark : undefined}
        />
        <span className={theme === "Dark" ? styles.dark : undefined}>Home</span>
      </div>
      <div
        className={styles.logform}
        id={theme === "Dark" ? "dark" : undefined}
      >
        <div className={styles.topContainer}>
          <h2>Login to your account</h2>
        </div>
        <form
          onSubmit={(e) => {
            console.log("Submit");
          }}
        >
          <input
            type="text"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <div>
            <input
              type={showPassword ? "text" : "Password"}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <RemoveRedEyeOutlinedIcon />
              )}
            </span>
          </div>

          <button
            type="submit"
            disabled={isButtonDisable}
            className={styles.btn}
          >
            Login
          </button>
        </form>
        <div className={styles.option__container}>
          <a className={styles.forgot} href="/Sign-up">
            Create Account
          </a>
          <a className={styles.forgot} href="/Forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
