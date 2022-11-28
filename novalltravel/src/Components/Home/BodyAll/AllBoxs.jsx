import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const arrayBox = [
  {
    link: "/TravelRAll",
    className: "title-style r",
    src: require("../../../Image/boxR.jpg"),
    title: "Randonnées",
  },
  {
    link: "/TravelVAll",
    className: "title-style v",
    src: require("../../../Image/boxV.jpg"),
    title: "Voyages",
  },
  {
    link: "/TravelHAll",
    className: "title-style h",
    src: require("../../../Image/boxH.jpg"),
    title: "Hôtels",
  },
  {
    link: "/TravelMAll",
    className: "title-style m",
    src: require("../../../Image/boxM.jpg"),
    title: "Mers",
  },
];

export class CarouselBoxs extends React.Component {
  /*constructor(props){
    super(props)
    this.state= {
      visible: true;
    }
  }*/
  changeBlur(e) {
    console.log(e.target.classNamev);
  }

  renderChildrenView = (item, index) => {
    return (
      <Link to={item.link}>
        <div className="content-box" key={index} onMouseOver={this.changeBlur}>
          <div
            style={{ backgroundImage: `url(${item.src})` }}
            className="image-style"
          />
          <div className="font-box">
            <p className={item.className}>{item.title}</p>
          </div>
        </div>
      </Link>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Carousel
          dataArray={arrayBox}
          autoplay={true}
          delay={10}
          carouselPostWidth={"500px"}
          carouselPostHeight={300}
          carouselPostMargin={10}
          onChange={this.changeBlur}
        >
          {this.renderChildrenView}
        </Carousel>
      </React.Fragment>
    );
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  componentDidMount() {
    if (this.props.autoplay) {
      //this.autPlay()
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  /// = () => signifie que l'on créer une function directement dans la class on a donc pas besoin de la mettre dans le render comme un element car il fait parti du class
  autoPlay = () => {
    this.timer = setInterval(() => {
      this.changeImagePosition(2);
    }, this.props.delay * 1000);
  };

  conputedLeft = () => {
    const { carouselPostWidth, carouselPostHeight, carouselPostMargin } =
      this.props;
    const { currentIndex } = this.state;
    let leftSpan = parseInt(`${-currentIndex * parseInt(carouselPostWidth)}`); // On récupère la valeur en chiffre à travers le parseInt dans lequel on insère les variables
    return {
      left:
        carouselPostWidth.toString().match(/[%vw]/) != null
          ? `calc(${leftSpan}% - ${carouselPostMargin * 2 * currentIndex}px)`
          : `${leftSpan - carouselPostMargin * 2 * currentIndex}px`,
    };
  };

  textStyle = {};

  changeImagePosition = (index) => {
    const { dataArray, block } = this.props;
    const { currentIndex } = this.state;
    // (1 + 1 + 3) % 3
    this.setState({
      currentIndex:
        (currentIndex + index + dataArray.length) % dataArray.length,
    });
  };
  render() {
    const {
      dataArray,
      carouselPostMargin,
      carouselPostWidth,
      carouselPostHeight,
    } = this.props;
    return (
      <div className="carousel-container">
        <div className="carousel-area">
          <div style={this.conputedLeft()} className="carousel-posts">
            {dataArray.map((imageUrl, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: carouselPostWidth,
                    height: carouselPostHeight,
                    margin: `0px ${carouselPostMargin}px`,
                    ...this.props.carouselPostStyle,
                  }}
                  className="carousel-post-box"
                >
                  {this.props.children(imageUrl, index)}
                </div>
              );
            })}
          </div>
        </div>
        <span
          onClick={() => this.changeImagePosition(-2)}
          className={"material-symbols-outlined"}
          id="arrow-left"
        >
          arrow_circle_left
        </span>
        <span
          onClick={() => this.changeImagePosition(2)}
          className="material-symbols-outlined"
          id="arrow-right"
        >
          arrow_circle_right
        </span>
      </div>
    );
  }
}
