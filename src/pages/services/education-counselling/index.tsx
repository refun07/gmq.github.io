import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  EducationCounsellingSectionThree,
  EducationCounsellingSectionTwo,
} from "@/components/student-services";
import EducationCounsellingSectionOne from "@/components/student-services/education-counselling/EducationCounsellingSectionOne";
import TestimonialSection from "@/components/testimonial";
import {
  EducationCounsellingBannerData,
  EducationCounsellingMobileBannerData,
} from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function EducationCounsellingPage() {
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
        title="Best Career Counselling in Melbourne, Sydney, Australia"
        description="Embark on a transformative academic journey with GMQ Global's experienced Education Counselors in Melbourne and Sydney, Australia. We are your trusted partner for seamless career counseling, visa compliance, and a world of educational opportunities."
        canonicalPath={router?.pathname}
      />

      <div className="hidden md:block">
        <AppSliderBanner data={EducationCounsellingBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={EducationCounsellingMobileBannerData} />
      </div>
      <EducationCounsellingSectionOne />
      <EducationCounsellingSectionTwo />
      <EducationCounsellingSectionThree />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default EducationCounsellingPage;
