import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.scss";
function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar_logo">
          <img src={logo} alt="Logo kasa" />
        </div>
      </NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
    </nav>
  );
}

export default Navbar;
