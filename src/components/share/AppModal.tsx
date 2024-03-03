import { LiaTimesSolid } from "react-icons/lia";
import AppBtn from "./AppBtn";
import { motion } from "framer-motion";

function Modal({ handelModal, content, close_class }: any) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen z-50 modal overflow-x-hidden overflow-y-auto flex flex-col"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className=" flex-1 flex flex-col w-full justify-center items-center">
        <motion.div
          className={`md:w-2/3 w-full  md:bg-transparent rounded z-50 flex justify-between ${close_class}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <p className=""></p>
          <AppBtn
            text={<LiaTimesSolid size={30} className="text-customWhite" />}
            class_name="text-white"
            handleClick={() => handelModal()}
          />
        </motion.div>

        {content}
      </div>
    </motion.div>
  );
}

export default Modal;
