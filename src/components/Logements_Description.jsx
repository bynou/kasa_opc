import React from "react";
import "../styles/LogementsDescription.scss";

function LogementDescription() {
  return (
    <div className="logements_description">
      <p className="logements_description_header">
        <span>Description</span>
        <i className="fas fa-chevron-down"></i>
      </p>
      <p className="logements_description_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        accusamus molestiae, consectetur placeat temporibus et blanditiis illum
        ipsam sit laborum omnis officia libero tempore atque repellat! Amet
        voluptatibus a, odit, esse voluptate officia nulla fuga ipsam sed illum
        cupiditate cum optio tenetur quia ducimus accusamus nobis reprehenderit
        exercitationem quod iste?
      </p>
    </div>
  );
}

export default LogementDescription;
