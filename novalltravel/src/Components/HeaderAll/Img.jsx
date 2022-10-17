import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source:
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/311000440_668342541314593_2729506177059028220_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=yqogzRCxGlcAX-dqOTe&_nc_ht=scontent-sjc3-1.xx&oh=03_AdQ48a3sadXZbzEt7VmkJl6kfWCwok5YPdhWwVCHiS-y5A&oe=63739D87",
    };
    this.changeImg = this.changeImg.bind(this);
  }

  changeImg() {
    setInterval(() => {
      this.setState({
        source:
          "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/310451613_352991217002664_2159071637651135923_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=ruJ2IBh8UrwAX9AzpY4&_nc_ht=scontent-cdt1-1.xx&oh=03_AdRpfCS-ZeAGDjMsH7jfLFUEO4MnWJOi6ybRdfBOtKk3ig&oe=636D5126",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <img
          className="img"
          src={this.state.source}
          changeOn={this.changeImg}
          alt="Lac blaussee de suisse, avec un bateau rouge et des poissons dans le lac"
        ></img>
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
