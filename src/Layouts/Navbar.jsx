import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.scss";
function Navbar() {
  //On déclare le tableau menu avec les objets des différents elements
  // de celui-ci, on défini ses chemins et le text
  const navBarItems = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "A Propos" },
  ];
  const navBarItemsDisplay = ({ to, label }) => (
    <li key={to}>
      <NavLink to={to}>{label}</NavLink>
    </li>
  );
  return (
    <header className="navbar">
      <NavLink to="/">
        <div className="navbar_logo">
          <img src={logo} alt="Logo kasa" />
        </div>
      </NavLink>
      <ul>{navBarItems.map(navBarItemsDisplay)}</ul>
    </header>
  );
}

export default Navbar;
