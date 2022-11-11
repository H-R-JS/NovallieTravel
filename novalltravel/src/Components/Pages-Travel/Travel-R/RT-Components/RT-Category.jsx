import React from "react";

const CategoryArrayRT = [
  { firstCat: "Pyrénées-Atlantiques", secondCat: "lac de montagnon(Aydius)" },
  {
    firstCat: "Hautes-Pyrénées",
    secondCat: [
      "lac des glorittes(Gavarnie-Gèdre)",
      "cirque de Gavarnie",
      "lac de l'oule(Aragnouet)",
      "lac d'Estom (Cauterets)",
      "lac de Bareille (Bourg-d'Oueil)",
    ],
  },
  { firstCat: "Hautes-Garonne", secondCat: "lac d'Ôo (Ôo)" },
  {
    firstCat: "Pyrénées-Orientales",
    secondCat: "Gorge de Calamus (Saint-antoine de Galamus)",
  },
];
/*"Ariège" */

export class CategoryRT extends React.Component {
  renderChildrenView = (item, index) => {
    return (
      <div key={index}>
        <div className="first-category">
          <p className="content-first-category">{item.firstCat}</p>
        </div>
        <div className="second-category">
          <p className="content-second-category">{item.secondCat}</p>
        </div>
      </div>
    );

    /**Mettre un index dans la seconde cat pour que les valeur du tableau soit indépendant */
  };

  render() {
    return (
      <div className="all-category-rt">
        <FirstCategoryRT dataArray={CategoryArrayRT}>
          {this.renderChildrenView}
        </FirstCategoryRT>
      </div>
    );
  }
}

class FirstCategoryRT extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div>
        {dataArray.map((catego, index) => {
          return <div key={index}>{this.props.children(catego, index)}</div>;
        })}
      </div>
    );
  }
}
