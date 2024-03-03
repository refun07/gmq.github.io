import { AppTitle, Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";

function sectionOneOfTeaching() {
  const { SectionOneOfTeaching } = TeachingDummyData;
  const { left, right } = SectionOneOfTeaching;
  return (
    <section className="py-9 w-full">
      <Container>
        <div className="df">
          {/* <AppTitle text={left?.title} heading class_name="text-center mb-3" /> */}
        </div>
        <LeftToRight
          title={left?.title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          alt={left?.title}
          class_name="lg:gap-5"
          heading
        />
      </Container>
    </section>
  );
}

export default sectionOneOfTeaching;
