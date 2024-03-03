import { AppBtn, AppSubTitle, PageLink } from "@/components/share";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsFillCaretDownFill, BsDot } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { motion } from "framer-motion";

function MobileMenuFilter({ menuDates, setMobileNavbarState }: any) {
  const [submenuState, setSubmenuState] = useState("");
  const [MegaSubmenuState, setMegaSubmenuState] = useState("");
  const [SupperMegaMenuState, setSupperMegaMenuState] = useState("");

  const SubMenuStateHandler = (name: any) => {
    submenuState === name ? setSubmenuState(" ") : setSubmenuState(name);
    setMegaSubmenuState(" ");
    setSupperMegaMenuState(" ");
  };

  const MegaSubMenuStateHandler = (name: any) => {
    MegaSubmenuState === name
      ? setMegaSubmenuState(" ")
      : setMegaSubmenuState(name);
    setSupperMegaMenuState("");
  };

  const SupperMegaMenuStateHandler = (name: any) => {
    SupperMegaMenuState === name
      ? setSupperMegaMenuState(" ")
      : setSupperMegaMenuState(name);
  };

  return (
    <div className="py-3 overflow-y-auto h-[90%]">
      {menuDates?.map((item: any, key: any) => {
        return (
          <motion.div
            className="my-2 border rounded-lg bg-slate-50"
            key={key}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1 * key,
              duration: 0.5,
            }}
          >
            {/* menu + submenu  */}
            <div className="flex items-center justify-between p-2 flex-wrap ">
              {item?.submenu ? (
                <AppSubTitle
                  text={item?.text}
                  class_name={`capitalize font-medium text-[18px] px-1 text-primary `}
                />
              ) : (
                <AppBtn
                  text={
                    <PageLink
                      href={item?.href}
                      text={item?.text}
                      isIcon={false}
                      class_name={`capitalize font-medium text-[18px] px-1 text-primary flex-1 w-full `}
                    />
                  }
                  handleClick={() => setMobileNavbarState(false)}
                  class_name="flex w-full text-left"
                />
              )}

              {item?.submenu && (
                <div
                  className="flex-1 flex justify-end flex-wrap cursor-pointer"
                  onClick={() => SubMenuStateHandler(item?.text)}
                >
                  <BsChevronDown size={16} />
                </div>
              )}
            </div>
            {/* sub menu  */}
            {item?.submenu && submenuState === item?.text && (
              <motion.div className="md:w-[250px] min-w-full rounded p-1 bg-slate-100 border-t">
                {item?.subMenuData?.map((subItem: any, key: any) => {
                  return (
                    <motion.div
                      key={key}
                      className="flex flex-col flex-wrap justify-between bg-slate-50 p-1 border rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 * key,
                      }}
                    >
                      <div
                        className="flex flex-wrap justify-between items-center px-1"
                        onClick={() => MegaSubMenuStateHandler(subItem?.text)}
                      >
                        {subItem?.megaMenu ? (
                          <>
                            <div className="flex items-center flex-wrap">
                              <BsDot size={16} color="#000" />
                              <AppSubTitle
                                text={subItem?.text}
                                class_name="capitalize font-medium !text-[16px]  flex-1 hover:text-secondary"
                              />
                            </div>
                            <div className="flex-1 flex flex-wrap justify-end p-2 py-3 cursor-pointer ">
                              <BsChevronDown size={16} color="#00AAAC" />
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center flex-wrap  flex-1">
                              <AiOutlineLine size={14} color="#00AAAC" />
                              <AppBtn
                                text={
                                  <PageLink
                                    href={subItem?.href}
                                    text={subItem?.text}
                                    isIcon={false}
                                    class_name="capitalize font-medium text-[16px] p-1 flex-1 my-1 hover:text-secondary flex-1 "
                                  />
                                }
                                class_name="flex w-full text-left flex-1"
                                handleClick={() => setMobileNavbarState(false)}
                              />
                            </div>
                          </>
                        )}
                      </div>
                      {/* Mega menu  */}
                      {subItem?.megaMenu &&
                        subItem?.text === MegaSubmenuState && (
                          <div className="">
                            <div className="px-2 w-fit min-w-full bg-slate-100 rounded-md border">
                              {subItem?.megaMenuData?.map(
                                (megaItem: any, key: any) => (
                                  <motion.div
                                    className="flex flex-col items-center flex-wrap mt-1 rounded-lg"
                                    key={key}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: 0.08 * key,
                                      duration: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center flex-wrap w-full">
                                      <div className="flex items-center border-b w-full">
                                        <AiOutlineLine
                                          size={14}
                                          color="#00AAAC"
                                        />
                                        <AppBtn
                                          text={
                                            <PageLink
                                              href={megaItem?.href}
                                              text={megaItem?.text}
                                              isIcon={false}
                                              class_name="capitalize font-medium text-[16px] p-1 flex-1 hover:text-secondary flex-1"
                                            />
                                          }
                                          class_name="flex w-full text-left flex-1"
                                          handleClick={() =>
                                            setMobileNavbarState(false)
                                          }
                                        />
                                      </div>
                                      {/* <div
                                        className="cursor-pointer flex-1 flex justify-end items-center "
                                        onClick={() =>
                                          SupperMegaMenuStateHandler(
                                            megaItem?.text
                                          )
                                        }
                                      >
                                        <BsChevronDown
                                          size={16}
                                          color="#00AAAC"
                                        />
                                      </div> */}
                                    </div>

                                    <div className="w-full px-2 rounded-md">
                                      {megaItem?.SupperMegaMenu &&
                                        SupperMegaMenuState ===
                                          megaItem?.text &&
                                        megaItem?.SupperMegaMenuData?.map(
                                          (
                                            SupperMegaMenuItem: any,
                                            key: any
                                          ) => (
                                            <motion.div
                                              className="flex items-center flex-wrap"
                                              key={key}
                                              initial={{ opacity: 0, x: -15 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{
                                                delay: 0.08 * key,
                                                duration: 0.5,
                                              }}
                                            >
                                              <AiOutlineLine
                                                size={14}
                                                color="#00AAAC"
                                              />
                                              <AppBtn
                                                text={
                                                  <PageLink
                                                    href={
                                                      SupperMegaMenuItem?.href
                                                    }
                                                    text={
                                                      SupperMegaMenuItem?.text
                                                    }
                                                    isIcon={false}
                                                    class_name="capitalize font-medium text-[16px] hover:text-secondary flex-1"
                                                  />
                                                }
                                                handleClick={() =>
                                                  setMobileNavbarState(false)
                                                }
                                                class_name="p-1 flex w-full flex-1 text-left"
                                              />
                                            </motion.div>
                                          )
                                        )}
                                    </div>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default MobileMenuFilter;
