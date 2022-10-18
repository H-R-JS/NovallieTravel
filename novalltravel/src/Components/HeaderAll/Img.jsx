import React from "react";

const image1 = require("../../Image/header1Img.jpg");
const image2 = require("../../Image/header2Img.jpg");

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: image1,
    };
    this.changeImg = this.changeImg.bind(this);
  }

  changeImg() {
    setInterval(() => {
      this.setState({
        source: image2,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <img
          className="img"
          src={this.state.source}
          alt="Lac blaussee de suisse, avec un bateau rouge et des poissons dans le lac"
        ></img>
        <button onClick={this.changeImg}>Change</button>
      </div>
    );
  }
}

export function Img() {
  return (
    <div>
      <Image />
    </div>
  );
}

/*Note à faire : 
- Créer une fonction qui s'auto lance, et qui fait tourner les images du header

*/
