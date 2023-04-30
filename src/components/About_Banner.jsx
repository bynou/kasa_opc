import React from "react";
import "../styles/About_Banner.scss";
import SlideShow from "./SlideShow";
import About_Banner_img from "../assets/About_Banner_img.png";
function About_Banner(props) {
  //On verifie la presence de plusieurs pictures pour les afficher,
  //sinon on affiche l'img de la banner
  const pictures = props.pictures ? (
    <SlideShow pictures={props.pictures} />
  ) : (
    <img className="aboutBannerStyle" src={About_Banner_img}></img>
  );
  return <div className="About_Banner">{pictures}</div>;
}

export default About_Banner;
