import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";
import { motion } from "framer-motion";
import AppH6Title from "@/components/share/appHadding/AppH6Title";

function TradeCourseSectionFour() {
  const { TradeCourseSectionFour } = TradeCourseDummyData;
  const { title, data } = TradeCourseSectionFour;
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
          <AppH6Title text={title} class_name="text-center" />
          <div className="mt-9">
            <AppAccordion data={data} />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default TradeCourseSectionFour;
