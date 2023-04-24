import React from "react";
import "../styles/Logements_header.scss";
function Logements_header() {
  return (
    <div className="logements_header">
      <div className="logements_header_container1">
        <h1 className="logements_header_container1_title_first">
          Cozy Loft on Canal Saint Martin
        </h1>
        <h2 className="logements_header_container1_title_second">
          Paris Île de France
        </h2>
        <div className="logements_header_container1_details">
          <span>Cozy</span>
          <span>Canal</span>
          <span>Paris 10</span>
        </div>
      </div>
      <div className="logements_header_container2">
        <div className="logements_header_container2_details">
          <h3>
            <span>Alexandre</span> <span>Dumas</span>
          </h3>
          <div className="logements_header_container2_details_icon"></div>
        </div>
        <div className="logements_header_container2_stars">
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="on">★</span>
          <span className="off">★</span>
          <span className="off">★</span>
        </div>
      </div>
    </div>
  );
}

export default Logements_header;
