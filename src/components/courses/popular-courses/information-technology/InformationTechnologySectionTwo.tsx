import { AppDescriptionWithDangerouslySetInnerHTML, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { InformationTechnologyDummyData } from "@/data/popular-courses/InformationTechnologyData";
import React from "react";
import { motion } from "framer-motion";

function InformationTechnologySectionTwo() {
  const { InformationTechnologySectionTwo } = InformationTechnologyDummyData;
  const { left, right, description } = InformationTechnologySectionTwo;
  return (
    <section className="py-9 w-full">
      <Container>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          alt={left?.title}
        />
        <div className="df">
          <AppDescriptionWithDangerouslySetInnerHTML text={description} />
        </div>
      </Container>
    </section>
  );
}

export default InformationTechnologySectionTwo;
