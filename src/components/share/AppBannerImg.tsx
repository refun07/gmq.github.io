import React from "react";
import AppImg from "./AppImg";

import { motion } from "framer-motion";
function AppBannerImg({ img, text }: any) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="w-full h-auto -z-1">
        <AppImg src={img} alt={text} blurDataURL="false" />
      </div>
    </motion.section>
  );
}

export default AppBannerImg;
