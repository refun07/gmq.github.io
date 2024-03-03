import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import { AppTitle, Container } from "@/components/share";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";
import { motion } from "framer-motion";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

function NursingCourseSectionTwo() {
  const { NursingCourseSectionTwo } = NursingCourseDummyData;
  const { title, data } = NursingCourseSectionTwo;

  return (
    <section className="py-9 bg-grayCustom w-full">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppH2Title
            text={title}
            class_name="text-center text-primary"
            
          />
          <div className="w-full gap-2 mt-6 flex justify-center flex-wrap">
            <QualificationItemResult
              allRPL_QualificationItems={data}
              class_name="lg:w-[24%] md:w-[32%] sm:w-[48%] w-[95%] max-w-[380px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NursingCourseSectionTwo;
