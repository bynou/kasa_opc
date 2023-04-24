import React from "react";
import Description_Panel from "../components/Description_Panel";
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
          <Description_Panel />
          <Description_Panel />
        </section>
      </main>
    </>
  );
}

export default Logements;
