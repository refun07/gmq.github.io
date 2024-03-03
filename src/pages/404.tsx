import NotFound from "@/components/notFound/NotFound";
import { AppCourseBanner, DynamicHead } from "@/components/share";
import { useRouter } from "next/router";
import React from "react";

function NotFoundPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="404 page - GMQ Global"  canonicalPath={router?.pathname}/>
      <AppCourseBanner text={"404 page"} />
      <NotFound />
    </>
  );
}

export default NotFoundPage;
