import React from "react";
import { Container } from "../share";
import LeftToRight from "../share/section/LeftToRight";
import { StudentServicesDummyData } from "@/data/StudentServicesData";
import { motion } from "framer-motion";

function StudentServicesSectionOne() {
  const { StudentServicesSectionOne } = StudentServicesDummyData;
  const { left, right } = StudentServicesSectionOne;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-16">
        <Container>
          <LeftToRight
            title={left?.title}
            tiny_mceEditor={left?.text}
            sideImg={right?.img}
            leftImageToRight
          />
        </Container>
      </div>
    </motion.div>
  );
}

export default StudentServicesSectionOne;
