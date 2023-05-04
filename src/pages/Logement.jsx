import React, { useEffect, useState } from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import Footer from "../Layouts/Footer";
import Logement_Header from "../components/Logement_Header";
import "../styles/Logement.scss";
import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import Error404 from "./Error404";
import Format from "../components/Format";

function Logement() {
  const params = useParams();
  const [displayLogement, setDisplayLogement] = useState(null);

  //On utilise le hook useEffect  pour lancer une action dès le chargement,
  // du composant
  // prend une fonction + array de dépendance qui se charge uniquement quand le composant
  // est remonté
  useEffect(callLogementData, []);
  function callLogementData() {
    // On récupère seulement les informations
    // du logement precedemment cliqué en utilisant son ID avec find
    const displayLogementUnique = logements.find(
      (logement) => logement.id === params.id
    );
    setDisplayLogement(displayLogementUnique);
  }
  if (displayLogement == null) return <Error404 />;

  return (
    <>
      <Format>
        <main className="logements">
          <Banner
            imgUrl={displayLogement.cover}
            pictures={displayLogement.pictures}
          />
          <Logement_Header
            title={displayLogement.title}
            location={displayLogement.location}
            tags={displayLogement.tags}
            host={displayLogement.host}
            hostImg={displayLogement.host.picture}
            rating={displayLogement.rating}
          />
          <section className="logements_display_description">
            <Collapse
              title="Description"
              content={displayLogement.description}
            />
            <Collapse
              title="Équipements"
              content={displayLogement.equipments.map((stuff, i) => (
                <li key={i}>{stuff}</li>
              ))}
            />
          </section>
        </main>
      </Format>
      <Footer />
    </>
  );
}

export default Logement;
