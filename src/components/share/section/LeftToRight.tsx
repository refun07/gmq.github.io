import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  PageLink,
} from "..";
import Image from "next/image";
import AppImg from "../AppImg";

function LeftToRight({
  title,
  description,
  tiny_mceEditor,
  sideImg,
  class_name,
  leftImageToRight = false,
  isBtn = false,
  btn = {},
  heading = false,
  alt
}: any) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-9 justify-center items-center ${class_name}`}
    >
      <div
        className={`flex justify-center items-center ${
          leftImageToRight ? "order-last" : "order-first"
        }`}
      >
        {sideImg && (
          <AppImg src={sideImg} alt={alt || title } class_name="w-full rounded-2xl scale-90" />
        )}
      </div>
      <div className="">
        {title && (
          <AppTitle heading={heading} text={title} class_name="!font-medium" />
        )}

        <div className="flex flex-col gap-2 flex-wrap">
          {description &&
            description?.map((item: any, key: any) => (
              <AppDescriptionWithDangerouslySetInnerHTML
                key={key}
                text={item}
                class_name="text-center md:text-left"
              />
            ))}
          <div className="mt-5">
            {tiny_mceEditor && (
              <AppDescriptionWithDangerouslySetInnerHTML
                text={tiny_mceEditor}
                class_name="text-justify md:text-left"
              />
            )}
            {isBtn && <PageLink {...btn} class_name="commonBtnStyle mt-5" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftToRight;
