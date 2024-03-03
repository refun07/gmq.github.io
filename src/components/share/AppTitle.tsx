import React from "react";
import { capitalizeSentences } from "./lib";
import { TextAnimation } from "./section/TextAnimation";

function AppTitle({
  text,
  class_name,
  heading = false,
  animationSpeed = 0.05,
  isAnimation = false,
  
}: any) {
  return (
    <>
      {heading ? (
        isAnimation ? (
          <h1 className={`appTitle ${class_name}`}>
            {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
          </h1>
        ) : (
          <h1 className={`appTitle ${class_name}`}>
            {capitalizeSentences(text || "")}
          </h1>
        )
      ) : isAnimation ? (
        <h5 className={`appTitle ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""), animationSpeed)}
        </h5>
      ) : (
        <h5 className={`appTitle ${class_name}`}>
          {capitalizeSentences(text || "")}
        </h5>
      )}
    </>
  );
}

export default AppTitle;
