import React from "react";
import logo from "../assets/footer_logo.svg";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de bas de page" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
