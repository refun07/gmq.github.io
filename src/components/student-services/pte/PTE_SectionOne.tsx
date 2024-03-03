import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";
import PteServiceItem from "./pteSubItem/PteServiceItem";
import { motion } from "framer-motion";
import CookeryCoursesSectionOneItem from "@/components/courses/popular-courses/CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import { popUp_ElementData } from "@/data/ShareData";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

function PTE_SectionOne() {
  const { PTE_SectionOne } = PTE_Dummy_data;
  const { title, subTitle, description, data } = PTE_SectionOne;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppH2Title text={title} class_name="text-center" /> 
          <AppSubTitle
            text={subTitle}
            class_name="text-center"
          />
          <div className="flex justify-evenly flex-wrap gap-2 mt-9">
            {data?.map((item, key) => (
              // <PteServiceItem key={key} {...item} />
              <CookeryCoursesSectionOneItem {...item} key={key} popUp_Element={popUp_ElementData} />
            ))}
          </div>
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name="text-center mt-9 !text-[18px] md:w-2/3 w-full"
          />
        </div>
      </Container>
    </section>
  );
}

export default PTE_SectionOne;
