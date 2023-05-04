import React from "react";
import "../styles/Banner.scss";
import SlideShow from "./SlideShow";
import About_Banner_img from "../assets/About_Banner_img.png";
function Banner(props) {
  //On verifie la presence de plusieurs pictures pour les afficher,
  //sinon on affiche l'img de la banner par default
  const pictures = props.pictures ? (
    <SlideShow pictures={props.pictures} />
  ) : (
    <img
      className="aboutBannerStyle"
      alt="Bannière du site Kasa"
      src={About_Banner_img}
    ></img>
  );
  return <div className="Banner">{pictures}</div>;
}

export default Banner;
