import { RPL_Certificate_Process, ViewQualification } from "@/components/rpl";
import RPL_About from "@/components/rpl/about";
import RPLBanner from "@/components/rpl/banner";
import RPL_informationStep from "@/components/rpl/rplInformationStep";
import RPL_Benefits from "@/components/rpl/rpl_Benefits/RPL_Benefits";
import RPL_FAQS from "@/components/rpl/rpl_FAQS/RPL_FAQS";
import SkillsTest from "@/components/rpl/skillsTest";
import { DynamicHead, VisitedForm } from "@/components/share";
import { useRouter } from "next/router";
// import { contactFormOfRPL } from "@/data/ShareData";
import React from "react";

function RPL_Page() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="Recognition of Prior Learning in Australia: RPL Courses & Assessment" description="Transform your career in Australia with GMQ Global's Recognition of Prior Learning (RPL) partnerships. Convert experience into nationally recognized qualifications for new opportunities and success."  canonicalPath={router?.pathname}/>
      <RPLBanner />
      <SkillsTest />
      <RPL_informationStep />
      <RPL_About />
      {/* <AllQualifications /> */}
      <ViewQualification />
      <RPL_Certificate_Process />
      <RPL_Benefits />
      <RPL_FAQS />
    </>
  );
}

export default RPL_Page;
