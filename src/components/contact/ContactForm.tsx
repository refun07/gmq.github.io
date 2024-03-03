import React from "react";
import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "../share";
import { ContactDummyData } from "@/data/ContactData";
import { CommonFormDummyData } from "@/data/ContactAllForm";

function ContactForm() {
  const { left } = CommonFormDummyData;
  const { ContactSectionOne } = ContactDummyData;
  const { data } = ContactSectionOne;
  return (
    <div className="py-9 bg-[#83D0E4]">
      <Container>
        <AppTitle
          text={"contact form"}
          class_name="text-center text-white capitalize"
        />
        <div className="grid  grid-cols-1 gap-4 justify-center items-center">
          <AppDescriptionWithDangerouslySetInnerHTML text={left?.form} class_name="h-[750px]" />
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
