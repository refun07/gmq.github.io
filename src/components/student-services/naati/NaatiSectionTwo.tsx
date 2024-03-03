import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { NAATI_Dummy_Data } from "@/data/services/NAATI_Data";
import React from "react";
import { motion } from "framer-motion";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

function NaatiSectionTwo() {
  const { NaatiSectionTwo } = NAATI_Dummy_Data;
  const { title, description, btn } = NaatiSectionTwo;
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
      <div className="py-9 bg-secondary">
        <Container>
          <div className="flex flex-col justify-center items-center gap-5">
            <AppH2Title text={title} class_name="text-center text-white" />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={description}
              class_name="text-white"
            />
          </div>
        </Container>
      </div>
    </motion.section>
  );
}

export default NaatiSectionTwo;
