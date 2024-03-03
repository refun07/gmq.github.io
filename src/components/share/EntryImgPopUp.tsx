import React from "react";
import { motion } from "framer-motion";
import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  PageLink,
} from ".";
import AppImg from "./AppImg";
import Link from "next/link";
import { GeyYourSkillsRecognized } from "@/data/ShareData";

function EntryImgPopUp({ data, class_name }: any) {
  return (
    <motion.div
      className={`relative  rounded overflow-auto w-fit md:max-w-2/3 max-w-full m-2 h-fit max-h-[90vh] md:mt-11 mt-6 ${class_name}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <Link href={data?.href || "#"}>
        <AppImg
          src={data?.img}
          alt={data?.text}
          class_name="w-[500px] max-w-full rounded"
        />
      </Link> */}
      <div className="sm:w-[500px] w-[350px] max-w-full h-[350px] sm:h-[450px] p-5 flex flex-col justify-center gap-3">
        <AppTitle
          text={GeyYourSkillsRecognized?.title}
          class_name="md:text-[35px] text-[25px] text-white text-left md:w-2/3 w-3/4  pr-4 md:leading-10"
        />
        <AppDescriptionWithDangerouslySetInnerHTML
          text={GeyYourSkillsRecognized?.description}
          class_name="text-white !w-1/2"
        />
        <PageLink
          {...GeyYourSkillsRecognized?.btn}
          class_name="NewCommonBtnStyle bg-secondary hover:bg-primary/70 hover:text-white rounded md:rounded-full border-none w-fit p-3 md:px-5 text-[14px]"
        />
      </div>
      <AppBgImg src={data?.img} alt={data?.text} />
    </motion.div>
  );
}

export default EntryImgPopUp;
