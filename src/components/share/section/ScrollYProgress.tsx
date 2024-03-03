import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

function ScrollYProgress({ children, class_name }: any) {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.15 1"],
  });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className={` ${class_name}`}
    >
      {children}
    </motion.div>
  );
}

export default ScrollYProgress;
