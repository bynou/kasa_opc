import React from "react";
import Home_Banner from "../components/Home_Banner";
import Footer from "../Layouts/Footer";
import Container_apartments from "../components/Container_apartments";
import Format from "../components/Format";
import "../styles/Home.scss";
function Home() {
  return (
    <>
      <div className="FlexForFooter">
        <Format>
          <Home_Banner />
          <Container_apartments />
        </Format>
        <Footer />
      </div>
    </>
  );
}

export default Home;
