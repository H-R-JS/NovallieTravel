import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const firstArrayRT = [
  {
    firstCat: "Pyrénées-Atlantiques",
    secondCat: ["Lac de Montagnon(Aydius)"],
    id: "0",
  },
  {
    firstCat: "Hautes-Pyrénées",
    secondCat: [
      "Lac des Glorittes(Gavarnie-Gèdre)",
      "Cirque de Gavarnie",
      "Lac de l'Oule(Aragnouet)",
      "Lac d'Estom (Cauterets)",
      "Lac de Bareille (Bourg-d'Oueil)",
    ],
    id: "1",
  },
  { firstCat: "Hautes-Garonne", secondCat: ["Lac d'Ôo (Ôo)"], id: "2" },
  {
    firstCat: "Pyrénées-Orientales",
    secondCat: ["Gorge de Calamus (Saint-antoine de Galamus)"],
    id: "3",
  },
];
/*"Ariège" */

const secondCat = document.querySelector(".second-category");
/*const boxCat = secondCat.parentNode;*/

function Fade({ visible, children }) {
  let className = "fade";
  if (!visible) {
    className += " out";
  }
  return <div className={className}>{children}</div>;
}

export class CategoryRT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: firstArrayRT,
      open: true,
      secondClass: "second-category",
    };
  }

  toggle = () => {
    this.setState({ open: false });
  };

  toggleSecondCat = (e) => {
    e.preventDefault();
    const sCat = document.querySelectorAll(".second-category");
    const key = e.target.dataset.value;
    /*const categoryTwo = e.target.nextSibling.className;*/
    /*let CfirstArrayRT = [...firstArrayRT];
    CfirstArrayRT[key].secondCat.splice(0, 5);
    this.setState({ array: CfirstArrayRT });
    console.log(CfirstArrayRT);*/
    sCat[key].classList.add("wout");
    console.log(sCat[key]);
  };
  /**How change attribut in react on array map ou combiner fade and dataset value */

  firstRenderChildrenView = (item, index) => {
    return (
      <div key={index} className="box-category">
        <div
          className="first-category"
          data-value={index}
          onClick={this.toggleSecondCat}
        >
          <p className="content-first-category">{item.firstCat}</p>
        </div>
        <div className="second-category" key={index} data-value={index}>
          <Fade visible={this.state.open}>
            <div className="box-content-second">
              {item.secondCat.map((value, index) => {
                return (
                  <p key={index} className="content-second-category">
                    {value}
                  </p>
                );
              })}
            </div>
          </Fade>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="all-category-rt">
        <FirstCategoryRT dataArray={this.state.array}>
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
