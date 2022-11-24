import React from "react";
import { Link } from "react-router-dom";

const firstArrayRT = [
  {
    firstCat: "Pyrénées-Atlantiques",
    secondCat: ["Lac de Montagnon(Aydius)"],
    link: ["/TravelRAll/LacMontagnon"],
  },
  {
    firstCat: "Hautes-Pyrénées",
    secondCat: [
      "Lac des Gloriettes(Gavarnie-Gèdre)",
      "Cirque de Gavarnie",
      "Lac de l'Oule(Aragnouet)",
      "Lac d'Estom (Cauterets)",
      "Lac de Bareille (Bourg-d'Oueil)",
    ],
    link: [
      "/LacGloriettes",
      "/CirqGavarnie",
      "/LacOule",
      "/LacEstom",
      "/LacBareille",
    ],
  },
  {
    firstCat: "Hautes-Garonne",
    secondCat: ["Lac d'Ôo (Ôo)"],
    link: ["/LacÔo"],
  },
  {
    firstCat: "Pyrénées-Orientales",
    secondCat: ["Gorge de Calamus (Saint-antoine de Galamus)"],
    link: ["/GorgCalamus"],
  },
];
/*"Ariège" */

export class CategoryRT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: firstArrayRT,
      open: true,
    };
  }

  toggleSecondCat = (e) => {
    e.preventDefault();
    const sCat = document.querySelectorAll(".second-category");
    const key = e.target.dataset.value;
    if (!sCat[key].classList.contains("wout")) {
      sCat[key].style.opacity = "0";
      setTimeout(() => {
        sCat[key].classList.add("wout");
      }, 320);
    } else {
      sCat[key].classList.remove("wout");
      sCat[key].style.opacity = "1";
    }

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
        <div className="second-category wout" key={index} data-value={index}>
          <div className="box-content-second">
            <Link
              to={item.link.map((l) => {
                console.log(Link.to);
                return l;
              })}
              key={index}
            >
              {item.secondCat.map((value, index) => {
                return (
                  <p key={index} className="content-second-category">
                    {value}
                  </p>
                );
              })}
            </Link>
          </div>
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
