import { AppTitle, Container } from "@/components/share";
import React, { useState, useLayoutEffect } from "react";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import { RPL_QualificationData } from "@/data/RPL_Data";
import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import { motion } from "framer-motion";

function InformationTechnologySectionOne() {
  const { InformationTechnologySectionOne } = InformationTechnologyDummyData;
  const { title, data } = InformationTechnologySectionOne;

  const [informationTechnologyData, setInformationTechnologyData] =
    useState<any>([]);
  const { RPL_QualificationItems } = RPL_QualificationData;

  useLayoutEffect(() => {
    const result = RPL_QualificationItems?.filter(
      (item) =>
        item.content?.title?.toLocaleLowerCase() === "information technology"
    );
    setInformationTechnologyData(result[0]?.content?.link);
  }, [RPL_QualificationItems]);

  return (
    <section className="py-9 bg-grayCustom/50 w-full">
      <Container>
        <AppTitle text={title} heading class_name="text-center capitalize" />
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-3 mt-9">
            <QualificationItemResult
              allRPL_QualificationItems={informationTechnologyData}
            />
          </div> */}
        <div className="flex justify-center gap-3 mt-9 flex-wrap">
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

export default InformationTechnologySectionOne;
