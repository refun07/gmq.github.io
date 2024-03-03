import { Container } from "@/components/share";
import { NAATI_Dummy_Data } from "@/data/services/NAATI_Data";
import React from "react";
import ProgressiveApproach from "../pte/GroupTrainingPage/subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "../pte/GroupTrainingPage/subItems/WeHelpYouLearnBetter";
import { motion } from "framer-motion";

function NaatiSectionThree() {
  const { NaatiSectionThree } = NAATI_Dummy_Data;
  const { left, right } = NaatiSectionThree;
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
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <ProgressiveApproach left={left} />
            <WeHelpYouLearnBetter right={right} />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default NaatiSectionThree;
