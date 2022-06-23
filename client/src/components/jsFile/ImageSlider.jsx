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
  const theme = useTheme();
  const [index, setActiveStep] = useState(0);
  const [transition, setShowTransition] = useState(false);
  const [addClasslist, setAddClasslist] = useState(false);
  const image = document.getElementById("image");
  const [isButtonNext, setIsButtonNext] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  //increment index,
  useEffect(() => {
    if (isPlay) {
      if (!isButtonNext) {
        const id = setInterval(() => {
          setActiveStep((i) => (i < MyCollection.length - 1 ? i + 1 : 0));
        }, 8000);

        return () => window.clearInterval(id);
      } else {
        const id = setTimeout(() => {
          setIsButtonNext(false);
        }, 2000);

        return () => window.clearTimeout(id);
      }
    }
  }, [isButtonNext, isPlay]);

  useEffect(() => {
    setShowTransition(true);
    const id = setTimeout(() => {
      setShowTransition(false);
    }, 1000);

    return () => window.clearTimeout(id);
  }, [index]);

  const goToNextPicture = (e) => {
    setIsButtonNext(true);
    setShowTransition(false);
    setActiveStep((i) => (i < MyCollection.length - 1 ? i + 1 : 0));
  };
  const goToPrevious = () => {
    setIsButtonNext(true);
    setShowTransition(false);
    setActiveStep((i) => (i > 0 ? i - 1 : MyCollection.length - 1));
  };

  return (
    <div className={`${styles.container} dark-div-bg dark-div-shadow`}>
      <Paper elevation={10} square className={`${styles.header} dark-div-bg`}>
        <Typography className={styles.title}>Products</Typography>
      </Paper>
      <Step>
        <div className={styles.image__container}>
          {isPlay ? (
            <PauseCircleOutlineIcon
              className={styles.pause__icon}
              onClick={() => setIsPlay(!isPlay)}
            />
          ) : (
            <PlayCircleOutlineIcon
              className={styles.pause__icon}
              onClick={() => setIsPlay(!isPlay)}
            />
          )}

          <img
            src={MyCollection[index].imgPath}
            alt={MyCollection[index].label}
            id="image"
            className={`${styles.default__image} ${
              transition ? styles.imagetrans : undefined
            }`}
          />
        </div>
      </Step>
      <MobileStepper
        variant="dots"
        position="static"
        index={index}
        steps={CollectionSize}
        activeStep={index}
        elevation={10}
        className={`${styles.stepper} dark-div-bg`}
        nextButton={
          <Button
            size="small"
            onClick={goToNextPicture}
            //   disabled={index === CollectionSize - 1}
          >
            {theme.direction !== "rtl" ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={goToPrevious}
            //   disabled={index === CollectionSize + 1}
          >
            {theme.direction !== "ltr" ? (
              <KeyboardArrowRightIcon />
            ) : (
              <KeyboardArrowLeftIcon />
            )}
          </Button>
        }
      />
    </div>
  );
};

export default ImageSlider;
