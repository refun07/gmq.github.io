import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React, { useLayoutEffect, useState } from "react";

function QualificationCategory({
  categories,
  selectCatagoryHandler,
  selectCatagory,
}: any) {
  return (
    <div>
      <AppSubTitle
        text="Categories"
        class_name="p-3 text-center bg-slate-100 rounded"
      />

      <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
        {categories?.map((item: any, key: any) => (
          <div
            key={key}
            className={`flex justify-normal items-center  gap-2 text-[18px] p-2 lg:w-full text-left hover:bg-secondary rounded group transition-all cursor-pointer border lg:border-none ${
              selectCatagory === item?.text ? "bg-secondary" : "bg-white "
            }`}
            onClick={() => selectCatagoryHandler(item?.text || "all")}
          >
            <AppImg src={item?.icon} width={30} isPlaceholder={false} />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item.text}
              class_name={`capitalize text-[18px] group-hover:text-white transition-all flex-1 ${
                selectCatagory === item?.text ? "text-white " : "text-primary"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QualificationCategory;
