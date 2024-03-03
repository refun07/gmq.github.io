import { AppDescriptionWithDangerouslySetInnerHTML, AppSubTitle, AppTitle, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";
import { motion } from "framer-motion";
import AppImg from "@/components/share/AppImg";
import AppH3Title from "@/components/share/appHadding/AppH3Title";

function EducationCounsellingSectionThree() {
  const { EducationCounsellingSectionThree } = EducationCounsellingDummyData;
  const { title, right, left, subTitle } = EducationCounsellingSectionThree;
  return (
    <section className="py-16 bg-grayCustom w-full">
      <Container>
        <div className="flex justify-center items-center flex-col mb-7 gap-4">
          <AppH3Title text={title} class_name="text-center" />
          <AppSubTitle text={subTitle} class_name="text-center"  />
          <AppImg src={right?.img} alt={left?.text} />
          <AppDescriptionWithDangerouslySetInnerHTML text={left?.text} class_name="text-center" />
        </div>
        {/* <LeftToRight
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          alt={title}
        /> */}
      </Container>
    </section>
  );
}

export default EducationCounsellingSectionThree;
