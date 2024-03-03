import { AppTitle, Container } from "@/components/share";
import React, { useLayoutEffect, useState } from "react";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import { RPL_QualificationData } from "@/data/RPL_Data";
import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import { motion } from "framer-motion";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

function CookeryCoursesSectionOne() {
  // const [cookeryHospitalityData, setCookeryHospitalityData] = useState<any>([]);
  const { CookeryCoursesSectionOne } = hospitality_and_cookeryDummyData;
  const { title, data } = CookeryCoursesSectionOne;
  // const { RPL_QualificationItems } = RPL_QualificationData;

  // useLayoutEffect(() => {
  //   const result = RPL_QualificationItems?.filter(
  //     (item) =>
  //       item.content?.title?.toLocaleLowerCase() ===
  //       "commercial cookery & hospitality"
  //   );
  //   setCookeryHospitalityData(result[0]?.content?.link);
  // }, [RPL_QualificationItems]);
  return (
    <section className="py-9 bg-grayCustom/50 w-full">
      <Container>
        <AppTitle text={title} heading class_name="text-center capitalize" />
        <div className="flex justify-center flex-wrap gap-2 mt-9">
          <QualificationItemResult
            allRPL_QualificationItems={data}
            outPutItemNumber={8}
            class_name="lg:w-[24%] md:w-[32%] sm:w-[48%] w-[95%] max-w-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}

export default CookeryCoursesSectionOne;
