import React, { useLayoutEffect } from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "../share";
import { FaStar } from "react-icons/fa";

function TestimonialItem({ text, name, review }: any) {
  return (
    <div className="border rounded md:p-6 p-3 shadow">
      <AppDescriptionWithDangerouslySetInnerHTML
        text={text}
        class_name="!text-text manropeFont"
      />
      <div className="mt-9 flex justify-between items-center flex-wrap w-full">
        <div className=" flex justify-start items-center gap-3 flex-wrap !italic">
          <div className=" ">
            <AppSubTitle
              text={name}
              class_name="uppercase font-bold text-secondary "
            />

            <div className="text-error flex gap-1 mt-2">
              {review?.map((_: any, key: any) => (
                <FaStar  key={key} size={22} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
