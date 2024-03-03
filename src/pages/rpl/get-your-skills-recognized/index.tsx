import { SkillsTestForm } from "@/components/rpl";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import { useRouter } from "next/router";
import React from "react";

function GetYourSkillsRecognized() {
  const router = useRouter()
  return (
    <>
      <DynamicHead
        title="Get Your Skills Recognized - GMQ Global"
        description="Get Your Skills Recognized - GMQ Global"
        canonicalPath={router?.pathname}
      />
      <AppCourseBanner text={"get your skills recognized"} />
      <div className="bg-grayCustom py-16">
        <SkillsTestForm class_name="!h-fit" />
      </div>
    </>
  );
}

export default GetYourSkillsRecognized;
