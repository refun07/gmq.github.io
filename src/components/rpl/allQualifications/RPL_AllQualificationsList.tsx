import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { RPL_QualificationData } from "@/data/RPL_Data";
import React, { useState, useLayoutEffect } from "react";
import CourseItem from "./CourseItem";
import { motion } from "framer-motion";
import { Courses } from "..";
import { contactFormOfHome } from "@/data/ShareData";
import QualificationItemResult from "./sub/QualificationItemResult";

function RPL_AllQualificationsList() {
  const [RPL_AllQualificationsListData, setRPL_AllQualificationsListData] =
    useState<any>();
  const { RPL_QualificationItems } = RPL_QualificationData;

  useLayoutEffect(() => {
    if (RPL_QualificationItems) {
      const firstResult = RPL_QualificationItems?.map(
        (item) => item?.content?.link
      );

      setRPL_AllQualificationsListData(firstResult.flat(Infinity));
    }
  }, [RPL_QualificationItems]);

  return (
    <section className="py-16 w-full">
      <Container>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-2 grid sm:grid-cols-2 grid-cols-1 gap-4 w-full sm:px-5">
            <QualificationItemResult
              allRPL_QualificationItems={RPL_AllQualificationsListData}
              class_nameOfBtn="sm:col-span-2 col-span-1 "
            />
          </div>
          <div className="form p-3 h-full flex min-h-[500px] mt-2">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={contactFormOfHome}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RPL_AllQualificationsList;
