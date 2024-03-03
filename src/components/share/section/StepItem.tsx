import React from "react";
import { AppDescriptionWithDangerouslySetInnerHTML } from "..";
import { AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";

function StepItem({ text, title, img, getLastValue }: any) {
  return (
    <div className="flex">
      <div className={`StepItemBefore ${getLastValue ? "" : "StepItem"}`}>
        <div className="w-12 h-12 bg-slate-100 rounded-full border-primary border-2 flex justify-center items-center">
          {img ? (
            <Image src={img} alt={text} priority={true} className="w-full h-full object-cover rounded-full" />
          ) : (
            <AiFillCaretRight color="#011F21" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-8 px-8">
        <AppDescriptionWithDangerouslySetInnerHTML
          text={title}
          class_name="font-medium bg-secondary w-fit px-5 py-2 rounded-full text-white stepName"
        />
        <AppDescriptionWithDangerouslySetInnerHTML
          text={text}
          class_name="border border-secondary p-4 mx-3 rounded"
        />
      </div>
    </div>
  );
}

export default StepItem;
