import React from "react";
import About_Banner from "../components/About_Banner";
import Description_Panel from "../components/Description_Panel";
import "../styles/About.scss";
function About() {
  return (
    <>
      <About_Banner />
      <main className="about_container">
        <Description_Panel />
        <Description_Panel />
        <Description_Panel />
        <Description_Panel />
      </main>
    </>
  );
}

export default About;
