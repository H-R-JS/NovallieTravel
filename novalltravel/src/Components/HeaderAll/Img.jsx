import React from "react";

const ImgS = [
  { src: require("../../Image/header1Img.jpg") },
  { src: require("../../Image/header2Img.jpg") },
  { src: require("../../Image/header3Img.jpg") },
  { src: require("../../Image/header4Img.jpg") },
  { src: require("../../Image/header5Img.jpg") },
  { src: require("../../Image/header6Img.jpg") },
  { src: require("../../Image/header7Img.jpg") },
  { src: require("../../Image/header8Img.jpg") },
];
const i = 1;

class Image extends React.Component {
  constructor(props) {
    super(props);
    const indxStart = 0;
    this.state = {
      indexState: indxStart,
      next: this.getNextIndex(indxStart),
      move: false,
      nameClass: "img",
    };
  }

  getNextIndex = (index) => {
    if (index >= ImgS.length - 1) {
      return 0;
    }
    return index + 1;
  };

  setIndex(index) {
    this.setState({
      indexState: index,
      next: this.getNextIndex(index),
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ move: true });
      setTimeout(() => {
        this.setState({
          move: false,
        });
        this.setIndex(this.getNextIndex(this.state.index));
      }, 500);
    }, 2000);
  }

  render() {
    const { indexState, next } = this.state;
    const move = this.state.move ? "move" : "";
    if (this.state.move) {
    }
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


*/
