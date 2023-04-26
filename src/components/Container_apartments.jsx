import React from "react";
import Apartment_Card from "./Apartment_Card.jsx";
import "../styles/Container_apartments.scss";
import logements from "../datas/logements.json";
function Container_apartments() {
  return (
    <div className="container">
      {logements.map((logement) => (
        <Apartment_Card
          title={logement.title}
          cover={logement.cover}
          id={logement.id}
          key={logement.id + logement.title}
        />
      ))}
    </div>
  );
}

export default Container_apartments;
