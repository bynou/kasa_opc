import React from "react";
import "../styles/Format.scss";
//Permet de définir les dimensions globales du site
function Format({ children }) {
  return <div className="Format">{children}</div>;
}

export default Format;
