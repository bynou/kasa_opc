import React, { useEffect, useState } from "react";
import Apartment_Card from "./Apartment_Card.jsx";
import "../styles/Container_apartments.scss";

function Container_apartments() {
  const [logements, setLogements] = useState([]);
  useEffect(CallApi, []);
  function CallApi() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch(console.error);
  }
  return (
    <div className="container">
      {logements.map((logement) => (
        <Apartment_Card title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
}

export default Container_apartments;
