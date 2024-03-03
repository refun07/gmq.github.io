import React from "react";
import { TextAnimation } from "../section/TextAnimation";
import { capitalizeSentences } from "../lib";

function AppH3Title({
  text,
  class_name,
  animationSpeed = 0.05,
  isAnimation = false,
}: any) {
  return (
    <>
      {isAnimation ? (
        <h3 className={`appTitle ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
        </h3>
      ) : (
        <h3 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h3>
      )}
    </>
  );
}

export default AppH3Title;
