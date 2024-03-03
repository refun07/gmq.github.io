import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, PageLink, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  PTE_SectionOne,
  PTE_SectionThree,
  PTE_SectionTwo,
} from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEBannerData, PTEMobileBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function PTE_Page() {
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
        title="Best PTE Coaching in Melbourne, Australia"
        description="Achieve success in Australia with the best PTE coaching in Melbourne. Excel in reading, listening, writing, and speaking for a prosperous future."
        canonicalPath={router?.pathname}
      />
      {/* <AppSliderBanner data={PTEBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={PTEBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={PTEMobileBannerData} />
      </div>
      <PTE_SectionOne />
      <PTE_SectionTwo />
      <PTE_SectionThree />
      
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default PTE_Page;
