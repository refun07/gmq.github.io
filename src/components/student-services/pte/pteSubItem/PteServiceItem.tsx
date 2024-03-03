import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppTitle,
  EntryForm,
  PageLink,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { contactFormOfHome } from "@/data/ShareData";
import React, { useState } from "react";

const contactFormPopUpData = `
<h4 class="text-center text-2xl py-5">Hey, we’d like to know you better too! </h4>
${contactFormOfHome}
`;

function PteServiceItem({ img, title, btn }: any) {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <div className="flex justify-between items-center flex-col gap-4 mb-3 md:mb-1 px-5">
      <div className="flex justify-between items-center flex-col gap-4 flex-1">
        <AppImg
          src={img}
          alt={title}
          class_name="w-[200px] rounded-2xl border-2 border-secondary shadow-md object-cover"
        />
        <AppDescriptionWithDangerouslySetInnerHTML
          text={title}
          class_name=" text-center font-medium text-lg"
        />
      </div>
      {/* <div className="">
        <AppBtn
          text={"Contact Now"}
          class_name="commonBtnStyle w-full rounded"
          handleClick={handelModal}
        />
      </div> */}
      {modalShow && (
        <AppModal
          handelModal={handelModal}
          content={<EntryForm data={contactFormPopUpData} />}
        />
      )}
    </div>
  );
}

export default PteServiceItem;
