import { AppTitle, Container } from "@/components/share";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";
import CookeryCoursesSectionOneItem from "../CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import { motion } from "framer-motion";

function TradeCourseSectionOne() {
  const { TradeCourseSectionOne } = TradeCourseDummyData;
  const { title, data } = TradeCourseSectionOne;
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-9">
        <Container>
          <AppTitle text={title} heading class_name="text-center capitalize" />
          <div className="md:flex flex-wrap justify-center items-center gap-2 mt-9 grid sm:grid-cols-2 grid-cols-1">
            {data?.map((item: any, key: any) => (
              <CookeryCoursesSectionOneItem {...item} key={key} />
            ))}
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default TradeCourseSectionOne;
