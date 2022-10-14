import React from "react";

const allBoxs = [
  { section: "section-category r", title: "title-box1" },
  { section: "section-category v", title: "title-box2" },
  { section: "section-category h", title: "title-box3" },
  { section: "section-category m", title: "title-box4" },
];

class Boxs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section1: "section-category r",
      title1: "title-box1",
      text1: "Randonnées",
      section2: "section-category v",
      title2: "title-box2",
      text2: "Voyage",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.section1 === "section-category r") {
      this.setState({
        section1: "section-category h",
        title1: "title-box3",
        text1: "Hôtel",
        section2: "section-category m",
        title2: "title-box4",
        text2: "Mer",
      });
    } else if (this.state.section1 === "section-category h") {
      this.setState({
        section1: "section-category r",
        title1: "title-box1",
        text1: "Randonnées",
        section2: "section-category v",
        title2: "title-box2",
        text2: "Voyage",
      });
    }
  }

  render() {
    return (
      <div>
        <span
          className={"material-symbols-outlined"}
          id="arrow-left"
          onClick={this.handleClick}
        >
          arrow_circle_left
        </span>
        <div className="div-all-box">
          <div className={this.state.section1}></div>
          <p className={this.state.title1}>{this.state.text1}</p>
          <div className={this.state.section2}></div>
          <p className={this.state.title2}>{this.state.text2}</p>
        </div>
        <span
          class="material-symbols-outlined"
          id="arrow-right"
          onClick={this.handleClick}
        >
          arrow_circle_right
        </span>
        <div className="text-end-section"></div>
      </div>
    );
  }
}

export function Section1() {
  return (
    <div className="section1-background">
      <div className="section-title-all">
        <h2>Nos Voyages</h2>
        <p>Cliquez sur la section qui vous intéresse</p>
      </div>
      <Boxs />
    </div>
  );
}

/* NOTE A FAIRE !!!!
 - Pour les section, le mieux serait de mettre directement les elements dans le state si possible, le div directement
 - Pour les sectons, trouver un moyen d'activer les transition avec opacity et translation


*/
