import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
} from "@/components/share";
import { GroupTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

function ProgressiveApproach({ left = {} }: any) {
  return (
    <div className=" border-4 border-secondary rounded bg-white pb-5 shadow-lg">
      <AppTitle
        text={left?.title}
        class_name="text-center text-white text-[25px] p-1 py-5 bg-secondary capitalize"
      />
      <div className="mt-5 p-2 rounded">
        {left?.data?.map((item: any, key: any) => (
          <div className="mb-3 border-2 p-3 border-dashed" key={key}>
            <div className="flex justify-start items-center gap-3">
              <MdOutlineCheckCircle size={22} color="#00AAAC" />
              <AppSubTitle
                text={item?.title}
                class_name="text text-[22px] flex-1"
              />
            </div>
            <div className="flex-1">
              <AppDescriptionWithDangerouslySetInnerHTML text={item?.text} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressiveApproach;
