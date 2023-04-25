import React from "react";
import "../styles/About_Banner.scss";
import About_Banner_img from "../assets/About_Banner_img.png";
function About_Banner() {
  return (
    <div className="About_Banner">
      <img src={About_Banner_img} alt="" />
    </div>
  );
}

export default About_Banner;