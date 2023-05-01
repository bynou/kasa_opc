import React from "react";
import Card from "./Card.jsx";
import "../styles/Container_apartments.scss";
import logements from "../datas/logements.json";
function Container_apartments() {
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

export default Container_apartments;
