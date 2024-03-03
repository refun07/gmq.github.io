import { PageLink } from "@/components/share";
import React from "react";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

function MegaSubMenu({ megaMenuData, allCloseCondolerHandler }: any) {
  return (
    <>
      <motion.div
        className="w-fit min-w-full p-3 bg-[#044145] rounded shadow-md"
        onMouseOver={() => allCloseCondolerHandler({ three: true, two: false })}
        onMouseLeave={() => allCloseCondolerHandler({ one:false, three: false })}
      >
        {megaMenuData?.map((megaItem: any, key: any) => (
          <motion.div className="flex items-center  flex-wrap" key={key}
          initial={{ opacity: 0, x: -20, }}
          animate={{ opacity: 1, x: 0,}}
          transition={{
            delay: 0.15 * key,
          }}
          >
            <BsDot size={16} color="#fff" />
            <PageLink
              href={megaItem?.href}
              text={megaItem?.text}
              isIcon={false}
              class_name="capitalize text-white font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default MegaSubMenu;
