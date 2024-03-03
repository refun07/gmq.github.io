import { AppTitle, Container } from "@/components/share";
import AppAccordion from "@/components/share/section/AppAccordion";
import { RPL_FAQSDummyData } from "@/data/RPL_Data";
import React from "react";

function RPL_FAQS() {
  const { title, data } = RPL_FAQSDummyData;
  return (
    <section className="py-9 w-full">
      <Container>
        <AppTitle text={title} class_name="text-center" />
        <div className="mt-9">
          <AppAccordion data={data} />
        </div>
      </Container>
    </section>
  );
}

export default RPL_FAQS;
