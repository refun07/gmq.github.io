import React from "react";
import { TextAnimation } from "./section/TextAnimation";
import { capitalizeSentences } from "./lib";

function AppSubTitle({ text, class_name, isAnimation = false }: any) {
  return (
    <>
      {isAnimation ? (
        <p className={`text-[18px] text-primary ${class_name}`}>
          {TextAnimation(capitalizeSentences(text || ""))}
        </p>
      ) : (
        <p className={`text-[18px] text-primary ${class_name}`}>
          {capitalizeSentences(text || "")}
        </p>
      )}
    </>
  );
}

export default AppSubTitle;
