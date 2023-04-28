import React, { useState } from "react";
import About_Banner_img from "../assets/About_Banner_img.png";
function SlideShow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = props.pictures ? props.pictures : About_Banner_img;

  // On définit ici les fonctions pour iterer sur le array picture

  const goToPrevious = () => {
    // ici on cherche a savoir si on est a la premiere picture
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? props.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    // ici on cherche a savoir si on est a la derniere picture
    const isLastSlide = currentIndex === props.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <button className="btn-previous" onClick={goToPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <img src={pictures[currentIndex]} key={currentIndex}></img>
      <button className="btn-next" onClick={goToNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </>
  );
}

export default SlideShow;
