import React from "react";

const arrayPage1 = [
  {
    title: "Lac de Montagnon",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text: "Je suis entrain d'écrire ce texte n'en prenez pas compte svp ça risque d'être gênant",
  },
];

export class LacMontagnon extends React.Component {
  renderChildren = (item, index) => {
    return (
      <div key={index} className="content-page">
        <h1 className="title-page">{item.title}</h1>
        <div className="article-page">
          <img className="image-page" src={item.img} />
          <div className="text-page">
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="all-page">
        <RenderPages dataArray={arrayPage1}>{this.renderChildren}</RenderPages>
      </div>
    );
  }
}

class RenderPages extends React.Component {
  render() {
    const { dataArray } = this.props;
    return (
      <div>
        {dataArray.map((item, index) => {
          return (
            <div key={index} className="container-page">
              {this.props.children(item, index)}
            </div>
          );
        })}
      </div>
    );
  }
}
