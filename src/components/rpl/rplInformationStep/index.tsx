import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "@/components/share";
import { RPL_StepDummyData, RPL_stepData } from "@/data/RPL_Data";
import React from "react";
import AppImg from "@/components/share/AppImg";
import rightArrowImg from "@/assets/right-arrow.png";
import downArrowImg from "@/assets/down-arrow.png";
import checkMark from "@/assets/check-mark.png";
import { motion } from "framer-motion";
import RPL_StepItem from "./RPL_StepItem";
import Image from "next/image";

function RPL_informationStep() {
  // const { assets } = RPL_stepData;
  const { title, data, allInOne } = RPL_StepDummyData;
  return (
    // #126265
    <section className="py-9 w-full">
      <Container>
        {/* <div className="grid grid-cols-1 gap-9 justify-center items-center md:scale-90">
          {assets?.map((item, key) => (
            <AppImg key={key} src={item} class_name="w-full my-2" />
          ))}
        </div> */}
        {/* <div className="flex flex-col justify-center gap-5">
          <AppTitle text={title} class_name="text-center" />
          <div className="df">
            <div className="hidden md:block">
              <AppImg src={allInOne} alt={title} class_name="w-full" />
            </div>
            <div className="block md:hidden">
              <div className="grid grid-cols-1 justify-center items-center w-full">
                {data?.map((item: any, key: any) => (
                  <AppImg src={item?.imagesImage} alt={item?.title} key={key} class_name="max:w-full !mx-auto" />
                ))}
              </div>
            </div>
          </div>

        </div> */}

        <div className="flex flex-col justify-center items-center gap-9">
          <AppTitle text={title} />
          <div className="w-full hidden md:grid grid-cols-1 gap-3">
            {data?.map((item: any, key: any) => {
              if (!(key % 2)) {
                return (
                  <div
                    className="grid grid-cols-9 justify-start items-start"
                    key={key}
                  >
                    <div className=" col-span-4"></div>
                    <div className=" col-span-1 flex flex-col justify-between items-center h-full">
                      <AppDescriptionWithDangerouslySetInnerHTML
                        text={String(key + 1)}
                        class_name="border-4 border-secondary !w-[50px] h-[50px] rounded-full text-center flex justify-center items-center !text-secondary !text-[25px] manropeFont bg-white"
                      />
                      <div className="flex-1">
                        {item?.id !== "4" && (
                          <Image
                            src={downArrowImg}
                            alt={"downArrowImg"}
                            quality={100}
                            // priority={true}
                            className="h-full rounded-2xl"
                            loading="lazy"
                            blurDataURL="true"
                          />
                        )}
                      </div>
                    </div>
                    <div className=" col-span-4 px-3 pb-9">
                      <div className="">
                        <AppSubTitle
                          text={item?.title}
                          class_name="font-medium text-[25px] manropeFont"
                        />
                        <AppDescriptionWithDangerouslySetInnerHTML
                          text={item?.description}
                        />
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="grid grid-cols-9 justify-start items-start"
                    key={key}
                  >
                    <div className=" col-span-4 px-3  pb-9">
                      <div className="">
                        <AppSubTitle
                          text={item?.title}
                          class_name="font-medium text-[25px] text-right manropeFont"
                        />
                        <AppDescriptionWithDangerouslySetInnerHTML
                          text={item?.description}
                          class_name="text-right"
                        />
                      </div>
                    </div>
                    <div className=" col-span-1 flex flex-col items-center justify-between  h-full">
                      <AppDescriptionWithDangerouslySetInnerHTML
                        text={String(key + 1)}
                        class_name="border-4 border-secondary !w-[50px] h-[50px] rounded-full text-center flex justify-center items-center !text-secondary !text-[25px] manropeFont bg-white"
                      />

                      <div className="flex-1">
                        {item?.id !== "4" && (
                          <Image
                            src={downArrowImg}
                            alt={"downArrowImg"}
                            quality={100}
                            // priority={true}
                            className="h-full rounded-2xl"
                            loading="lazy"
                            blurDataURL="true"
                          />
                        )}
                      </div>
                    </div>
                    <div className=" col-span-4"></div>
                  </div>
                );
              }
            })}
          </div>

          <div className="w-full md:hidden grid grid-cols-1 gap-3 px-2">
            {data?.map((item: any, key: any) => (
              <div
              className="grid grid-cols-9 justify-start items-start"
              key={key}
            >
              <div className=" col-span-1 flex flex-col justify-between items-center h-full">
                <AppDescriptionWithDangerouslySetInnerHTML
                  text={String(key + 1)}
                  class_name="border-4 border-secondary !w-[50px] h-[50px] rounded-full text-center flex justify-center items-center !text-secondary !text-[25px] manropeFont bg-white"
                />
                <div className="flex-1">
                  {item?.id !== "4" && (
                    <Image
                      src={downArrowImg}
                      alt={"downArrowImg"}
                      quality={100}
                      // priority={true}
                      className="h-full rounded-2xl"
                      loading="lazy"
                      blurDataURL="true"
                    />
                  )}
                </div>
              </div>
              <div className=" col-span-8 pl-5 pb-9">
                <div className="">
                  <AppSubTitle
                    text={item?.title}
                    class_name="font-medium text-[25px] manropeFont"
                  />
                  <AppDescriptionWithDangerouslySetInnerHTML
                    text={item?.description}
                  />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default RPL_informationStep;
