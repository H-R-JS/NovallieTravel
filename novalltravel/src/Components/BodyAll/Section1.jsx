import React, { useState, useEffect } from "react";
import { Boxs, Box } from "./AllBoxs";

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

export function Section1() {
  const [open, setOpen] = useState(true);

  return (
    <div className="section1-background">
      <div className="section-title-all">
        <h2>Nos Voyages</h2>
        <p>Cliquez sur la section qui vous intéresse</p>
      </div>

      <TransitionBoxs visible={open}>
        <Boxs>
          <Box className="section-category r" selected>
            <p className="title-box1">Randonnée</p>
          </Box>
          <Box className="section-category v" selected>
            <p className="title-box2">Voyages</p>
          </Box>
        </Boxs>
      </TransitionBoxs>
    </div>
  );
}

/* NOTE A FAIRE !!!!
 - Pour les section, le mieux serait de mettre directement les elements dans le state si possible, le div directement
 - Pour les sectons, trouver un moyen d'activer les transition avec opacity et translation

section1: {
        class1: "section-category r",
        title1: "title-box1",
        text1: "Randonnée",
      },
      section2: {
        class2: "section-category v",
        title2: "title-box2",
        text2: "Voyage",
      },
      section1: {
          class1: "section-category h",
          title1: "title-box3",
          text1: "Hôtel",
        },

        section2: {
          class2: "section-category m",
          title2: "title-box4",
          text2: "Mer",
        },
*/
