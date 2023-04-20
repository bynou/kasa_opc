import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Container_apartments from "../components/Container_apartments";
import Main from "../components/Main";
import "../styles/Home.scss";
function Home() {
  return (
    <>
      <Main>
        <Navbar />
        <Banner />
        <Container_apartments />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
