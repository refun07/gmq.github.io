import { AppSubTitle, AppTitle } from "@/components/share";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CountUp } from 'use-count-up'

function WhyGMQFetusesItem({ icon_img, text,counterText, ...rest }: any) {


  return (
    <motion.div
      className="flex justify-center items-start gap-1 p-2 group max-w-full w-full"
      {...rest}
    >
      <div className="bg-secondary flex justify-center items-center rounded-full w-16 h-16">
        <Image
          src={icon_img}
          alt={text}
          width={50}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
          className="p-1 group-hover:scale-95 scale-75 transition-all duration-500 ease-out hover:ease-in"
        />
      </div>
      <div className="flex-1 px-2">
      {/* <CountUp isCounting end={1320} duration={3.2} /> */}
      <AppTitle
        text={counterText}
        class_name="text-[25px] text-left"
      />
      <AppSubTitle
        text={text}
        class_name="text-left"
      />
      </div>
    </motion.div>
  );
}

export default WhyGMQFetusesItem;
