import React from "react";
import { Title } from "./HeaderAll/Title";
import { FirstLook } from "./HeaderAll/FirstLook";

export function Header() {
  return (
    <div className="header-background">
      <header className="background-header">
        <Title />
        <FirstLook />
      </header>
    </div>
  );
}
