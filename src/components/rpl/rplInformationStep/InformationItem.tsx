import {
  AppBgImg,
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  PageLink,
} from "@/components/share";
import React from "react";

function InformationItem({ title, subTitle, description, img }: any) {
  return (
    <div className="w-full max-w-full rounded my-3 border shadow flex flex-col justify-between transition-all flex-wrap z-0 overflow-hidden">
      <div className="h-56 relative flex items-end md:p-5 p-3 overflow-hidden flex-wrap">
        <div className="flex-1 w-full h-full flex flex-col justify-between items-end">
          <AppSubTitle
            text={subTitle}
            class_name="!justify-start block text-[14px] font-medium capitalize rounded-full bg-error text-white w-fit p-1 px-3"
          />
          <AppTitle
            text={title}
            class_name="!text-[22px] mt-1 text-white w-full"
          />
        </div>
        <AppBgImg BgImg={img} class_name="rounded-t" />
      </div>
      <div className="p-4 flex-1">
        <AppDescriptionWithDangerouslySetInnerHTML
          text={description}
          class_name="font-light"
        />
      </div>
    </div>
  );
}

export default InformationItem;
