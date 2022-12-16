import React from "react";

const arrayPageMDP = [
  {
    title: "Dune de Pilat",
    img: require("../Img-Pages/hoZen1.jpg"),

    text1:
      " La plus grande dune de France, situé pas loin du bassin d'arcachon, la dune du pilat est un site classé, d'une altitude de plus de 100 m de sable empilé donnant une vue splendide à son sommet. ",
    text2:
      " Plusieurs endroits donne accès à la dune, soit la manière officielle où vous paierez votre place de parking en fonction du temps de stationnement, avec des petits magasins de souvenirs, de glace ou de quoi se nourrir, en sachant qu'un escalier vous aide à monter à son sommet. Soit en passant directement à travers la nature, en montant directement sur le sable ce qui est plus pénible et nécessite plus d'effort physique à cause du sable, de plus cela dépend de la pente que vous escaladez. Peu importe votre manière d'arrivez au sommet, il est conseillé de s'y rendre lors du couché de soleil, donnant un sublime spectacle. ",
  },
];

/*const arrayPageMPN = [
  {
    title: "Port-La-Nouvelle",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      " Un Hôtel à la décoration typique de la suisse central, avec une décoration en bois très prononcé. ",
    text2:
      " Nous avons prit une chambre pour 2 avec des lits séparé, avec une vu sur les montagnes en fond. La chambre était propre, le seul hic et la douche et les toilettes communautaire. Un acceuil chaleureux, parlant allemand, français et anglais.",
  },
];*/

export class DunePilat extends React.Component {
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
        <RenderPages dataArray={arrayPageMDP}>
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
