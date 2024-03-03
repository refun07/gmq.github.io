import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React from "react";
import { motion } from "framer-motion";
import AppH3Title from "@/components/share/appHadding/AppH3Title";

function SectionThreeOfTeaching() {
  const { SectionThreeOfTeaching } = TeachingDummyData;
  const { title, img, data } = SectionThreeOfTeaching;
  return (
    <section className="py-9 w-full">
      <Container>
        <AppH3Title text={title} class_name="text-center w-full" />
        <div className="mt-9 grid md:grid-cols-1 grid-cols-1 justify-center gap-5">
          <div className="flex justify-center items-start flex-wrap">
            <AppImg src={img} alt={title} class_name="rounded" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {data?.CareerOutcomeText?.map((item: any, key: any) => (
              <div
                className="mb-2 p-3 shadow md:w-[30%] sm:w-[48%] w-full rounded flex justify-center items-center gap-2"
                key={key}
              >
                <div className="w-[40px] h-[40px] rounded-full flex justify-content !items-center text-center bg-secondary">
                  <AppDescriptionWithDangerouslySetInnerHTML
                    text={key + 1}
                    class_name="text-white"
                  />
                </div>
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item}
                  class_name="flex-1"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SectionThreeOfTeaching;
