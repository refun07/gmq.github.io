import { AppOptimizeImage, AppSubTitle } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React from "react";
import subImgIcon from "@/assets/Partner/subImg.png";
import { motion } from "framer-motion";
import Image from "next/image";

function PartnersItem({
  img,
  subImg,
  partnersName,
  cricosNumber,
  class_name,
  odd,
  ...rest
}: any) {
  return (
    <motion.div
      className={`w-full h-[200px] p-5 rounded-2xl flex justify-between items-start gap-2 flex-col shadow hover:shadow-md  hover:bg-primary transition-all ease-in duration-500 relative ${
        odd ? "bg-primary" : "bg-secondary"
      } ${class_name}`}
      {...rest}
    >
      <div className="flex-1 flex justify-between items-start w-full">
        <AppImg
          src={img}
          alt={partnersName}
          // width={100}
          // height={80}
          style={{ width: "auto", height: "50px", objectFit: "contain", }}
          className="bg-white px-2 py-1 rounded max-w-[85%]"
        />

      </div>
      <div className="w-full">
        <AppSubTitle
          text={partnersName}
          class_name="!text-[20px] font-medium mb-2 text-white leading-6"
        />
        <AppSubTitle
          text={"CRICOS NO: " + cricosNumber}
          class_name="!text-[16px] text-white"
        />
      </div>
      {subImg && (
        <AppImg
          src={subImgIcon}
          width={25}
          class_name="absolute top-3 right-3 bg-white p-1 rounded"
          isPlaceholder={false}
        />
      )}
    </motion.div>
  );
}

export default PartnersItem;
