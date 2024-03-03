import { motion } from "framer-motion";
import React from "react";
import { LuMoveDown } from "react-icons/lu";

function AppAccordionItem({ obj, app_accordionHandler, value }: any) {
  return (
    <div
      className={`border  group cursor-pointer lg:w-2/3 w-full overflow-hidden`}
      onClick={() => app_accordionHandler(obj[Object.keys(obj)[0]])}
    >
      {/* accordionHeader */}
      <div className="accordionHeader">
        <div
          className={`flex justify-between items-center flex-wrap p-4 group-hover:bg-primary/90  transition-all duration-150 ease-out ${
            value === obj[Object.keys(obj)[0]]
              ? "bg-primary/90"
              : "bg-[#077C96]"
          }`}
        >
          <div className="flex-1 text-white">
            <strong>{obj[Object.keys(obj)[0]]}</strong>
          </div>
          <div
            className={`icon w-9 h-9 rounded-full flex justify-center items-center group-hover:bg-primary group-hover:text-white transition-all border-2 duration-500 ease-out group-hover:rotate-180 ${
              value === obj[Object.keys(obj)[0]]
                ? "!bg-primary text-white rotate-180"
                : "bg-slate-100"
            }`}
          >
            <LuMoveDown />
          </div>
        </div>
      </div>
      {/* accordionBody */}
      {value === obj[Object.keys(obj)[0]] && (
        <motion.div
          className="accordionBody"
          initial={{ opacity: 0.5, height: 0  }}
          whileInView={{ opacity: 1, height: 'unset' }}
          transition={{ duration: 1 }}
          viewport={{
            once: true,
          }}
        >
          <div
            className={`text-base text-text  p-4`}
            dangerouslySetInnerHTML={{ __html: obj[Object.keys(obj)[1]] }}
          ></div>
        </motion.div>
      )}
    </div>
  );
}

export default AppAccordionItem;
