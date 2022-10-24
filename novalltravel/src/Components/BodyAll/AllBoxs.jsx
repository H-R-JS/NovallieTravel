import React, { useState } from "react";

export function Boxs({ children }) {
  const boxs1 = React.Children.toArray(children).slice(0, 2);
  const boxs2 = React.Children.toArray(children).slice(2, 4);
  const [currentBoxs, setCurrentBoxs] = useState(boxs1);
  // useReducer ou utiliser previousData

  function toggleBoxs() {
    setCurrentBoxs((c) => {
      if (c === boxs1) {
        return boxs2;
      } else if (c === boxs2) {
        return boxs1;
      }
    });
  }
  console.log(currentBoxs);

  return (
    <div>
      <span
        onClick={toggleBoxs}
        className={"material-symbols-outlined"}
        id="arrow-left"
      >
        arrow_circle_left
      </span>
      <span
        onClick={toggleBoxs}
        className="material-symbols-outlined"
        id="arrow-right"
      >
        arrow_circle_right
      </span>
      <section className="div-all-box">{currentBoxs}</section>
    </div>
  );
}

export function Box({ children }) {
  return <div>{children}</div>;
}
