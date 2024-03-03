import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React from "react";
import rightArrowImg from "@/assets/right-arrow.png";
import checkMark from "@/assets/check-mark.png";
import arrowImg from "@/assets/rpl/few-step/arrow.png";

function RPL_StepItem({ id, title, description, images, imagesImage }: any) {
  return (
    <>
      <div className="border border-secondary  hover:shadow-md flex justify-between flex-col">
        <div className="">
          <AppSubTitle
            text={title}
            class_name="text-[25px] font-bold mb-3 border-b  p-3 px-5"
          />
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name="px-5 pb-9"
          />
        </div>
        <div className="p-3 flex justify-between items-center bg-secondary flex-wrap">
          <div className="flex justify-start items-center gap-2">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={id}
              class_name="text-right bg-primary !w-[30px] h-[30px] text-white flex justify-center items-center rounded-full"
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={"Step"}
              class_name="flex-1 !text-white"
            />
          </div>

          {id !== "4" ? (
            <AppImg
              src={rightArrowImg}
              width="35"
              class_name="border-4 border-white rounded-full p-1 bg-white"
            />
          ) : (
            <AppImg src={checkMark} width="35" class_name="rounded-full p-1" />
          )}
        </div>
      </div>
    </>
  );
}

export default RPL_StepItem;
