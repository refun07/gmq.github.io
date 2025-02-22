import HomeIndustrialOfPartner from "@/components/home/IndustrialOfPartner";
import HomeAboutGMQ from "@/components/home/aboutGMQ";
import HomeContactForm from "@/components/home/contactForm";
import HomeCourses from "@/components/home/courses";
import HomeHelpOfGMQ from "@/components/home/helpOfGMQ";
import HomeBanner from "@/components/home/homeHero";
import HomeRWL from "@/components/home/rwl";
import HomeTestimonials from "@/components/home/testimonials";
import HomeWhyGMQ from "@/components/home/whyGMQ";
import { DynamicHead, VisitedForm } from "@/components/share";
import GetYourSkillsRecognizedImg from '@/assets/GetYourSkillsRecognized.png'
import PopUpElement from "@/components/share/section/PopUpElement";
import HomeTopQualifications from "@/components/home/HomeTopQualifications";
import OurRenownIndustries from "@/components/home/OurRenownIndustries";
import CommonForm from "@/components/contactForm/CommonForm";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter()

  const popUpData = {
    type: "image",
    img : GetYourSkillsRecognizedImg,
    text: 'Get Your Skills Recognized',
    href: '/rpl/get-your-skills-recognized'
  }
  return (
    <>
      <DynamicHead title="GMQ Global - Professional Education Consultant in Australia" description="GMQ Global, your trusted partner and professional education consultant in Australia. Navigate the complexities of studying abroad with personalized assistance and comprehensive support services for academic success." canonicalPath={router?.pathname}  />
      <HomeBanner />
      <HomeCourses />
      {/* <ReferralJoinProgram /> */}
      <HomeAboutGMQ />
      {/* <HomeWhyGMQ /> */}
      <OurRenownIndustries />
      <HomeTopQualifications />
      <HomeIndustrialOfPartner />
      {/* <HomeHelpOfGMQ /> */}
      <HomeTestimonials />
      {/* <HomeRWL /> */}
      <HomeContactForm />
      <PopUpElement data={popUpData} />
    </>
  );
}
