import React from "react";

const ImgS = [
  require("../../../Image/header1Img.jpg"),
  require("../../../Image/header2Img.jpg"),
  require("../../../Image/header3Img.jpg"),
  require("../../../Image/header4Img.jpg"),
  require("../../../Image/header5Img.jpg"),
  require("../../../Image/header6Img.jpg"),
  require("../../../Image/header7Img.jpg"),
  require("../../../Image/header8Img.jpg"),
];
const i = 1;

export class Image extends React.Component {
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
        this.setIndex(this.getNextIndex(this.state.indexState));
      }, 3000);
    }, 4000);
  }

  render() {
    const { indexState, next } = this.state;
    const move = this.state.move ? "move" : "";
    if (this.state.move) {
    }
    return (
      <div className="mask">
        <div className="imgs-wrapper">
          <div className={`current imgs ${move}`}>
            <img src={ImgS[indexState]} alt="" />
          </div>
          <div className={`next imgs ${move}`}>
            <img src={ImgS[next]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
