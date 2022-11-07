import React from "react";
import { Title } from "./HeaderAll/Title";
import { FirstLook } from "./HeaderAll/FirstLook";
import { Image } from "./HeaderAll/Img";

export function Header() {
  return (
    <div className="header-background">
      <header className="background-header">
        <Title />
        <FirstLook />
        <Image />
      </header>
    </div>
  );
}
