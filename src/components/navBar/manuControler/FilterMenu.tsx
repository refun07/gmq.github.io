import { PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

function FilterMenu({
  data,
  SubMenuStateName,
  SubMenuStateNameHandler,
  allCloseCondoler,
  allCloseCondolerHandler,
  setIsMenuHoverOut,
  setIsMenuSubHoverOut,
  ...rest
}: any) {
  const [MegaSubMenuState, setMegaSubMenuState] = useState("");

  const { id, text, href, submenu, subMenuData } = data;

  const subMenuHandler = (name: any) => {
    SubMenuStateNameHandler(name);
    setMegaSubMenuState("");
  };

  const MegaSubMenuStateHandler = (name: any) => {
    setMegaSubMenuState(name);
  };

  if (!submenu) {
    return (
      // menu without submenu
      <motion.div
        className="menu"
        onMouseOver={() => subMenuHandler(text)}
        onBlur={() => subMenuHandler(text)}
        onFocus={() => subMenuHandler(text)}
        {...rest}
      >
        <PageLink
          href={href}
          text={text}
          isIcon={false}
          class_name={`capitalize text-primary font-medium text-[18px] px-3 hover:text-secondary`}
        />
      </motion.div>
    );
  } else {
    return (
      <motion.div className="relative menu" {...rest}>
        {/* menu with submenu  */}
        <div
          className="flex items-center flex-wrap group hover:text-secondary"
          onMouseEnter={() => {
            subMenuHandler(text);
            allCloseCondolerHandler({ one: true });
          }}
          onBlur={() => subMenuHandler(text)}
          onMouseLeave={()=> {
            // setIsMenuHoverOut(true)
            // setIsMenuSubHoverOut(false)
            // allCloseCondolerHandler({ one: false });
          }}
        >
          <PageLink
            href={href}
            text={text}
            isIcon={false}
            class_name={`capitalize font-medium text-[18px] flex-1 py-6 px-1 ${
              SubMenuStateName === text ? "text-secondary" : "text-primary"
            }`}
          />
          <div
            className={`group-hover:rotate-180 transition-all ease-in duration-300 ${
              SubMenuStateName === text ? "rotate-180 text-secondary" : ""
            }`}
          >
            <BsChevronDown size={16} />
          </div>
        </div>
        {/* sub menu  */}
        {SubMenuStateName === text && (
          <motion.div
            className="subMenu absolute top-[95%] -right-5 md:w-[250px] min-w-full bg-primary rounded border shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.05,
              duration: 0.5,
            }}
          >
            {subMenuData?.map((subItem: any, key: any) => (
              <SubMenu
                key={key}
                {...subItem}
                MegaSubMenuState={MegaSubMenuState}
                MegaSubMenuStateHandler={MegaSubMenuStateHandler}
                allCloseCondolerHandler={allCloseCondolerHandler}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.15 * key,
                }}
                setIsMenuSubHoverOut={setIsMenuSubHoverOut}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    );
  }
}

export default FilterMenu;
