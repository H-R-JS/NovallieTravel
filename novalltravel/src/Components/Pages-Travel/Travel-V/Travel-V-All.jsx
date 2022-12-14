import React from "react";
import { TitleVT } from "./VT-Components/VT-Title";
import { CategoryVT } from "./VT-Components/VT-Category";

export function TravelVAll() {
  return (
    <div className="pages-travel-background">
      <TitleVT />
      <CategoryVT />
    </div>
  );
}
