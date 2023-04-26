import React from "react";
import "../styles/Apartment_Card.scss";
import { Link } from "react-router-dom";

function Apartment(props) {
  const state = {
    logementId: props.id,
  };
  return (
    <div className="apartment">
      <Link to="/logement" state={state}>
        <img src={props.cover} alt="" />
        <div className="apartment_title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Apartment;
