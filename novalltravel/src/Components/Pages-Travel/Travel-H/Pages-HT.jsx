import React from "react";

const arrayPageHZ = [
  {
    title: "Zenitude",
    img: require("../Img-Pages/hoZen1.jpg"),

    text1:
      " Une chambre d'hôtel agréable avec des aspects luxueux, nous avons prit une chambre en noir et blanc donnant une salle de bains noir et très intimiste. ",
    text2:
      " Une chambre propre, avec un petit balcon. L'acceuil agréable et prêt à aider en cas de problème.",
  },
];

const arrayPageHHT = [
  {
    title: "Hôtel Tourist",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      " Un Hôtel à la décoration typique de la suisse central, avec une décoration en bois très prononcé. ",
    text2:
      " Nous avons prit une chambre pour 2 avec des lits séparé, avec une vu sur les montagnes en fond. La chambre était propre, le seul hic et la douche et les toilettes communautaire.",
  },
];

export class Zenitude extends React.Component {
  renderChildren = (item, index) => {
    return (
      <div key={index} className="content-page">
        <h1 className="title-page">{item.title}</h1>
        <div className="article-page">
          <img className="image-page" src={item.img} />
          <div className="text-page">
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="all-page">
        <RenderPages dataArray={arrayPageHZ}>{this.renderChildren}</RenderPages>
      </div>
    );
  }
}

export class HotelTourist extends React.Component {
  renderChildren = (item, index) => {
    return (
      <div key={index} className="content-page">
        <h1 className="title-page">{item.title}</h1>
        <div className="article-page">
          <img className="image-page" src={item.img} />
          <div className="text-page">
            <p>{item.text1}</p>
            <p>{item.text2}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="all-page">
        <RenderPages dataArray={arrayPageHHT}>
          {this.renderChildren}
        </RenderPages>
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
