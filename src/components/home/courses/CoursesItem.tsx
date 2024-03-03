import { AppBtn, AppDescription, PageLink } from "@/components/share";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import AppImg from "@/components/share/AppImg";

function CoursesItem({
  img,
  title,
  description,
  btn,
  iSPageLink = true,
  handleClick = () => {
    alert("I am Click");
  },
  class_name = "",
  btn_Class_name = "",
  index = 1,
  ...rest
}: any) {
  return (
    <motion.div
      className={`w-full rounded my-5 flex flex-col justify-between flex-wrap ${class_name}`}
      {...rest}
    >
      <AppImg
        src={img}
        alt={title || " image of GMQ GLOBAL of popular-courses nursing"}
        class_name="w-full rounded-md"
      />
      <div className="bg-secondary md:p-5 p-3 !pb-0 flex-1 flex flex-col justify-between rounded-2xl relative">
        <div className="df">
          <PageLink
            isAnimation
            animationSpeed={0.15}
            href={btn?.href}
            text={title}
            isIcon={false}
            class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-white capitalize manropeFont hover:underline  transition-all text-secondary"
          />
          <AppDescription
            text={description}
            class_name="line-clamp-4 text-white"
            isAnimation
            animationSpeed={0.02}
          />
        </div>
        <motion.div
          className="mt-5 flex -mb-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          // transition={{
          //   delay: (index / 100) * 50,
          //   duration: 0.5,
          // }}
          viewport={{
            once: true,
          }}
        >
          {iSPageLink ? (
            <PageLink {...btn} class_name="NewCommonBtnStyle" />
          ) : (
            <AppBtn
              text={btn?.text}
              handleClick={handleClick}
              class_name={`NewCommonBtnStyle ${btn_Class_name}`}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CoursesItem;
