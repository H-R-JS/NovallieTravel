import React from "react";

const image1 = require("../../Image/header1Img.jpg");
const image2 = require("../../Image/header2Img.jpg");

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: image1,
      nameClass: "img",
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.source === image1) {
        this.setState({
          nameClass: "blur-effect",
        });
        setTimeout(() => {
          this.setState({
            source: image2,
            nameClass: "img",
          });
        }, 1000);
      } else if (this.state.source === image2) {
        this.setState({
          nameClass: "blur-effect",
        });
        setTimeout(() => {
          this.setState({
            source: image1,
            nameClass: "img",
          });
        }, 1000);
      }
    }, 5000);
  }

  render() {
    const { nameClass, source } = this.state;
    return (
      <div>
        <img className={nameClass} src={source}></img>
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
