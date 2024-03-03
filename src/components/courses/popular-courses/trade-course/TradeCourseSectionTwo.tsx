import { AppDescriptionWithDangerouslySetInnerHTML, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { TradeCourseDummyData } from "@/data/popular-courses/trade_courseData";
import React from "react";
import { motion } from "framer-motion";

function TradeCourseSectionTwo() {
  const { TradeCourseSectionTwo } = TradeCourseDummyData;
  const { left, right } = TradeCourseSectionTwo;
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
          <LeftToRight
            title={left?.title}
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
            alt={left?.title}
          />
          <AppDescriptionWithDangerouslySetInnerHTML text={left?.description} />
        </Container>
      </div>
    </motion.section>
  );
}

export default TradeCourseSectionTwo;
