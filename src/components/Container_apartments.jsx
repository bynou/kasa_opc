import React, { useEffect, useState } from "react";
import Apartment_Card from "./Apartment_Card.jsx";
import "../styles/Container_apartments.scss";
import logements from "../datas/logements.json";
function Container_apartments() {
  // const [logements, setLogements] = useState([]);
  // useEffect(CallApi, []);
  // function CallApi() {
  //   const resultat = ("../datas/logements.json");
  //   setLogements(resultat);
  // .then((res) => console.log(res))
  // .catch(console.error);
  // }

  console.log(logements);
  return (
    <div className="container">
      {logements.map((logement) => (
        <Apartment_Card title={logement.title} cover={logement.cover} />
      ))}
    </div>
  );
}

export default Container_apartments;
