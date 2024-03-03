import { AppDescription, AppSubTitle, PageLink } from "@/components/share";
import AppBgImg from "@/components/share/AppBgImg";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function HelpOfGMQItem({ id, img, title, HelpOfGMQBody, btn }: any) {
  return (
    <div className="lg:w-[24%] md:w-[250px] sm:w-[49%] w-full max-w-full rounded-2xl my-3 border shadow flex flex-col justify-between hover:border-secondary transition-all flex-wrap">
      <div className="h-56 relative flex items-end md:p-5 p-3 overflow-hidden flex-wrap">
        <PageLink
          href={btn?.href}
          text={title}
          isIcon={false}
          class_name="!justify-start block text-[20px] font-medium text-white capitalize "
        />
        <AppBgImg BgImg={img} class_name="rounded-t-2xl " />
      </div>

      <div className="mt-3 flex flex-col justify-center md:p-5 p-3 flex-wrap">
        <AppDescription text={HelpOfGMQBody?.description} />
        <div className="py-4 p-1">
          {HelpOfGMQBody?.services?.map((item: any, key: any) => (
            <div className="flex gap-1 items-center flex-wrap" key={key}>
              <AiFillCheckCircle color="#00AAAC" size={20} />
              <PageLink {...item} isIcon={false} class_name="underline" />
            </div>
          ))}
        </div>
        <PageLink {...btn} class_name="commonBtnStyle mt-7 w-full" />
      </div>
    </div>
  );
}

export default HelpOfGMQItem;
