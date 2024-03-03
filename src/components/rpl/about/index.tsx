import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { RPL_AboutData } from "@/data/RPL_Data";
import React from "react";
import { motion } from "framer-motion";

function RPL_About() {
  const { description, img, title } = RPL_AboutData;

  return (
    <section className="py-16 relative w-full bg-primary">
      <Container>
        <div className=" text-white rounded w-full p-3 flex flex-col justify-center items-start">
          <AppTitle heading text={title} class_name="!text-white" />
          <div className="mt-4">
            {description?.map((item, key) => (
              <div key={key}>
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={item}
                  class_name=" text-white my-2 manropeFont"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <AppBgImg BgImg={img} placeholder="empty" />
    </section>
  );
}

export default RPL_About;
