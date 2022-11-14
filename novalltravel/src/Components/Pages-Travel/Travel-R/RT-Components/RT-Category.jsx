import React from "react";
import { Link } from "react-router-dom";

const firstArrayRT = [
  { firstCat: "Pyrénées-Atlantiques", secondCat: ["Lac de Montagnon(Aydius)"] },
  {
    firstCat: "Hautes-Pyrénées",
    secondCat: [
      "Lac des Glorittes(Gavarnie-Gèdre)",
      "Cirque de Gavarnie",
      "Lac de l'Oule(Aragnouet)",
      "Lac d'Estom (Cauterets)",
      "Lac de Bareille (Bourg-d'Oueil)",
    ],
  },
  { firstCat: "Hautes-Garonne", secondCat: ["Lac d'Ôo (Ôo)"] },
  {
    firstCat: "Pyrénées-Orientales",
    secondCat: ["Gorge de Calamus (Saint-antoine de Galamus)"],
  },
];
/*"Ariège" */

const secondCat = document.querySelector(".second-category");
/*const boxCat = secondCat.parentNode;*/

export class CategoryRT extends React.Component {
  /* toggleSecondCat = () => {
    boxCat.classList.add("out");
  };*/

  firstRenderChildrenView = (item, index) => {
    return (
      <div key={index} className="box-category">
        <div className="first-category" /*onClick={this.toggleSecondCat}*/>
          <p className="content-first-category">{item.firstCat}</p>
        </div>
        <div className="second-category">
          <p className="content-second-category">{item.secondCat}</p>
        </div>
      </div>
    );
  };
  /**Mettre un autre composant gérant l'animation */
  render() {
    return (
      <div className="all-category-rt">
        <FirstCategoryRT dataArray={firstArrayRT}>
          {this.firstRenderChildrenView}
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
/*

<SecondCategoryRT dataArray={secondArrayRT}>
            {this.secondRenderChildrenView}
          </SecondCategoryRT>

          
const secondArrayRT = [
  { secondCat: ["Lac de Montagnon(Aydius)"] },
  {
    secondCat: [
      "Lac des Glorittes(Gavarnie-Gèdre)",
      "Cirque de Gavarnie",
      "Lac de l'Oule(Aragnouet)",
      "Lac d'Estom (Cauterets)",
      "Lac de Bareille (Bourg-d'Oueil)",
    ],
  },
  { secondCat: ["Lac d'Ôo (Ôo)"] },
  { secondCat: ["Gorge de Calamus (Saint-antoine de Galamus)"] },
];

secondRenderChildrenView = (item, index) => {
    return (
      <div key={index}>
        <div className="second-category" /*onClick={this.toggleSecondCat}>
          <div className="content-second-category">
            {item.secondCat.map((value, index) => {
              return <p key={index}>{value}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

class SecondCategoryRT extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div>
        {dataArray[0].map((catego, index) => {
          return <div key={index}>{this.props.children(catego, index)}</div>;
        })}
      </div>
    );
  }
}*/
