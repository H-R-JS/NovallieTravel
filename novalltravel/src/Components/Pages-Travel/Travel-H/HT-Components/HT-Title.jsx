import React from "react";
import { Link } from "react-router-dom";

export function TitleHT() {
  return (
    <div>
      <h1 className="h1-travel">Nos Hôtels</h1>
      <Link className="return" to="/">
        <span className="material-symbols-outlined" id="arrow-return">
          arrow_back
        </span>
        <p>Retour</p>
      </Link>
    </div>
  );
}
