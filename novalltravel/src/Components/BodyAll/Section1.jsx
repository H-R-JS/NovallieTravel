import React, { useState, useEffect } from "react";
import { CarouselBoxs } from "./AllBoxs";

export function Section1() {
  const [open, setOpen] = useState(true);

  return (
    <div className="section1-background">
      <div className="section-title-all">
        <h2>Nos Road Trip</h2>
        <p>Cliquez sur la section qui vous intéresse</p>
      </div>
      <div className="all-carousel-boxs">
        <CarouselBoxs />
      </div>
    </div>
  );
}

/* NOTE A FAIRE !!!!
function TransitionBoxs({ visible, children }) {
  const [showChildren, setShowChildren] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowChildren(true);
    } else {
      const timer = setTimeout(() => {
        setShowChildren(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);

  let className = "fade";
  if (!visible) {
    className += " out";
  }

  return <div className={className}>{showChildren && children}</div>;
}


        <TransitionBoxs visible={open}> 
        
        
*/
