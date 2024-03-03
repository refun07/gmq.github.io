import CommonForm from "@/components/contactForm/CommonForm";
import NursingCourseSectionOne from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionOne";
import NursingCourseSectionThree from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionThree";
import NursingCourseSectionTwo from "@/components/courses/popular-courses/NursingCourse/NursingCourseSectionTwo";
import { DynamicHead, VisitedForm } from "@/components/share";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import TestimonialSection from "@/components/testimonial";
import { NursingBannerData, NursingMobileBannerData } from "@/data/BannerData";
import { contactFormOfHome } from "@/data/ShareData";
import React from "react";
import GetYourSkillsRecognizedImg from "@/assets/GetYourSkillsRecognized.png";
import PopUpElement from "@/components/share/section/PopUpElement";
import { NursingCourseAboutSection } from "@/components/courses";
import HomeContactForm from "@/components/home/contactForm";
import { useRouter } from "next/router";

function NursingPage() {
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
        title="Study Nursing in Australia for International Students"
        description="Discover seamless pathways to study nursing in Australia with GMQ Global. Expert guidance for international students aspiring for PR in a high-demand healthcare sector."
        canonicalPath={router?.pathname}
      />
      <div className="hidden md:block">
        <AppSliderBanner data={NursingBannerData} />
      </div>
      <div className="block md:hidden">
        <AppSliderBanner data={NursingMobileBannerData} />
      </div>
      {/* <NursingCourseSectionOne /> */}
      <NursingCourseAboutSection />
      <NursingCourseSectionTwo />
      <NursingCourseSectionThree />
      {/* <CommonForm
        title="Help us in getting to know you better, fill it up!"
        des="Choose GMQ Global for professional educational counseling. Our vast expertise offers efficient guidance towards your objectives. Fill out the form and get in touch with one of our student counselors—you'll be glad you did!
"
      /> */}
      <HomeContactForm />
      {/* <TestimonialSection /> */}
      
    </>
  );
}

export default NursingPage;
