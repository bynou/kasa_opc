import React from "react";
import Banner from "../components/Banner";

import Collapse from "../components/Collapse";

import "../styles/About.scss";
const fiabilitéContent =
  "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérigiées par nos équipes.";
const respectContent =
  "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const serviceContent =
  "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const responsabilitéContent =
  "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
function About() {
  return (
    <>
      <div className="FlexForFooter">
        <Banner />
        <main className="about_container">
          <Collapse title="Fiabilité" content={fiabilitéContent} />
          <Collapse title="Respect" content={respectContent} />
          <Collapse title="Service" content={serviceContent} />
          <Collapse title="Responsabilité" content={responsabilitéContent} />
        </main>
      </div>
    </>
  );
}

export default About;
