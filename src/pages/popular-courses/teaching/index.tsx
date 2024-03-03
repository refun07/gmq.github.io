import CommonForm from "@/components/contactForm/CommonForm";
import {
  SectionFiveOfTeaching,
  SectionFourOfTeaching,
  SectionOneOfTeaching,
  SectionThreeOfTeaching,
  SectionTwoOfTeaching,
} from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import {
  teachingBannerData,
  teachingMobileBannerData,
} from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";

import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function Teaching() {
  const router = useRouter()

  const popUpData = {
    type: "image",
    img: GetYourSkillsRecognizedImg,
    text: "Get Your Skills Recognized",
    href: "/rpl/get-your-skills-recognized",
  };
  return (
    <>
      <DynamicHead
        title="Best Teaching Courses in Australia for International Students"
        description="Explore transformative Teaching Courses in Australia for international students with GMQ Global. Elevate your career in education through industry-focused qualifications and expert guidance."
        canonicalPath={router?.pathname}
      />
      <div className="hidden md:block">
        <AppSliderBanner data={teachingBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={teachingMobileBannerData} />
      </div>
      <SectionOneOfTeaching />
      <SectionTwoOfTeaching />
      <SectionThreeOfTeaching />
      <SectionFourOfTeaching />
      <SectionFiveOfTeaching />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default Teaching;
