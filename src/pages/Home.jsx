import React from "react";

import Banner from "../components/Banner";

import Container_apartments from "../components/Container_apartments";
import Main from "../components/Main";
import "../styles/Home.scss";
function Home() {
  return (
    <>
      <Main>
        <Banner />
        <Container_apartments />
      </Main>
    </>
  );
}

export default Home;
