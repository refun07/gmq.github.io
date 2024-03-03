import { HomeHelpOfGMQData } from "@/data/HomeHelpOfGMQData";
import React from "react";
import { AllQualifications } from "@/components/rpl";
import { motion } from "framer-motion";

function HomeHelpOfGMQ() {
  const { title } = HomeHelpOfGMQData;
  return (
    <section className="w-full ">
      <AllQualifications PropsText={title} />
    </section>
  );
}

export default HomeHelpOfGMQ;
