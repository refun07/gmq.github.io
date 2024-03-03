import { AppTitle, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { WhichVisaIsRightForMeDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function WhichVisaIsRightForMeSectionFive() {
  const { sectionFour } = WhichVisaIsRightForMeDummyData;
  const { left, right, title } = sectionFour;
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <AppTitle
            text={title}
            class_name="!text-center mb-16 md:w-2/3 w-full"
          />
          <LeftToRight
            title={right?.title}
            tiny_mceEditor={right?.text}
            sideImg={left?.img}
            isBtn
            btn={right?.btn}
            leftImageToRight
          />
        </div>
      </Container>
    </div>
  );
}

export default WhichVisaIsRightForMeSectionFive;
