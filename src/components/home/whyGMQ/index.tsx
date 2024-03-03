import { AppDescription, AppDescriptionWithDangerouslySetInnerHTML, AppTitle, Container } from "@/components/share";
import { WhyGMQ_DummyData } from "@/data/HomeWhyGMQ";
import React from "react";
import WhyGMQFetusesItem from "./WhyGMQFetusesItem";
import AppBgImg from "@/components/share/AppBgImg";
import { motion } from "framer-motion";
import AppH3Title from "@/components/share/appHadding/AppH3Title";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * key,
      duration: 0.5 ,
    },
  }),
};

function HomeWhyGMQ() {
  const { title, description, whyGMQFetuses, secondaryImg } = WhyGMQ_DummyData;
  return (
    <section className="py-9 relative w-full ">
      <Container>
        <div className="flex flex-col justify-center items-center flex-wrap gap-2">
          <div className="flex justify-center flex-wrap">
            <AppH3Title text={title}
              class_name=" lg:!text-[50px] manropeFont w-full text-center uppercase"
             />
          </div>
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name=" !text-[18px] lg:w-2/3 w-full  text-center"
            // isAnimation
            // animationSpeed={0.01}
          />
          <div className="flex flex-wrap justify-center w-full gap-1">
            {whyGMQFetuses?.map((item, key) => (
              <WhyGMQFetusesItem
                key={key}
                {...item}
                variants={defaultVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={key}
              />
            ))}
          </div>
        </div>
      </Container>
      {/* <AppBgImg BgImg={secondaryImg} /> */}
    </section>
  );
}

export default HomeWhyGMQ;
