import { motion, useScroll } from "framer-motion";
import React from "react";

function AppScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}

export default AppScrollProgress;
