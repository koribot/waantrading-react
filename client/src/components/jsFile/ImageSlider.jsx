import {
  Button,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useEffect } from "react";
import styles from "../styles/ImageSlider.module.scss";
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
  const [stopInterval, setStopInterval] = useState(false);

  useEffect(() => {
    const intv = setInterval(() => {
      setActiveStep(index < MyCollection.length - 1 ? index + 1 : 0);
    }, 9000);

    return () => clearInterval(intv);
  }, [index]);

  const goToNextPicture = () => {
    setActiveStep(index < MyCollection.length - 1 ? index + 1 : 0);
  };
  const goToPrevious = () => {
    setActiveStep(index > 0 ? index - 1 : MyCollection.length - 1);
  };

  return (
    <div className={`${styles.container} darkdiv`}>
      <Paper square elevation={0} className={styles.header}>
        <Typography className={styles.title}>Featured Products</Typography>
      </Paper>
      <img
        src={MyCollection[index].imgPath}
        style={{
          width: "1140px",
          maxHeight: "472px",
          display: "block",
          overflow: "hidden",
          objectFit: "contain",
        }}
        alt={MyCollection[index].label}
      />
      <MobileStepper
        position="static"
        index={index}
        steps={CollectionSize}
        activeStep={index}
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
