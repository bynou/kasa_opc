import React from "react";
import Logement_Description from "../components/Logements_Description";
import Logements_Banner from "../components/Logements_Banner";
import Logements_Header from "../components/Logements_header";
import "../styles/Logements.scss";

function Logements() {
  return (
    <>
      <main className="logements">
        <Logements_Banner />
        <Logements_Header />
        <section className="logements_display_description">
          <Logement_Description />
          <Logement_Description />
        </section>
      </main>
    </>
  );
}

export default Logements;
