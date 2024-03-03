import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import React from "react";
import { motion } from "framer-motion";

function CookeryCoursesSectionFour() {
  const { CookeryCoursesSectionFour } = hospitality_and_cookeryDummyData;
  const { title, data } = CookeryCoursesSectionFour;
  return (

    <section className="py-9 w-full">
      <Container>
        <div className="flex flex-col flex-wrap justify-center items-center">
          <AppTitle text={title} class_name="text-center" />
          <div className="w-full mt-9">
            <AppAccordion data={data} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CookeryCoursesSectionFour;
