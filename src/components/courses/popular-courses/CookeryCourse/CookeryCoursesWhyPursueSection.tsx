import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import AppH4Title from "@/components/share/appHadding/AppH4Title";
import { hospitality_and_cookeryDummyData } from "@/data/popular-courses/hospitality_and_cookeryData";
import React from "react";

function CookeryCoursesWhyPursueSection() {
  const { CookeryCoursesWhyPursueSection } = hospitality_and_cookeryDummyData;
  const { title, description, data } = CookeryCoursesWhyPursueSection;

  return (
    <>
      <div className="py-9 bg-primary pb-16">
        <Container>
          <div className="flex justify-center items-center flex-col">
            <AppH4Title text={title} class_name=" text-white capitalize py-3 text-center" />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={description}
              class_name="text-white mt-3 text-center"
            />
          </div>
          <div className="flex justify-center flex-wrap gap-2 mt-9">
            {data?.map((item: any, key: any) => (
              <div className="p-5 py-9 rounded-xl border-2 border-secondary shadow bg-white md:w-[30%] sm:w-[48%] w-full" key={key}>
                <AppDescription text={key + 1 + ". " + item?.text} class_name="p-3 bg-secondary text-white mb-2 rounded" />
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item?.description}
                  class_name=""
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default CookeryCoursesWhyPursueSection;
