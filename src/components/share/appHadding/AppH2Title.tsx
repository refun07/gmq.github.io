import React from "react";
import { TextAnimation } from "../section/TextAnimation";
import { capitalizeSentences } from "../lib";

function AppH2Title({
  text,
  class_name,
  heading = false,
  animationSpeed = 0.05,
  isAnimation = false,
}: any) {
  return (
    <>
      {isAnimation ? (
        <h2 className={`appTitle ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
        </h2>
      ) : (
        <h2 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h2>
      )}
    </>
  );
}

export default AppH2Title;
