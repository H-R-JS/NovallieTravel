import React from "react";

const FirstArrayRT = [
  "Pyrénées-Atlantiques",
  "Hautes-Pyrénées",
  "Hautes-Garonne",
  "Ariège",
  "Pyrénées-Orientales",
];

const SecondArrayRT = [];

export class CategoryRT extends React.Component {
  renderChildrenView = (item, index) => {
    return (
      <div className="content-first-category" key={index}>
        <p>{item}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="all-category-rt">
        <FirstCategoryRT dataArray={FirstArrayRT}>
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
      <div className="">
        {dataArray.map((catego, index) => {
          return (
            <div key={index} className="first-category">
              {this.props.children(catego, index)}
            </div>
          );
        })}
      </div>
    );
  }
}
