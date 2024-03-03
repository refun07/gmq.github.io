import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { PermanentResidencyPathwaysInAustraliaDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function PermanentResidencyPathwaysInAustraliaFAQ() {
  const { faq } = PermanentResidencyPathwaysInAustraliaDummyData;
  const { faqData } = faq;
  return (
    <div className="py-16">
      <Container>
        <div>
          <AppTitle text={faq?.title} class_name="text-center" />
          <div className="mt-16">
            <Accordion>
              {faqData?.map((item, key) => (
                <div key={key}>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                      {item?.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <AppDescriptionWithDangerouslySetInnerHTML
                        text={item?.text}
                      />
                    </AccordionItemPanel>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PermanentResidencyPathwaysInAustraliaFAQ;
