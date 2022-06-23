import React from "react";
import styles from "../styles/Signup.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import emailValidator from "email-validator";
import ThemeContext from "../../helpers/Contexts/Themecontext";
import ErrorModal from "../../helpers/modals/Error";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFile, setIsFile] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [infoValid, setInfoValid] = useState(true);
  const [actualImage, setActualImage] = useState(null);
  const [fileError, setFileError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    Password: "",
  });

  const route = useNavigate();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (
      userInfo.FirstName !== "" &&
      userInfo.LastName !== "" &&
      userInfo.Password !== "" &&
      userInfo.Email !== "" &&
      userInfo.Phone !== "" &&
      emailValidator.validate(userInfo.Email) === true &&
      isFile !== false
    ) {
      setInfoValid(false);
    } else {
      setInfoValid(true);
    }
  }, [userInfo, isFile, fileError]);

  //input - NAME - EMAIL - PASSWORD
  const handleChange = (e) => {
    // console.log(e.target.attributes.placeholder.value);
    if (e.target.attributes.placeholder.value === "First Name") {
      setUserInfo({
        ...userInfo,
        FirstName:
          e.target.value.charAt(0).toUpperCase() +
          e.target.value.toLowerCase().slice(1),
      });
    }
    if (e.target.attributes.placeholder.value === "Last Name") {
      setUserInfo({
        ...userInfo,
        LastName:
          e.target.value.charAt(0).toUpperCase() +
          e.target.value.toLowerCase().slice(1),
      });
    }
    if (e.target.attributes.placeholder.value === "0905xxxxxx") {
      setUserInfo({ ...userInfo, Phone: e.target.value });
    }
    if (e.target.attributes.placeholder.value === "Email") {
      setUserInfo({ ...userInfo, Email: e.target.value });
    }
    if (e.target.attributes.placeholder.value === "Password") {
      setUserInfo({ ...userInfo, Password: e.target.value });
    }
  };

  //Image Upload
  const handleFile = (e) => {
    const data = e.target.files;
    if (data.length > 0) {
      if (data[0].type === "image/jpeg" || data[0].type === "image/png") {
        setActualImage(data[0]);
        setIsFile(true);
        setImageUrl(URL.createObjectURL(data[0]));
        setFileError(false);
      } else {
        setFileError(true);
        setActualImage(null);
        setIsFile(false);
        setImageUrl(null);
        e.target.value = null;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <div className={styles.arrowBack} onClick={() => route("/")}>
        <ArrowBackOutlinedIcon
          className={theme === "Dark" ? styles.dark : undefined}
        />
        <span className={theme === "Dark" ? styles.dark : undefined}>Home</span>
      </div> */}

      <div
        className={styles.logform}
        id={theme === "Dark" ? "dark" : undefined}
      >
        <div className={styles.topContainer}>
          <h2>Create Your Account</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className={styles.inputContainer}>
            <input
              name="First Name"
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              required
              autoCapitalize="true"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Phone and Email */}
          <div className={styles.inputContainer2}>
            <input
              onChange={handleChange}
              type="tel"
              id="phone"
              name="phone"
              placeholder="0905xxxxxx"
              pattern="[0-9]{11}"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
            />
          </div>

          {/* Password */}
          <div className={styles.passwordContainer}>
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              minLength={8}
            />

            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <RemoveRedEyeOutlinedIcon />
              )}
            </span>
          </div>

          {/* Upload and Preview Profile Image */}
          <div className={styles.uploadImage}>
            <label htmlFor="inputfile">
              {isFile ? (
                <img src={imageUrl} alt="previewProfileImage" />
              ) : (
                <FaceRoundedIcon />
              )}

              {fileError && (
                <ErrorModal
                  type={"Error Invalid File"}
                  message={"Valid Image: PNG/JPEG"}
                  setFileError={setFileError}
                />
              )}
              <p>Upload Image</p>
            </label>

            <input
              id="inputfile"
              className="profile"
              type="file"
              hidden={true}
              accept="image/*"
              style={{ display: "none" }}
              onInput={handleFile}
            />
          </div>

          <button type="submit" disabled={infoValid} className={styles.btn}>
            Create Account
          </button>
        </form>

        {/* Helpful Links */}
        <div className={styles.helpfullinks}>
          <a className={styles.forgot} href="/Log-in">
            Already Have An Account? Login here
          </a>
        </div>
      </div>
    </>
  );
};

export default Signup;
