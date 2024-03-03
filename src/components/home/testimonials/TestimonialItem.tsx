import { AppDescription, AppSubTitle } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import Image from "next/image";
import React from "react";

function TestimonialItem({
  id,
  avatar,
  name,
  bio,
  messages,
  secondaryImg,
}: any) {
  return (
    <div className="border w-full rounded-2xl md:p-6 p-3 lg:h-[250px] min-h-[280px] flex flex-col justify-between gap-1 bg-primary">
      <div className="flex-1 flex justify-center items-center md:justify-start md:items-start">
        <AppDescriptionWithDangerouslySetInnerHTML
          text={messages}
          class_name="manropeFont text-white"
        />
      </div>
      <div className="mt-9 flex justify-between items-center flex-wrap gap-2">
        <div className=" flex justify-start items-center gap-3 flex-wrap">
          <Image
            src={avatar}
            alt={"logo"}
            width={50}
            height={50}
            quality={100}
            // priority={true}
            loading="lazy"
            blurDataURL="true"
            className="border-4 rounded-full border-secondary"
          />
          <div className="">
            <AppSubTitle
              text={name}
              class_name="uppercase font-bold text-white"
            />
            <AppDescription text={bio} class_name="text-white" />
          </div>
        </div>
        <div className="df">
          <Image
            src={secondaryImg}
            alt={"logo"}
            width={70}
            quality={100}
            // priority={true}
            loading="lazy"
            blurDataURL="true"
            className="!"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
