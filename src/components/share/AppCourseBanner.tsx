import React from "react";
import { AppTitle } from "@/components/share";
import { motion } from "framer-motion";

function AppCourseBanner({ text, class_name }: any) {
  return (
    <section
      className={`w-full bg-primary flex flex-col justify-center items-center py-24 ${class_name}`}
    >
      <AppTitle
        heading
        text={text}
        class_name="text-white !text-center w-full md:!text-[30px] capitalize manropeFont"
      />
    </section>
  );
}

export default AppCourseBanner;
