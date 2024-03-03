import { motion } from "framer-motion";

const defaultVariants = {
  initial: {
    opacity: 0,
  },
  animate: (key: any) => ({
    opacity: 1,
    transition: {
      delay: 0.05 * key,
      duration: 0.05 * key,
    },
  }),
};

export const TextAnimation = (text: any, animationSpeed = 0.05, durationSpeed= false, isOnce=true ) => {
  let animationText = text.split("").map((item: any, key: any) => (
    <motion.span
      key={key}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: animationSpeed * key,
          duration: durationSpeed || 0.05 * (key / 10),
        },
      }}
      viewport={{
        once: isOnce,
      }}
    >
      {item}
    </motion.span>
  ));
  return animationText;
};
