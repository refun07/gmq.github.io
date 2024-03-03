import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { TextAnimation } from "./section/TextAnimation";
import { capitalizeSentences } from "./lib";

function PageLink({
  href,
  text,
  class_name = " ",
  isIcon = true,
  isAnimation = false,
  animationSpeed = 0.05,
  durationSpeed = false,
  ...rest
}: any) {
  return (
    <>
      <Link
        rel="canonical"
        href={href || "#"}
        {...rest}
        className={`${
          isIcon ? "flex justify-center items-center gap-3 flex-wrap" : " "
        }  group ${class_name}`}
      >
        {isAnimation
          ? TextAnimation(capitalizeSentences(text), animationSpeed, durationSpeed)
          : capitalizeSentences(text)}
        {isIcon && (
          <FaArrowRight className="group-hover:translate-x-2 transition-all" />
        )}
      </Link>
    </>
  );
}

export default PageLink;
