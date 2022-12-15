import React from "react";

const arrayPageSO = [
  {
    title: "Oeschinensee",
    img: require("../Img-Pages/Oesch1.jpg"),

    text1:
      "L'un des lacs les plus magnifique de Suisse, une eau presque totalement bleu dominé par plusieurs pics formant un paysage impressionnant. Il est possible d'y accéder avec un Téléphérique mais aussi à pied, avec un parking au niveau de la sation du Téléphérique et quelques dizaine de mètres avant. ",
    text2:
      " La randonné est plutôt facile, la seule difficultée sera la pente qui à certains moment sera plus ardu. Le chemin est visible et très simple à suivre avec peu d'indication, passant d'un chemin en goudron à un chemin de terre entre les arbres, pour 2h à 2h30 de marche jusqu'au refuge qui se trouve juste au-dessus du lac.",
  },
];

const arrayPageSA = [
  {
    title: "Les gorges de l'Aar",
    img: require("../Img-Pages/montagnonImg1.jpg"),

    text1:
      " Les gorges de l'Aar est un sentier directement dans les gorges avec la rivière de l'Aare qui passe juste en dessous, un paysage particulier et moment rafraîchissant en été. Une balade agréable et trés accessible avec au bout un restaurant si vous partez d'Aareschlucht, vous y achetez des souvenirs comme simplement y manger.",
    text2:
      " Le départ se peut se faire à deux endroit différent, soit à Aareschlucht soit à son restaurant, pour une balade d'environ 45 mn ou 1h pour un prix de 10 CHF pour les adultes, 6.50 CHF pour les enfants de 6 à 16ans et gratuit pour les moins de 6 ans, ouvert entre 8h30 à 17h30.",
  },
];

const arrayPageSK = [
  {
    title: "Lac de Klausenpass",
    img: require("../Img-Pages/klausen1.jpg"),

    text1:
      "Le lac de Klausenpass possède l'un des dernier glacier de suisse, à plus de 2098 m le glacier fond petit à petit dans ce lac entouré de gravats. Toute la randonnée, donnera sur un imense paysage d'une chaîne de montagne pendant toute la durée de la marche.",
    text2:
      " En partant de Klausenpass avec 5,3 km de marche et un dénivelé positif de 294 m, la randonnée est plus au moins facile et surtout trés agréable, passant par un chemin de caillout à un chemin de terre avec des vaches ici et là, jusqu'à se retrouver sur un environnement emplit de pierraille dominer par le pic d'une montagne plutôt colossale.",
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
