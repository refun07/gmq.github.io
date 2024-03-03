import React from "react";
import { TextAnimation } from "../section/TextAnimation";
import { capitalizeSentences } from "../lib";

function AppH4Title({
  text,
  class_name,
  animationSpeed = 0.05,
  isAnimation = false,
}: any) {
  return (
    <>
      {isAnimation ? (
        <h4 className={`appTitle ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
        </h4>
      ) : (
        <h4 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h4>
      )}
    </>
  );
}

export default AppH4Title;
