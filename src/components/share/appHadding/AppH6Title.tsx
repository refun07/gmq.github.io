import React from "react";
import { TextAnimation } from "../section/TextAnimation";
import { capitalizeSentences } from "../lib";

function AppH6Title({
  text,
  class_name,
  animationSpeed = 0.05,
  isAnimation = false,
}: any) {
  return (
    <>
      {isAnimation ? (
        <h6 className={`appTitle font-bold ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
        </h6>
      ) : (
        <h6 className={`appTitle font-bold ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h6>
      )}
    </>
  );
}

export default AppH6Title;
