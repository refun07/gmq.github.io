import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { MockTestDummyData } from "@/data/services/PTE_Data";
import React from "react";

function MockTestSectionOne() {
  const { MockTestSectionOne } = MockTestDummyData;
  const { left, right } = MockTestSectionOne;
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

export default MockTestSectionOne;
