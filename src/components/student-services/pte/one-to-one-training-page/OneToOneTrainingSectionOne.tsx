import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { OneToOneTrainingDummyData } from "@/data/services/PTE_Data";
import React from "react";
import { motion } from "framer-motion";

function OneToOneTrainingSectionOne() {
  const { OneToOneTrainingSectionOne } = OneToOneTrainingDummyData;
  const { left, right } = OneToOneTrainingSectionOne;
  return (
    <section className="py-9 w-full">
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
    </section>
  );
}

export default OneToOneTrainingSectionOne;
