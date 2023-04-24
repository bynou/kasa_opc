import React from "react";
import Apartment_Card from "./Apartment_Card.jsx";
import "../styles/Container_apartments.scss";

function Container_apartments() {
  return (
    <div className="container">
      <Apartment_Card />
      <Apartment_Card />
      <Apartment_Card />
      <Apartment_Card />
    </div>
  );
}

export default Container_apartments;
