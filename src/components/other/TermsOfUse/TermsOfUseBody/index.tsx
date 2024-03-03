import {
  AppCourseBanner,
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { TermsOfUseDummyData } from "@/data/TermsOfUseData";
import React from "react";

function TermsOfUseBody() {
  const { title, body } = TermsOfUseDummyData;
  return (
    <div>
      <AppCourseBanner text={title} />
      <Container>
        <div className="py-9">
          <AppDescriptionWithDangerouslySetInnerHTML text={body} />
        </div>
      </Container>
    </div>
  );
}

export default TermsOfUseBody;
