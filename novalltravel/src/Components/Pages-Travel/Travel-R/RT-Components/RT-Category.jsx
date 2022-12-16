import React from "react";
import { Link } from "react-router-dom";
import { ScrollOnTop } from "../../../ScrollOnTop";

const firstArrayRT = [
  {
    firstCat: "Pyrénées-Atlantiques",
    secondCat: [{ secC: "Lac de Montagnon(Aydius)", link: "/LacMontagnon" }],
  },
  {
    firstCat: "Hautes-Pyrénées",
    secondCat: [
      { secC: "Lac des Gloriettes(Gavarnie-Gèdre)", link: "/LacGloriettes" },
      { secC: "Cirque de Gavarnie", link: "/CirqGavarnie" },
      { secC: "Lac de l'Oule(Aragnouet)", link: "/LacOule" },
      { secC: "Lac d'Estom (Cauterets)", link: "/LacEstom" },
    ],
  },
  {
    firstCat: "Hautes-Garonne",
    secondCat: [{ secC: "Lac d'Ôo (Ôo)", link: "/LacÔo" }],
  },
  {
    firstCat: "Pyrénées-Orientales",
    secondCat: [
      {
        secC: "Gorge de Galamus (Saint-antoine de Galamus)",
        link: "/GorgeGalamus",
      },
    ],
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
            {item.secondCat.map((value, index) => {
              return (
                <Link to={value.link} class="link-underline">
                  <p key={index} className="content-second-category">
                    {value.secC}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="all-category-rt">
        <ScrollOnTop />
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
