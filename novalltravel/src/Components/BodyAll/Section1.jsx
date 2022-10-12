import React from "react";

export function Section1() {
  return (
    <div className="section1-background">
      <div className="section-title-all">
        <h2>Randonnées et Voyage</h2>
        <p>
          Vous trouverez nos randonnées et voyage parcouru dans ces sections,
          choissisez et trouver les informations qui vous intéresse.
        </p>
      </div>
      <div className="section-category r"></div>
      <p className="title-box1">Randonnées</p>
      <div className="section-category v"></div>
      <p className="title-box2">Voyage</p>
      <div className="text-end-section">
        <p>
          Pour avoir toutes les infos sur les randonnées parcouru, c'est ici.
          Pour le moment, nous avons seulement parcouru des randonnées dans les
          pyrénnées côté France, n'hésitez pas à me conseiller des randonnées
          sur mon instagram !
        </p>
      </div>
    </div>
  );
}
