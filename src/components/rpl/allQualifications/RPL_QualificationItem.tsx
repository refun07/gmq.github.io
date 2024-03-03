import {
  AppBgImg,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppSubTitle,
  EntryForm,
  PageLink,
} from "@/components/share";
import React, { useState } from "react";
import { BiSolidHandRight } from "react-icons/bi";
import { motion } from "framer-motion";
import AppImg from "@/components/share/AppImg";
import { contactFormOfHome, contactFormPopUpData } from "@/data/ShareData";
import { BsDot } from "react-icons/bs";

function RPL_QualificationItem({
  brandImg,
  link,
  content,
  RPL_Img,
  show,
  ...rest
}: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  return (
    <>
      <motion.div
        className="w-full max-w-full rounded-2xl my-3  shadow flex flex-col justify-between flex-wrap z-0 bg-white"
        {...rest}
      >
        <div className="h-56 relative flex items-end md:p-5 p-3 overflow-hidden flex-wrap">
          <AppSubTitle
            text={content?.title}
            class_name="!justify-start block text-[20px] font-medium text-white capitalize "
          />
          <AppBgImg BgImg={RPL_Img} class_name="rounded-t-2xl " />
          <AppImg
            src={brandImg}
            width={30}
            height={30}
            alt="GMQ GLOBAL brand img"
            isPlaceholder={false}
            class_name="absolute top-1 right-1"
          />
        </div>

        <div className="flex flex-col p-3 flex-wrap flex-1">
          <div className="df">
            {content?.link?.slice(0, show).map((item: any, key: any) => (
              <div
                className="flex justify-start gap-1 mb-2 "
                key={key}
                // onClick={handelModal}
              >
                <div className="pt-1">
                  {/* <BiSolidHandRight color="#00AAAC" size={20} /> */}
                <BsDot color="#00AAAC" size={20} />
                </div>
                <div className="flex-1">
                  <AppDescriptionWithDangerouslySetInnerHTML
                    text={item?.text.toLowerCase()}
                    class_name=" font-light "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3">
          {/* <PageLink {...link} class_name="commonBtnStyle w-full" /> */}
          <PageLink text={'contact us'} href={'/contact-us'} class_name="commonBtnStyle w-full" />
        </div>
      </motion.div>

      {modalShow && (
        <AppModal handelModal={handelModal} content={<EntryForm data={contactFormPopUpData} />} />
      )}
    </>
  );
}

export default RPL_QualificationItem;
