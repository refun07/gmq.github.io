import React from "react";
import { AppBtn, AppDescriptionWithDangerouslySetInnerHTML } from "..";

function CourseDetailsBodySection({ text, ContactForm }: any) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
      <div className="left md:col-span-2 p-3 ">
        {text?.map((item: any, key: any) => (
          <>
          <AppDescriptionWithDangerouslySetInnerHTML
            key={key}
            text={item?.text}
            class_name="!text-[18px]"
          />
          <AppBtn text={item?.btn?.text} class_name="bg-secondary text-[18px] text-white p-3 px-9 my-9 mb-16 mx-auto rounded-full hover:opacity-90" />
          </>
        ))}
      </div>
      <div className="right">
        <AppDescriptionWithDangerouslySetInnerHTML text={ContactForm} />
      </div>
    </div>
  );
}

export default CourseDetailsBodySection;
