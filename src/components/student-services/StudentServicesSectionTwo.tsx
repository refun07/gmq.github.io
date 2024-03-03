import React from "react";
import { Container } from "../share";
import LeftToRight from "../share/section/LeftToRight";
import { StudentServicesDummyData } from "@/data/StudentServicesData";
import { motion } from "framer-motion";

function StudentServicesSectionTwo() {
  const { StudentServicesSectionTwo } = StudentServicesDummyData;
  const { left, right } = StudentServicesSectionTwo;
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
    ><div className="py-16">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
        />
      </Container>
    </div></motion.div>
    
  );
}

export default StudentServicesSectionTwo;
