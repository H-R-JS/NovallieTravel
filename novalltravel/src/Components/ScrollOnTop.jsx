import React from "react";
import { useEffect } from "react";

export function ScrollOnTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
