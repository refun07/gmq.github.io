import { ContactForm, ContactMap } from "@/components/contact";
import ContactArea from "@/components/contact/ContactArea";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import { useRouter } from "next/router";
import React from "react";

function ContactPage() {
  const router = useRouter()
  return (
    <div>
      <>
        <DynamicHead title="Contact-us - GMQ Global" canonicalPath={router?.pathname}/>
        {/* <AppCourseBanner text={"contact us"} /> */}
        <ContactArea />
        {/* <ContactMap /> */}
        {/* <ContactForm /> */}
      </>
    </div>
  );
}

export default ContactPage;
