import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { WhichVisaIsRightForMeDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function WhichVisaIsRightForMeSectionTwo() {
  const { sectionOne } = WhichVisaIsRightForMeDummyData;
  const { left, right } = sectionOne;
  return (
    <div className="py-16">
      <Container>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 justify-center items-center`}
        >
          <div className="">
            <AppTitle text={left?.title} />
            <div className="mt-5 flex flex-col gap-2">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={left?.text}
                class_name="text-justify md:text-left"
              />
            </div>
          </div>
          <div className={`flex justify-center items-center`}>
            <AppDescriptionWithDangerouslySetInnerHTML text={right?.submitForm} class_name="w-full" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhichVisaIsRightForMeSectionTwo;
