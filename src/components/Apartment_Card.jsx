import React from "react";
import "../styles/Apartment_Card.scss";
import { Link } from "react-router-dom";

function Apartment() {
  return (
    <Link to="/logement">
      <div className="apartment">
        <div className="apartment_title">Titre de la location</div>
      </div>
    </Link>
  );
}

export default Apartment;
