import React, { useState } from "react";
function SlideShow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  // On cherche a définir si il y a une ou plusieurs pictures
  // Si seulement 1 picture on n'affiche pas les fleches de navigation
  // En modifiant la classe des btn + span
  const isSlideUnique = props.pictures.length === 1;
  return (
    <>
      <button
        className={isSlideUnique ? "displaySlideOff" : "btn btn-previous"}
        onClick={goToPrevious}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <img
        className="slideBannerStyle"
        src={props.pictures[currentIndex]}
        key={currentIndex}
        alt="logement à louer"
      ></img>
      <button
        className={isSlideUnique ? "displaySlideOff" : "btn btn-next"}
        onClick={goToNext}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className={isSlideUnique ? "displaySlideOff" : ""}>
        {currentIndex + 1}/{props.pictures.length}
      </span>
    </>
  );
}

export default SlideShow;
