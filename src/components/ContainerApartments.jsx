import React from "react";
import Card from "./Card.jsx";
import "../styles/ContainerApartments.scss";
import logements from "../datas/logements.json";
function ContainerApartments() {
  return (
    <div className="container">
      {logements.map((logement) => (
        <Card
          title={logement.title}
          cover={logement.cover}
          id={logement.id}
          key={logement.id + logement.title}
        />
      ))}
    </div>
  );
}

export default ContainerApartments;
