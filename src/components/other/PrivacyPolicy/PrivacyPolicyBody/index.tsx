import {
  AppCourseBanner,
  AppDescriptionWithDangerouslySetInnerHTML,
  Container,
} from "@/components/share";
import { PrivacyPolicyDummyData } from "@/data/PrivacyPolicyData";
import React from "react";

function PrivacyPolicyBody() {
  const { title, bodyText } = PrivacyPolicyDummyData;
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

export default PrivacyPolicyBody;
