import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  EntryForm,
  PageLink,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { contactFormPopUpData } from "@/data/ShareData";
import React, { useState } from "react";

function TopQualificationsItem({ img, title, textClass_name, class_name }: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  
  return (
    <>
      <div
        className={`w-full p-2 bg-white rounded-[24px] flex flex-col shadow hover:shadow-md transition-all hover:!scale-[1.02] ease-in duration-200 h-[390px] ${class_name}`}
      >
        <AppImg
          src={img}
          alt={title}
          height={250}
          class_name="rounded-[16px] object-cover lg:h-[200px] sm:h-[200px] h-[250px] w-full"
        />

        <div className="my-4 flex-1">
          <AppDescriptionWithDangerouslySetInnerHTML
            text={title}
            class_name={`manropeFont font-semibold text-secondary group-hover:!text-white text-center !text-[20px] ${textClass_name}`}
          />
        </div>

        <PageLink text={"contact now"} href="/contact-us" isIcon={false} 
          class_name="commonBtnStyle w-full rounded-2xl mt-4" />
      </div>

    </>
  );
}

export default TopQualificationsItem;
