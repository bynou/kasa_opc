import React from "react";
import "../styles/Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="apartment">
      <Link to={{ pathname: "/logement/" + props.id }}>
        <img src={props.cover} alt={props.title} />
        <div className="apartment_title">{props.title}</div>
      </Link>
    </div>
  );
}

export default Card;
