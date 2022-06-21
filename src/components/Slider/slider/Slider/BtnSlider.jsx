import React from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BtnSlider({ direction, moveSlide }) {

  const replaceImg = (e) => {
    e.preventDefault()
    moveSlide()
  }
  return (
    <button
      onClick={(e) => { replaceImg(e) }}
      className={direction === "next" ? "btn-slide1 next" : "btn-slide1 prev"}
    >
      {direction === "next" ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
    </button>
  );
}
