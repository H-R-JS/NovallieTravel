import React from "react";
import { Link } from "react-router-dom";

export function TitleMT() {
  return (
    <div>
      <h1 className="h1-travel"> Balade sur bord de Mer</h1>
      <Link className="return" to="/">
        <span className="material-symbols-outlined" id="arrow-return">
          arrow_back
        </span>
        <p>Retour</p>
      </Link>
    </div>
  );
}
