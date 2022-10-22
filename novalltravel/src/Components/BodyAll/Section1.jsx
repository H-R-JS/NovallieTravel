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
      <div>
        <TransitionBoxs visible={open}>
          <Boxs selected="un">
            <Box className="box1" key="un">
              <img
                className="section-category r"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/310225506_469827178443732_979114172636474639_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=tXdpuH8XfVMAX924hFq&_nc_ht=scontent-sjc3-1.xx&oh=03_AVJnJT7oeYCdXbb0D1Tvbt3J5ZmybQ5dmMmNGegekAtUzQ&oe=636DF443"
                alt=""
              />
              <p className="title-box1">Randonnée</p>
            </Box>
            <Box className="box2" key="deux">
              <img
                className="section-category v"
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/310081677_846801563018222_5621701595898177584_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Fg9iqcnFhd4AX8xbz1G&_nc_ht=scontent-sjc3-1.xx&oh=03_AdTDdeiJjvYR8KLqsacJXUHsz1OIK_-Jx_N1bse4PtG3Rw&oe=636B754A"
                alt=""
              />
              <p className="title-box2">Voyages</p>
            </Box>
            <Box className="box3" key="trois">
              <img
                className="section-category h"
                src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/310990664_8140185182690428_4307302376859419385_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=O_JLDEhBH2QAX9NNz3q&_nc_ht=scontent-cdg2-1.xx&oh=03_AdS_IdF4FtNYCvL97ct4xoMnUYb908L9c5xleAghpcy9_g&oe=636EDE0E"
                alt=""
              />
              <p className="title-box3">Hôtel</p>
            </Box>
            <Box className="box4" key="quatre">
              <img
                className="section-category m"
                src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.15752-9/311051965_412345887757400_4752296737460178953_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6PbkoJ3l0rkAX_WZEk2&_nc_ht=scontent-cdg2-1.xx&oh=03_AdTW371MFMimO0mj_wyJ13_PzPkzFdJuEigoCxB8aAX66g&oe=63728FCA"
                alt=""
              />
              <p className="title-box4">Mer</p>
            </Box>
          </Boxs>
        </TransitionBoxs>
      </div>
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
