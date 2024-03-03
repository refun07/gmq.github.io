import { Container, PageLink } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { PTE_Dummy_data } from "@/data/services/PTE_Data";
import React from "react";
import { motion } from "framer-motion";

function PTE_SectionTwo() {
  const { PTE_SectionTwo } = PTE_Dummy_data;
  const { title, right, left } = PTE_SectionTwo;
  return (
    <section className="py-9 bg-grayCustom w-full">
      <Container>
        <LeftToRight
          title={title}
          tiny_mceEditor={left?.text}
          sideImg={right?.img}
          leftImageToRight
          heading
          alt={title}
        />
        <div className=" py-16 flex justify-center items-center">
          <PageLink
            text="apply Now"
            href="/services/pte/pte-form"
            class_name="NewCommonBtnStyle border-transparent hover:border-secondary"
          />
        </div>
      </Container>
    </section>
  );
}

export default PTE_SectionTwo;
