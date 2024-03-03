import {
  AppCourseBanner,
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { TermsConditionDummyData } from "@/data/TermsConditionData";
import React from "react";

function TermsConditionBody() {
  const { title, bodyText } = TermsConditionDummyData;
  return (
    <div>
      <AppCourseBanner text={title} />
      <Container>
        <div className="py-9">
          <AppDescriptionWithDangerouslySetInnerHTML text={bodyText} />
        </div>
      </Container>
    </div>
  );
}

export default TermsConditionBody;
