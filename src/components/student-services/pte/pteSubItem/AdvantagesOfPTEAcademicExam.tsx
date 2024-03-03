import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
} from "@/components/share";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";
import { MdOutlineCheckCircle } from "react-icons/md";

function AdvantagesOfPTEAcademicExam() {
  const { PTE_SectionThree } = PTE_Dummy_data;
  const { left } = PTE_SectionThree;
  const { title, listData } = left;
  return (
    <div className=" border-4 border-secondary rounded bg-white pb-5">
      <AppTitle
        text={title}
        class_name="text-center text-white text-[25px] p-1 py-5 bg-secondary"
      />
      <div className="mt-5 p-2 rounded">
        {listData?.map((item, key) => (
          <div
            className=" mb-2 flex justify-between items-center gap-3 border-4 border-dashed p-5"
            key={key}
          >
            <MdOutlineCheckCircle size={22} color="#00AAAC" />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item}
              class_name="font-bold flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvantagesOfPTEAcademicExam;
