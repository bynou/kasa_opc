import React from "react";
import Home_Banner from "../components/Home_Banner";
import Container_apartments from "../components/Container_apartments";

import "../styles/Home.scss";
function Home() {
  return (
    <>
      <Home_Banner />
      <Container_apartments />
    </>
  );
}

export default Home;
