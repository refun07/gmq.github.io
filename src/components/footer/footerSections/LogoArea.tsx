import { AppDescription } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import AppImg from "@/components/share/AppImg";
import Image from "next/image";
import React from "react";

function LogoArea({ whiteLogo, text, abn, description,F_logos }: any) {
  return (
    <div className="flex flex-col gap-2 flex-wrap items-left lg:items-center">
      <div className="w-full flex justify-center lg:justify-start">
        <Image
          src={whiteLogo}
          alt={"logo"}
          width={180}
          quality={100}
          // priority={true}
          loading="lazy"
          blurDataURL="true"
        />
      </div>
      <AppDescription
        text={abn}
        class_name="text-white lg:text-left text-center w-full"
      />
      <AppDescription
        text={text}
        class_name="text-white lg:text-left text-center w-full"
      />
      <div className="flex flex-col lg:flex-row justify-start items-center gap-3 flex-wrap">
        <div className="flex flex-row lg:flex-col gap-2">
          <AppImg src={F_logos[0]} alt="f-logo 1" width='60' />
          <AppImg src={F_logos[1]} alt="f-logo 2" width='60' />
        </div>
        <div className="flex-1">
          <AppDescription
            text={description}
            class_name="text-white lg:text-left text-center w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoArea;
