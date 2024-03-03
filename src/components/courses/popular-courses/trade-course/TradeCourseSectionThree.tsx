import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";
import { motion } from "framer-motion";

function TradeCourseSectionThree() {
  // const { TradeCourseSectionThree } = TradeCourseDummyData;
  // const { text } = TradeCourseSectionThree;

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
          <AppDescriptionWithDangerouslySetInnerHTML text={"text"} />
        </Container>
      </div>
    </motion.section>
  );
}

export default TradeCourseSectionThree;
