import {
  AppBgImg,
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppTitle,
  Container,
  EntryForm,
} from "@/components/share";
import { TeachingDummyData } from "@/data/popular-courses/TeachingData";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { contactFormOfHome, contactFormPopUpData } from "@/data/ShareData";
import AppH4Title from "@/components/share/appHadding/AppH4Title";

function SectionFourOfTeaching() {
  const [modalShow, setModalShow] = useState(false);

  const { SectionFourOfTeaching } = TeachingDummyData;
  const { title, text, btn, secondaryImg } = SectionFourOfTeaching;

  
  const handelModal = () => {
    setModalShow(!modalShow);
  };


  return (
    <section className="py-16 relative w-full">
      <Container>
        <div className="flex flex-wrap flex-col gap-5 md:w-2/3 w-full bg-primary rounded-lg p-9 justify-center items-center md:justify-start md:items-start">
          <AppH4Title text={title} class_name=" text-white" />
          <AppDescriptionWithDangerouslySetInnerHTML
            text={text}
            class_name="text-white text-center md:text-left"
          />
          <AppBtn
            text={btn?.text}
            handleClick={handelModal}
            class_name="commonBtnStyle rounded-full py-4 hover:bg-transparent"
          />
        </div>
      </Container>
      <AppBgImg
        BgImg={secondaryImg}
        alt={title + " background"}
        class_name="blur-[0px]"
      />
       {modalShow && (
        <AppModal
          handelModal={handelModal}
          content={<EntryForm data={contactFormPopUpData} />}
        />
      )}
    </section>
  );
}

export default SectionFourOfTeaching;
