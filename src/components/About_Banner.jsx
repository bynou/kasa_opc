import React from "react";
import "../styles/About_Banner.scss";

import SlideShow from "./SlideShow";
function About_Banner(props) {
  return (
    <div className="About_Banner">
      <SlideShow pictures={props.pictures} />
    </div>
  );
}

export default About_Banner;
