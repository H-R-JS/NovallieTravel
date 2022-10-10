import React from "react";

export function Section1() {
  return (
    <div>
      <div className="section-title-all">
        <h2>Randonnées et Voyage</h2>
        <p>
          Vous trouverez nos randonnées et voyage parcouru dans ces sections,
          choissisez et trouver les informations qui vous intéresse.
        </p>
      </div>
      <div className="section-category r">
        <p>RANDONNEES</p>
      </div>
      <div className="section-category v">
        <p>VOYAGE</p>
      </div>
      <p className="limit">.</p>
    </div>
  );
}
