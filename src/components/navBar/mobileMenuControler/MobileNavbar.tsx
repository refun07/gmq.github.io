import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";
import MobileMenuFilter from "./MobileMenuFilter";
import { motion } from "framer-motion";

function MobileNavbar({
  menuData,
  logoAsset,
  MobileNavbarState,
  setMobileNavbarState,
}: any) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#00000091] z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.05,
      }}
    >
      <motion.div
        className="w-4/5 max-w-[450px] min-w-[300px] h-full bg-white p-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.05,
          duration: 0.5,
        }}
      >
        {/* logo and close icon  */}
        <div className="flex justify-between items-center border-b pb-3 flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            <Image
              src={logoAsset}
              alt={"logo"}
              width={100}
              quality={100}
              priority={true}
            />
          </motion.div>
          <motion.div
            className="cursor-pointer"
            initial={{ opacity: 0, scale: 1.5, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
          >
            <FaTimes
              size="25"
              color="#011F21"
              onClick={() => setMobileNavbarState(!MobileNavbarState)}
            />
          </motion.div>
        </div>
        {/* logo and close icon end */}
        <MobileMenuFilter menuDates={menuData} setMobileNavbarState={setMobileNavbarState} />
      </motion.div>
    </motion.div>
  );
}

export default MobileNavbar;
