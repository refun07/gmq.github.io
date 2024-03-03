import React from 'react'
import { TextAnimation } from '../section/TextAnimation';
import { capitalizeSentences } from '../lib';

function AppH5Title({
    text,
    class_name,
    animationSpeed = 0.05,
    isAnimation = false,
  }: any) {
    return (
      <>
        {isAnimation ? (
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

export default AppH5Title