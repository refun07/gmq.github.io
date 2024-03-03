import { AppTitle, Container, PageLink } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import { HomeAboutDummyData } from "@/data/HomeAboutData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import WhyGMQFetusesItem from "../whyGMQ/WhyGMQFetusesItem";
import { WhyGMQ_DummyData } from "@/data/HomeWhyGMQ";

const defaultVariants = {
  initial: {
    opacity: 0,
  },
  animate: (key: any) => ({
    opacity: 1,
    transition: {
      delay: 0.1 * key,
      duration: 0.5,
    },
  }),
};

function HomeAboutGMQ() {
  const { left, right } = HomeAboutDummyData;
  const { whyGMQFetuses } = WhyGMQ_DummyData;
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="py-0">

        <Container fullWidth>
          {/* desktop  */}
          <div className="grid md:grid-cols-5 grid-cols-1 gap-4 py-4">
            <div className="order-1 md:order-none md:col-span-3 flex flex-col gap-3 md:p-6 px-3 lg:flex-1 text-justify items-center md:items-start flex-wrap">
              <AppTitle
                text={right?.title}
                heading
                class_name="lg:!text-[50px] manropeFont !text-bluePrimary"
              />
              <AppDescriptionWithDangerouslySetInnerHTML
                text={right?.description}
                class_name="md:!text-[19px]"
              />
              <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-3">
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
            <div className="flex md:justify-center md:items-center mx-auto flex-wrap md:col-span-2 w-full">
              <Image
                src={left?.image}
                alt={"logo"}
                quality={100}
                // priority={true}
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                blurDataURL="true"
              />
            </div>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}

export default HomeAboutGMQ;
