import CommonForm from "@/components/contactForm/CommonForm";
import { DynamicHead } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import {
  GROUP_TRAININGSectionOne,
  GROUP_TRAININGSectionThree,
  GROUP_TRAININGSectionTwo,
} from "@/components/student-services";
import TestimonialSection from "@/components/testimonial";
import { PTEGroupTrainingBannerData } from "@/data/BannerData";
import { contactFormOfPTE } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function GroupTrainingPage() {
  const router = useRouter()
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  
  return (
    <>
      <DynamicHead
        title="PTE Online Group Coaching |  - GMQ Global"
        description="PTE Online Group Coaching |  - GMQ Global"
        canonicalPath={router?.pathname}
      />
      <AppSliderBanner data={PTEGroupTrainingBannerData} />
      <GROUP_TRAININGSectionOne />
      <GROUP_TRAININGSectionTwo />
      <GROUP_TRAININGSectionThree />
      <CommonForm />
      <TestimonialSection />
      
    </>
  );
}

export default GroupTrainingPage;
