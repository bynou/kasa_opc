import React from "react";
import Format from "../components/Format";
import "../styles/Error404.scss";
import { Link } from "react-router-dom";
function Error404() {
  return (
    <Format>
      <div className="error">
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
    </Format>
  );
}

export default Error404;
