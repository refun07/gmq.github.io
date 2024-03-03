import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { NAATI_Dummy_Data } from "@/data/services/NAATI_Data";
import React from "react";
import { motion } from "framer-motion";

function NaatiSectionOne() {
  const { NaatiSectionOne } = NAATI_Dummy_Data;
  const { left, right } = NaatiSectionOne;
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
            heading
            alt={left?.title}
          />
        </Container>
      </div>
    </motion.section>
  );
}

export default NaatiSectionOne;
