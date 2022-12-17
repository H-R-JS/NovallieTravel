import React from "react";
import { Link } from "react-router-dom";

export function TitleHT() {
  return (
    <div className="all-title">
      <h1 className="h1-travel">Nuits d'Hôtels</h1>
      <Link className="return" to="/">
        <span className="material-symbols-outlined" id="arrow-return">
          arrow_back
        </span>
        <p>Retour</p>
      </Link>
    </div>
  );
}
