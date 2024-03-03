import { AppDescription, AppTitle, Container } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import { ContactFormDummyData } from "@/data/HomeContactForm";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AppImg from "@/components/share/AppImg";
import AppH3Title from "@/components/share/appHadding/AppH3Title";
function HomeContactForm() {
  const { right, left } = ContactFormDummyData;
  return (
    <section className="pt-9 w-full">
      {/* <Container class_name="!pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-9 justify-center items-end">
          <div className="pb-16 flex justify-start h-full min-h-[700px] md:min-h-full ">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={left?.form}
              class_name="h-full"
            />
          </div>
          <div className="pt-16">
            <AppH3Title
              text={right?.title}
              class_name=""
              isAnimation
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={right?.description}
              class_name=" mt-3 md:text-left text-center md:p-0 p-3"
              isAnimation
              animationSpeed={0.005}
            />

            <AppImg src={right?.secondaryImg} alt={right?.title} width={360} class_name="mx-auto mt-5" />
          </div>
        </div>
      </Container> */}
      <Container fullWidth>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-start ">
          <div className="md:pr-5 h-full ">
            <AppH3Title text={right?.title} class_name="" isAnimation />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={right?.description}
              class_name=" mt-3 md:p-0 p-3"
              isAnimation
              animationSpeed={0.005}
            />
            <Image
              src={right?.secondaryImg}
              alt={"logo"}
              width={360}
              quality={100}
              // priority={true}
              className="mx-auto mt-6 md:mt-16 hidden md:block"
              loading="lazy"
              blurDataURL="true"
            />
          </div>
          <div className="w-full px-2">
          <AppDescriptionWithDangerouslySetInnerHTML
              text={left?.form}
              class_name="h-[900px] md:-mt-5"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeContactForm;
