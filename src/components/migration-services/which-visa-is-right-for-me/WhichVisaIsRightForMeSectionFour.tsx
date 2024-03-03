import { AppTitle, Container, PageLink } from "@/components/share";
import { WhichVisaIsRightForMeDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function WhichVisaIsRightForMeSectionFour() {
  const { sectionThree } = WhichVisaIsRightForMeDummyData;
  const { title, btn } = sectionThree;
  return (
    <div className="py-16 bg-primary">
      <Container>
        <div className="flex flex-col justify-center items-center gap-5">
          <AppTitle text={title} class_name='text-white' />
          <PageLink {...btn} class_name="commonBtnStyle bg-white text-primary border-none" />
        </div>
      </Container>
    </div>
  );
}

export default WhichVisaIsRightForMeSectionFour;
