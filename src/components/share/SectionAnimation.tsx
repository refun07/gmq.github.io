import React from "react";
import { motion } from "framer-motion";

function SectionAnimation({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SectionAnimation;
