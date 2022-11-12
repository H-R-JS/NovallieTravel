import React from "react";
import { Link } from "react-router-dom";

const CategoryArrayRT = [
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

export class CategoryRT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondClass: "second-category",
    };
  }

  toggleSecondCat = () => {
    if (this.state.secondClass === "second-category") {
      this.setState({ secondClass: "out" });
    } else {
      this.setState({ secondClass: "second-category" });
    }
  };

  renderChildrenView = (item, index) => {
    return (
      <div key={index} className="box-category">
        <div className="first-category" onClick={this.toggleSecondCat}>
          <p className="content-first-category">{item.firstCat}</p>
        </div>
        <div className={this.state.secondClass}>
          {item.secondCat.map((value, index) => {
            return (
              <div key={index} className="box-content-second">
                <Link to={`/${value}`} className="link-underline">
                  <p className="content-second-category">{value}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );

    /**Faire en sorte que les second category s'ouvre uniquement par box et non unanimement */
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
