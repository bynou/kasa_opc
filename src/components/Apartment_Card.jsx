import React from "react";
import "../styles/Apartment_Card.scss";
import { Link } from "react-router-dom";

function Apartment(props) {
  console.log("hello props dans apartment card:", props);
  return (
    <div className="apartment">
      <img src={props.cover} alt="" />

      <div className="apartment_title">
        <Link to="/logement">{props.title}</Link>
      </div>
    </div>
  );
}

export default Apartment;
