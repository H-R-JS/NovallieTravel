import React, { useState } from "react";

export function Boxs({ children, selected }) {
  const boxst = React.Children.toArray(children).slice(0, 2);
  console.log(boxst);
  const boxs = React.Children.toArray(children);
  console.log(boxs);
  const [current1, setCurrent1] = useState(boxs[0].key);
  //const [current2, setCurrent2] = useState(boxs[1].key);
  const newBoxs1 = boxs.map((box) => {
    return React.cloneElement(box, {
      selected: box.key === current1,
    });
  });
  console.log(current1);

  function toggleBoxs() {
    setCurrent1(boxs[(2, 3)].key);
  }

  return (
    <div>
      <span className={"material-symbols-outlined"} id="arrow-left">
        arrow_circle_left
      </span>
      {boxs.map((box) => (
        <div key={box.key} className={box.props.className}></div>
      ))}
      <span className="material-symbols-outlined" id="arrow-right">
        arrow_circle_right
      </span>
      <section className="div-all-box">{newBoxs1}</section>
    </div>
  );
}

export function Box({ children, selected }) {
  return <div hidden={!selected}>{children}</div>;
}

/*  const boxs1 = [
    {
      className: "section-category r",
      title: "title-box1",
      children: "Randonnées",
    },
    {
      className: "section-category v",
      title: "title-box2",
      children: "Voyage",
    },
  ];
  const [currentBoxs, setCurrentBoxs] = useState(boxs1);

  return (
    <div>
      <div className="div-all-box">
        <div className={currentBoxs[0].className}></div>
        <p className={currentBoxs[0].title}>{currentBoxs[0].children}</p>
        <div className={currentBoxs[1].className}></div>
        <p className={currentBoxs[1].title}>{currentBoxs[1].children}</p>
      </div>
      <div className="text-end-section"></div>
    </div>
  );*/
