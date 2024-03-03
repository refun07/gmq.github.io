import { Container } from "@/components/share";
import React from "react";
import AdvantagesOfPTEAcademicExam from "./pteSubItem/AdvantagesOfPTEAcademicExam";
import WhyChooseGMQ from "./pteSubItem/WhyChooseGMQ";
import { motion } from "framer-motion";

function PTE_SectionThree() {
  return (
    <section className="py-9 bg-primary w-full">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <AdvantagesOfPTEAcademicExam />
          <WhyChooseGMQ />
        </div>
      </Container>
    </section>
  );
}

export default PTE_SectionThree;
