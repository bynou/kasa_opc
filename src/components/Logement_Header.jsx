import React from "react";
import "../styles/Logements_Header.scss";
import Tags from "./Tags";
import Ratings from "./Ratings";
function Logement_Header(props) {
  //On fait du détructuring pour séparer le prénom/nom pour la
  // mise en page en deux span
  const [firstName, lastName] = props.host.name.split(" ");
  return (
    <div className="logements_header">
      <div className="logements_header_container1">
        <h1 className="logements_header_container1_title_first">
          {props.title}
        </h1>
        <h2 className="logements_header_container1_title_second">
          {props.location}
        </h2>
        <Tags tags={props.tags} />
      </div>
      <div className="logements_header_container2">
        <div className="logements_header_container2_details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="logements_header_container2_details_icon">
            <img src={props.hostImg} alt="Photo de profil" />
          </div>
        </div>
        <Ratings rating={props.rating} />
      </div>
    </div>
  );
}

export default Logement_Header;
