import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
} from "@/components/share";
import Image from "next/image";
import React, { useState } from "react";
import SkillsTestForm from "../skillsTest/SkillsTestForm";

function CourseItem({ text, img, description }: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <div className="flex gap-3 m-2 border justify-center items-center shadow rounded cursor-pointer bg-white hover:bg-secondary z-1 transition-all flex-wrap p-3 pr-5 group" onClick={handelModal}>
        <div className="">
          <Image
            quality={100}
            placeholder="blur"
            src={img}
            alt={text}
            width={250}
            height={150}
            className="rounded object-cover h-[150px]"
            loading="lazy"
            blurDataURL="true"
          />
        </div>
        <div className="md:flex-1">
          <AppDescriptionWithDangerouslySetInnerHTML
            text={text}
            class_name="uppercase mb-2 font-bold text-secondary group-hover:!text-white text-center md:text-left"
          />
          <AppDescriptionWithDangerouslySetInnerHTML
            text={description}
            class_name=" group-hover:!text-white font-light text-center md:text-left"
          />
        </div>
      </div>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </>
  );
}

export default CourseItem;
