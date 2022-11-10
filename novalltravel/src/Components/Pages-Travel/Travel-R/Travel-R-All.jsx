import React from "react";
import { TitleRT } from "./RT-Components/RT-Title";
import { CategoryRT } from "./RT-Components/RT-Category";

export function TravelRAll() {
  return (
    <div className="pages-travel-background">
      <TitleRT />
      <CategoryRT />
    </div>
  );
}
