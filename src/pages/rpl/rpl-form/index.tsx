import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
  DynamicHead,
} from "@/components/share";
import { contactFormOfRPL } from "@/data/ShareData";
import { useRouter } from "next/router";
import React from "react";

function RPLFormPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead
        title="Recognition of Prior Learning From - GMQ GLOBAL"
        description="Recognition of Prior Learning From - GMQ GLOBAL"
        canonicalPath={router?.pathname}
      />
      <div className="py-16">
        <Container>
          <div className="flex justify-center items-center flex-col">
            <AppTitle heading text={`Recognition of Prior Learning From`} />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={
                '<p class="text-center !mb-9">Hey, we’d like to know you better too! </p>'
              }
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={contactFormOfRPL}
              class_name="h-[11300px]"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default RPLFormPage;
