import React from "react";
import { Link } from "react-router-dom";

const firstArrayHT = [
  {
    firstCat: "France",
    secondCat: [
      {
        secC: "Zenitude Hôtel-Residences",
        link: "/hoZenitude",
      },
    ],
  },
  {
    firstCat: "Suisse",
    secondCat: [
      {
        secC: "Hôtel Tourist",
        link: "/hoTourist",
      },
    ],
  },
];
/**HOTEL TOURIST */

export class CategoryHT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: firstArrayHT,
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
                <Link to={value.link}>
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
        <FirstCategoryHT dataArray={this.state.array}>
          {this.firstRenderChildrenView}
        </FirstCategoryHT>
      </div>
    );
  }
}

class FirstCategoryHT extends React.Component {
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
