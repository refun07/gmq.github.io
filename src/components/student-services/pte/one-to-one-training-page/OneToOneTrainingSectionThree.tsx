import { Container } from "@/components/share";
import { OneToOneTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import ProgressiveApproach from "../GroupTrainingPage/subItems/ProgressiveApproach";
import WeHelpYouLearnBetter from "../GroupTrainingPage/subItems/WeHelpYouLearnBetter";
import { motion } from "framer-motion";

function OneToOneTrainingSectionThree() {
  const { OneToOneTrainingSectionThree } = OneToOneTrainingDummyData;
  const { left, right } = OneToOneTrainingSectionThree;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <ProgressiveApproach left={left} />
          <WeHelpYouLearnBetter right={right} />
        </div>
      </Container>
    </section>
  );
}

export default OneToOneTrainingSectionThree;
