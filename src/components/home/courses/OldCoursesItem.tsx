import { AppBtn, AppDescription, PageLink } from "@/components/share";
import AppImg from "@/components/share/AppImg";
import Image from "next/image";
import React from "react";

function OldCoursesItem({
  img,
  title,
  description,
  btn,
  iSPageLink = true,
  handleClick = () => {
    alert("I am Click");
  },
  class_name = "",
  btn_Class_name = "",
}: any) {
  return (
    <div
      className={`max-w-full bg-white rounded my-3 p-3 border shadow flex flex-col justify-between flex-wrap ${class_name}`}
    >
      <div className="flex flex-col justify-center items-center ">
        <AppImg
          src={img}
          alt={title || " image of gmq of popular-courses nursing"}
          class_name="w-full rounded-md h-[290px] object-contain clearFilter"
        />

        <PageLink
          href={btn?.href}
          text={title}
          isIcon={false}
          class_name="mt-3 !justify-start block pb-2 text-[24px] font-medium text-secondary capitalize manropeFont hover:underline  transition-all text-center !font-bold"
        />
        <AppDescription
          text={description}
          class_name="line-clamp-4 text-center"
        />
      </div>
      <div className="mt-5 mb-3 flex justify-center">
        {iSPageLink ? (
          <PageLink {...btn} class_name={`NewCommonBtnStyle border-transparent hover:border-secondary ${btn_Class_name}`} />
        ) : (
          <AppBtn
            text={btn?.text}
            handleClick={handleClick}
            class_name={`commonBtnStyle ${btn_Class_name}`}
          />
        )}
      </div>
    </div>
  );
}

export default OldCoursesItem;
