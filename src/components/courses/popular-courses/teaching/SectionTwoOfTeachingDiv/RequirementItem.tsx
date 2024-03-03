import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import React from "react";

function RequirementItem({ title, requirementData }: any) {
  return (
    <div className="shadow rounded border bg-white border-secondary drop-shadow-md">
      <AppSubTitle text={title} class_name="border-b p-5 text-[22px] text-white bg-secondary" />
      <div className=" md:p-5">
        {requirementData?.map((item: any, key: any) => (
          <AppDescriptionWithDangerouslySetInnerHTML
            key={key}
            text={key + 1 + ". " + item}
            class_name="mb-3 p-1"
          />
        ))}
      </div>
    </div>
  );
}

export default RequirementItem;
