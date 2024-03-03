import {
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import React from "react";
import { motion } from "framer-motion";

function InformationTechnologySectionThree() {
  const { InformationTechnologySectionThree } = InformationTechnologyDummyData;
  const { text } = InformationTechnologySectionThree;

  return (
    <section className="py-9 w-full">
      <Container>
        <AppDescriptionWithDangerouslySetInnerHTML text={text} />
      </Container>
    </section>
  );
}

export default InformationTechnologySectionThree;
