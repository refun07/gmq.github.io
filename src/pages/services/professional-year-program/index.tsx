import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { ProfessionalYearProgramSectionOne, ProfessionalYearProgramSectionTwo } from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { ProfessionalYearProgramBannerBannerData, ProfessionalYearProgramBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function ProfessionalYearProgramPage() {
  const router = useRouter()
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Professional Year in Australia for International Students" description="Enhance your career prospects with a Professional Year in Australia for Engineering, IT, and Accounting graduates. Gain essential skills, a competitive edge, and five points for Global Permanent Residency."  canonicalPath={router?.pathname}/>
      {/* <AppSliderBanner data={ProfessionalYearProgramBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={ProfessionalYearProgramBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={ProfessionalYearProgramBannerBannerData} />
      </div>
      <ProfessionalYearProgramSectionOne />
      <ProfessionalYearProgramSectionTwo />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default ProfessionalYearProgramPage;
