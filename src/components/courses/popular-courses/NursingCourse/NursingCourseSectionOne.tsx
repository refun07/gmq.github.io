import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import NursingCourseSectionOneItem from "./subSectionItem/NursingCourseSectionOneItem";
import { motion } from "framer-motion";

function NursingCourseSectionOne() {
  const { NursingCourseSectionOne } = NursingCourseDummyData;
  const { data, description } = NursingCourseSectionOne;
  return (
    <section className="py-6 relative">
      <Container>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 flex-wrap">
          {data?.map((item, key) => (
            <NursingCourseSectionOneItem key={key} {...item} />
          ))}
        </div>
        <AppDescriptionWithDangerouslySetInnerHTML
          text={description}
          class_name="text-center my-14 !text-[18px]"
        />
      </Container>
    </section>
  );
}

export default NursingCourseSectionOne;
