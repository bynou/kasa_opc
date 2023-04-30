import React from "react";
import "../styles/Apartment_Card.scss";
import { Link } from "react-router-dom";

function Apartment(props) {
  return (
    <div className="apartment">
      <Link
        to={{ pathname: "/Logement", search: "?_id=" + props.id }}
        state={{ logementId: props.id }}
      >
        <img src={props.cover} alt={props.title} />
        <div className="apartment_title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Apartment;
