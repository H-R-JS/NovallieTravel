import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

const arrayBox = [
  {
    link: "/TravelRAll",
    className: "title-style r",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/310225506_469827178443732_979114172636474639_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tXdpuH8XfVMAX924hFq&_nc_ht=scontent-sjc3-1.xx&oh=03_AVJnJT7oeYCdXbb0D1Tvbt3J5ZmybQ5dmMmNGegekAtUzQ&oe=636DF443",
    title: "Randonnées",
  },
  {
    link: "/TravelVAll",
    className: "title-style v",
    src: "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/310081677_846801563018222_5621701595898177584_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Fg9iqcnFhd4AX8xbz1G&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTDdeiJjvYR8KLqsacJXUHsz1OIK_-Jx_N1bse4PtG3Rw&oe=636B754A",
    title: "Voyages",
  },
  {
    link: "/TravelHAll",
    className: "title-style h",
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/310990664_8140185182690428_4307302376859419385_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=O_JLDEhBH2QAX9NNz3q&_nc_ht=scontent-cdg2-1.xx&oh=03_AdS_IdF4FtNYCvL97ct4xoMnUYb908L9c5xleAghpcy9_g&oe=636EDE0E",
    title: "Hôtels",
  },
  {
    link: "/TravelMAll",
    className: "title-style m",
    src: "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/311051965_412345887757400_4752296737460178953_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6PbkoJ3l0rkAX_WZEk2&_nc_ht=scontent-cdg2-1.xx&oh=03_AdTW371MFMimO0mj_wyJ13_PzPkzFdJuEigoCxB8aAX66g&oe=63728FCA",
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
              console.log(index);
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

/*setCurrentBoxs((c) => {
  if (c === boxs1) {
    return boxs2;
  } else if (c === boxs2) {
    return boxs1;
  }

  const initialState = { theBoxs: boxs1 };

  function reducer(state, action) {
    switch (action.type) {
      case boxs1:
        return { theBoxs: state.theBoxs == boxs2 };
      case boxs1:
        return { theBoxs: state.theBoxs == boxs1 };
      default:
        throw new Error();
    }
  }

  const [state, setCurrentBoxs] = useReducer(reducer, initialState);

  
      
});*/
