import { AppDescription, AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { EducationCounsellingDummyData } from "@/data/EducationCounsellingData";
import React from "react";
import { motion } from "framer-motion";

function EducationCounsellingSectionOne() {
  const { EducationCounsellingSectionOne } = EducationCounsellingDummyData;
  const { title, description } = EducationCounsellingSectionOne;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="df">
          <AppTitle text={title} heading class_name="" />
          <AppDescriptionWithDangerouslySetInnerHTML text={description} class_name=" mt-4" />
        </div>
      </Container>
    </section>
  );
}

export default EducationCounsellingSectionOne;
