import CommonForm from "@/components/contactForm/CommonForm";
import { TradeCourseSectionFour, TradeCourseSectionOne, TradeCourseSectionThree, TradeCourseSectionTwo } from "@/components/courses";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { TradeCoursesBannerData, TradeCoursesMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import { useRouter } from "next/router";

function TradeCoursesPage() {
  const router = useRouter()
  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="Best Trade Courses in Australia for International Students" description="Maximize skilled migration points with Trade Courses in Australia. GMQ Global guides your professional journey for potential permanent residency. Enroll now!"  canonicalPath={router?.pathname}/>
      {/* <AppSliderBanner data={TradeCoursesBannerData} /> */}
      <div className="hidden md:block">
        <AppSliderBanner data={TradeCoursesBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={TradeCoursesMobileBannerData} />
      </div>
      <TradeCourseSectionOne />
      <TradeCourseSectionTwo />
      <TradeCourseSectionFour />
      {/* <CommonForm /> */}
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default TradeCoursesPage;
