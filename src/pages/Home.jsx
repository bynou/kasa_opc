import React from "react";
import HomeBanner from "../components/HomeBanner";
import Footer from "../Layouts/Footer";
import ContainerApartments from "../components/ContainerApartments";
import Format from "../components/Format";

function Home() {
  return (
    <>
      <div className="FlexForFooter">
        <Format>
          <HomeBanner />
          <ContainerApartments />
        </Format>
        <Footer />
      </div>
    </>
  );
}

export default Home;
