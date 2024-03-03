import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { NaatiSectionOne, NaatiSectionThree, NaatiSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { NAATIBannerData, NAATIMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function NAATI_PAGE() {
  const router = useRouter()
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Best NAATI Course in Australia for International Students" description="Achieve NAATI accreditation with GMQ Global's specialized assistance for international students. Excel in the exam, gain extra visa points, and pave a successful language career in Australia."  canonicalPath={router?.pathname}/>
      {/* <AppSliderBanner data={NAATIBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={NAATIBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={NAATIMobileBannerData} />
      </div>
      <NaatiSectionOne />
      <NaatiSectionTwo />
      <NaatiSectionThree />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default NAATI_PAGE;
