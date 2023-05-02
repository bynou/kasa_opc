import React from "react";
import Navbar from "../Layouts/Navbar";
import Main from "../components/Format";
import "../styles/Error404.scss";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <Main>
      {/* <Navbar /> */}
      <div className="error">
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
    </Main>
  );
}

export default Error404;
