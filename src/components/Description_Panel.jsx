import React, { useState } from "react";
import "../styles/Description_Panel.scss";

function Description_Panel(props) {
  const [contentVisibleOff, setContentVisibleOn] = useState(false);
  const displayContent = () => {
    setContentVisibleOn(!contentVisibleOff);
  };
  const contentClass =
    (contentVisibleOff ? "visible" : "hidden") + "description_content";
  const chevronClass =
    (contentVisibleOff ? "fa-chevron-up" : "fa-chevron-down") + " fas";
  return (
    <div className="Description_Panel">
      <p className="Description_Panel_header" onClick={displayContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      {contentVisibleOff && <p className={contentClass}>{props.content}</p>}
    </div>
  );
}

export default Description_Panel;
