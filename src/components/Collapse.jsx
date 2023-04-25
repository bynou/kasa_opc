import React, { useState } from "react";
import "../styles/Collapse.scss";

function Collapse(props) {
  const [contentVisibleOff, setContentVisibleOn] = useState(false);
  const displayContent = () => {
    setContentVisibleOn(!contentVisibleOff);
  };
  const contentClass =
    (contentVisibleOff ? "visible" : "hidden") + "description_content";
  //Si visible on modifie le chevron en passant par sa classe
  const chevronClass =
    (contentVisibleOff ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div className="Collapse">
      <p className="Collapse_header" onClick={displayContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      {/*Si visible alors affiche contenu de p */}
      {contentVisibleOff && <p className={contentClass}>{props.content}</p>}
    </div>
  );
}

export default Collapse;
