import {
  Button,
  MobileStepper,
  Paper,
  Step,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect } from "react";
import styles from "../styles/ImageSlider.module.scss";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { LazyLoadImage } from "react-lazy-load-image-component";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const MyCollection = [
  {
    label: "First Picture",
    imgPath: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  },
  {
    label: "Second Picture",
    imgPath: "https://m.media-amazon.com/images/I/61Ew2L5n2+L._SX3000_.jpg",
  },
  {
    label: "Third Picture",
    imgPath: "https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg",
  },
];

const ImageSlider = () => {
  const CollectionSize = MyCollection.length;
  const [isActiveSlide, setIsActiveSlide] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNextPictureClick, setIsNextPictureClick] = useState(true);
  const [isButtonClick, setIsButtonClick] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  useEffect(() => {
    if (isPlay) {
      if (!isButtonClick) {
        const id = setInterval(() => {
          setIsNextPictureClick(true);
          setCurrentSlide((i) => (i < MyCollection.length - 1 ? i + 1 : 0));
        }, 8000);

        return () => clearInterval(id);
      } else {
        const id2 = setTimeout(() => {
          setIsButtonClick(false);
        }, 1000);
        return () => clearInterval(id2);
      }
    }
  }, [isButtonClick, isPlay]);

  const goToNextPicture = (e) => {
    // const data = document.querySelector("[data-active]");
    // data.dataset.active = true;
    setIsNextPictureClick(true);
    setIsButtonClick(true);
    setCurrentSlide((i) => (i < CollectionSize - 1 ? i + 1 : 0));
  };

  const goToPrevious = () => {
    // const activeSlide = document.querySelector("[data-active]");
    // setIsActiveSlide(true);
    setIsButtonClick(true);
    setIsNextPictureClick(false);
    setCurrentSlide((i) => (i > 0 ? i - 1 : CollectionSize - 1));
  };

  return (
    <section className={`${styles.container} dark-div-bg`}>
      <div className={styles.image__wrapper}>
        <KeyboardArrowLeft
          className={styles.left__arrow}
          onClick={goToPrevious}
        />
        <KeyboardArrowRightIcon
          className={styles.right__arrow}
          onClick={goToNextPicture}
        />
        {isPlay ? (
          <PauseCircleOutlineIcon
            onClick={() => setIsPlay(!isPlay)}
            className={styles.play__icon}
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={() => setIsPlay(!isPlay)}
            className={styles.play__icon}
          />
        )}
        <ul>
          {MyCollection.map((item, i) => {
            return (
              <li
                key={i}
                className={
                  i === currentSlide
                    ? isNextPictureClick
                      ? `${styles.slide} ${styles.current__slide__right}`
                      : `${styles.slide} ${styles.current__slide__left}`
                    : styles.slide
                }
              >
                {i === currentSlide && <LazyLoadImage src={item.imgPath} />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ImageSlider;
