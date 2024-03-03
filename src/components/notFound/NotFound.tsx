import React, { useEffect } from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "../share";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(function () {
      router.push("./");
    }, 2000);
  }, [router]);

  return (
    <section className="py-16">
      <Container>
        <div className="df">
          <AppTitle text={`Look like you're lost`} class_name="text-center" />
          <AppDescriptionWithDangerouslySetInnerHTML
            text={`the page you are looking for not avaible!`}
            class_name="text-center"
          />
        </div>
      </Container>
    </section>
  );
}

export default NotFound;
