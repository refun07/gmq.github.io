import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { ProfessionalYearProgramDummyData } from "@/data/services/ProfessionalYearProgramData";
import React from "react";

import { motion } from "framer-motion";

function ProfessionalYearProgramSectionTwo() {
  const { ProfessionalYearProgramSectionTwo } =
    ProfessionalYearProgramDummyData;
  const { text } = ProfessionalYearProgramSectionTwo;
  return (
    <section className="py-9 w-full">
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </section>
  );
}

export default ProfessionalYearProgramSectionTwo;
