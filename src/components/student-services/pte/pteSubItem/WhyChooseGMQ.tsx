import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
} from "@/components/share";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";

function WhyChooseGMQ() {
  const { PTE_SectionThree } = PTE_Dummy_data;
  const { right } = PTE_SectionThree;
  return (
    <div className=" border-4 border-secondary rounded bg-white pb-5">
      <AppTitle
        text={right?.title}
        class_name="text-center text-white text-[25px] p-1 py-5 bg-secondary"
      />
      <div className="mt-5 p-5">
        <AppDescriptionWithDangerouslySetInnerHTML text={right?.text} />
      </div>
    </div>
  );
}

export default WhyChooseGMQ;
