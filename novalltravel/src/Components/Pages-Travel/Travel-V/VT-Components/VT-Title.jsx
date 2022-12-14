import React from "react";
import { Link } from "react-router-dom";

export function TitleVT() {
  return (
    <div>
      <h1 className="h1-travel">Nos Voyages</h1>
      <Link className="return" to="/">
        <span className="material-symbols-outlined" id="arrow-return">
          arrow_back
        </span>
        <p>Retour</p>
      </Link>
    </div>
  );
}
