import React from "react";

const arrayPageSO = [
  {
    title: "Oeschinensee",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      "L'un des lacs les plus magnifique de Suisse, une eau presque totalement bleu dominé par plusieurs pics formant un paysage impressionnant. Il est possible d'y accéder avec un Téléphérique mais aussi à pied, avec un parking au niveau de la sation du Téléphérique et quelques dizaine de mètres avant. ",
    text2:
      " La randonné est plutôt facile, la seule difficultée sera la pente qui à certains moment sera plus ardu. Le chemin est visible et très simple à suivre avec peu d'indication, passant d'un chemin en goudron à un chemin de terre entre les arbres, pour 2h à 2h30 de marche jusqu'au refuge qui se trouve juste au-dessus du lac.",
  },
];

const arrayPageSA = [
  {
    title: "Aareschlucht",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      "Le lac de Montagnon porte la particularité d'être en forme de coeur, ce qui le rend assez touristique. À quelques centaines de mètres du pic de Mardas (2188m) et de Montagnon d'Iseye (2173m), la lac étant à 2003m d'altitude la randonné est plutôt difficile avec plus de 1200m de dénivelé sur 12km de marche, la montée demandera entre 3 à 3h30 et la descente de 2h à 2h30, la randonnée pouvant durée de 5h à 6h l'équipement en eau ( surtout en été ) et nourriture n'est pas à négligé.",
    text2:
      "Le départ ce fera sur une aire de stationnement sur le Col de Lasserre à 5km d'Aydus, le début du chemin est parsemé d'arbres suivant un sentier dans les bois, vient ensuite des étendues de collines à gravir avec un beau panorama à l'arrière en s'éloignant des bois. Vous y croiserez des vaches et de chevaux, et avec plus d'attention des marmottes cachées entre les rochers.Vous finirez par passer une cabane par sa gauche avec un abreuvoir, et en continuant viendra la phase la plus difficile de la randonnée, une grande montée assez raide emplit de rochers et pierrailles, mais passer ce moment avec quelques effort de plus, la récompense finit par nous sourir. Un panorama des plus magnifiques des Pyrénées-Atlantiques, avec une vu assez large sur une partie des pyrénées avec bien évidement le lac en forme de coeur. Pour avoir une meilleur vue et se rendre compte de sa forme, il est possible de faire de la montée supplémentaire pour voir le lac dans son ensemble.",
  },
];

const arrayPageSK = [
  {
    title: "Klausenpass",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      "Le lac de Montagnon porte la particularité d'être en forme de coeur, ce qui le rend assez touristique. À quelques centaines de mètres du pic de Mardas (2188m) et de Montagnon d'Iseye (2173m), la lac étant à 2003m d'altitude la randonné est plutôt difficile avec plus de 1200m de dénivelé sur 12km de marche, la montée demandera entre 3 à 3h30 et la descente de 2h à 2h30, la randonnée pouvant durée de 5h à 6h l'équipement en eau ( surtout en été ) et nourriture n'est pas à négligé.",
    text2:
      "Le départ ce fera sur une aire de stationnement sur le Col de Lasserre à 5km d'Aydus, le début du chemin est parsemé d'arbres suivant un sentier dans les bois, vient ensuite des étendues de collines à gravir avec un beau panorama à l'arrière en s'éloignant des bois. Vous y croiserez des vaches et de chevaux, et avec plus d'attention des marmottes cachées entre les rochers.Vous finirez par passer une cabane par sa gauche avec un abreuvoir, et en continuant viendra la phase la plus difficile de la randonnée, une grande montée assez raide emplit de rochers et pierrailles, mais passer ce moment avec quelques effort de plus, la récompense finit par nous sourir. Un panorama des plus magnifiques des Pyrénées-Atlantiques, avec une vu assez large sur une partie des pyrénées avec bien évidement le lac en forme de coeur. Pour avoir une meilleur vue et se rendre compte de sa forme, il est possible de faire de la montée supplémentaire pour voir le lac dans son ensemble.",
  },
];

export class Oeschinensee extends React.Component {
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
        <RenderPages dataArray={arrayPageSO}>{this.renderChildren}</RenderPages>
      </div>
    );
  }
}

export class Aareschlucht extends React.Component {
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
        <RenderPages dataArray={arrayPageSA}>{this.renderChildren}</RenderPages>
      </div>
    );
  }
}

export class Klausenpass extends React.Component {
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
        <RenderPages dataArray={arrayPageSK}>{this.renderChildren}</RenderPages>
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
