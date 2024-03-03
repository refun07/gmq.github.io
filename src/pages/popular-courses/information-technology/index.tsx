import CommonForm from "@/components/contactForm/CommonForm";
import { InformationTechnologySectionOne, InformationTechnologySectionThree, InformationTechnologySectionTwo } from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { informationTechnologyBannerData, informationTechnologyMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import HomeContactForm from "@/components/home/contactForm";
import { useRouter } from "next/router";

function InformationTechnologyPage() {
  const router = useRouter()
  
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Best IT Courses in Australia for International Students" description="Explore top-notch IT courses in Australia for international students, blending modern education with hands-on experience. Secure a global IT career with GMQ Global guidance."  canonicalPath={router?.pathname}/>
      {/* <AppSliderBanner data={informationTechnologyBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={informationTechnologyBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={informationTechnologyMobileBannerData} />
      </div>
      <InformationTechnologySectionOne />
      <InformationTechnologySectionTwo />
      <InformationTechnologySectionThree />
      {/* <CommonForm title="If you think we can help your dreams, make sure to fill it up!" des="Choose GMQ Global for professional educational counseling. Our vast expertise offers efficient guidance towards your objectives. Fill out the form and get in touch with one of our career counselors—you'll be glad you did!" /> */}
      {/* <TestimonialSection /> */}
      <HomeContactForm />
    </>
  );
}

export default InformationTechnologyPage;
