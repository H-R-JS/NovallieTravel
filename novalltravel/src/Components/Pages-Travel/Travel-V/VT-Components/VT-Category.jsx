import React from "react";
import { Link } from "react-router-dom";
import { ScrollOnTop } from "../../../ScrollOnTop";

const firstArrayVT = [
  {
    firstCat: "Suisse",
    secondCat: [
      {
        secC: "Oeschinensee",
        link: "/Oeschinensee",
      },
      {
        secC: "Gorge de l'Aar",
        link: "/Aareschlucht",
      },
      {
        secC: "Lac de Klausenpass",
        link: "/Klausenpass",
      },
    ],
  },
];
/**HOTEL TOURIST */

export class CategoryVT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: firstArrayVT,
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
        <FirstCategoryVT dataArray={this.state.array}>
          {this.firstRenderChildrenView}
        </FirstCategoryVT>
      </div>
    );
  }
}

class FirstCategoryVT extends React.Component {
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
