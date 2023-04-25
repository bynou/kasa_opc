import React from "react";
import Collapse from "../components/Collapse";
import About_Banner from "../components/About_Banner";
import Logements_Header from "../components/Logements_header";
import "../styles/Logements.scss";

function Logements() {
  return (
    <>
      <main className="logements">
        <About_Banner />
        <Logements_Header />
        <section className="logements_display_description">
          <Collapse />
          <Collapse />
        </section>
      </main>
    </>
  );
}

export default Logements;
