import React from "react";
import "../styles/Description_Panel.scss";

function Description_Panel() {
  return (
    <div className="Description_Panel">
      <p className="Description_Panel_header">
        <span>Description</span>
        <i class="fas fa-chevron-up"></i>
      </p>
      <p className="Description_Panel_content">
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

export default Description_Panel;
