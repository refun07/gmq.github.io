import React from "react";
import { capitalizeSentences } from "./lib";
import { TextAnimation } from "./section/TextAnimation";

function AppDescription({
  text,
  class_name,
  animationSpeed = 0.05,
  isAnimation = false,
}: any) {
  return (
    <p className={`text-text text-base ${class_name}`}>
      {isAnimation
        ? TextAnimation(capitalizeSentences(text || ""), animationSpeed)
        : capitalizeSentences(text || "")}
    </p>
  );
}

export default AppDescription;
