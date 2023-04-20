import React from "react";
import Apartment from "./Apartment.jsx";
import "../styles/Container_apartments.scss";

function Container_apartments() {
  return (
    <div className="container">
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </div>
  );
}

export default Container_apartments;
