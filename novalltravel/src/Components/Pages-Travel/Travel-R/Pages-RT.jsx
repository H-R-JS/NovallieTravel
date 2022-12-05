import React from "react";

const arrayPageLM = [
  {
    title: "Lac de Montagnon",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      "Le lac de Montagnon porte la particularité d'être en forme de coeur, ce qui le rend assez touristique. À quelques centaines de mètres du pic de Mardas (2188m) et de Montagnon d'Iseye (2173m), la lac étant à 2003m d'altitude la randonné est plutôt difficile avec plus de 1200m de dénivelé sur 12km de marche, la montée demandera entre 3 à 3h30 et la descente de 2h à 2h30, la randonnée pouvant durée de 5h à 6h l'équipement en eau ( surtout en été ) et nourriture n'est pas à négligé.",
    text2:
      "Le départ ce fera sur une aire de stationnement sur le Col de Lasserre à 5km d'Aydus, le début du chemin est parsemé d'arbres suivant un sentier dans les bois, vient ensuite des étendues de collines à gravir avec un beau panorama à l'arrière en s'éloignant des bois. Vous y croiserez des vaches et de chevaux, et avec plus d'attention des marmottes cachées entre les rochers.Vous finirez par passer une cabane par sa gauche avec un abreuvoir, et en continuant viendra la phase la plus difficile de la randonnée, une grande montée assez raide emplit de rochers et pierrailles, mais passer ce moment avec quelques effort de plus, la récompense finit par nous sourir. Un panorama des plus magnifiques des Pyrénées-Atlantiques, avec une vu assez large sur une partie des pyrénées avec bien évidement le lac en forme de coeur. Pour avoir une meilleur vue et se rendre compte de sa forme, il est possible de faire de la montée supplémentaire pour voir le lac dans son ensemble.",
  },
];

const arrayPageLdÔ = [
  {
    title: "Lac d'Ôo",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      " Une randonnée connu pour sa facilité d'accès avec un paysages des plus merveilleux, accessible facilement en famille et parfait pour des randonneurs débutant. Il ne suffit que 1h30 à 2h ( en prenant son temps ) pour arriver au lac à partir du parking des Granges d'Astau, un dénivelé d'un peu moins de 500m dans les 7km de marches.",
    text2:
      "Il suffit de suivre un grand chemin vers la gauche de la vallée d'Ôo, puis de le suivre dans l'ensemble de la randonné, un chemin parsemé de petits ruisseaux. plus vous montez, plus vous aurez une grande vue sur la vallée d'Ôo. Après une balade la plupart du temps dans des bois, on arrive près d'un refuge avec le clou du spectacle, le lac dÔo entouré d'écrasante montagne avec une casade passant d'un sommet jusqu'au lac. ",
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
        <RenderPages dataArray={arrayPageLM}>{this.renderChildren}</RenderPages>
      </div>
    );
  }
}

export class LacdÔo extends React.Component {
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
        <RenderPages dataArray={arrayPageLdÔ}>
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
