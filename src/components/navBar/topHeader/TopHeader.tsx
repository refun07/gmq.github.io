import { SkillsTestForm } from "@/components/rpl";
import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  Container,
} from "@/components/share";
import { HomeFooterDummyData } from "@/data/HomeFooterData";
import { call } from "@/data/ShareData";
import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";

function TopHeader() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  const { socialLinks } = HomeFooterDummyData;
  return (
    <section className="border-b">
      <Container fullWidth isContainer={false} class_name="lg:!px-9">
        <div className="sm:grid grid-cols-2 sm:justify-center items-center flex flex-wrap justify-around">
          <div className="flex justify-start items-center gap-2 text-primary">
            {socialLinks?.map((item: any, key: any) => {
              return (
                <a href={item?.href} key={key} target="_blank">
                  {item?.icon}
                </a>
              );
            })}
          </div>
          <div className="flex sm:justify-end justify-center items-center gap-1">
            <div className="flex flex-wrap justify-center items-center bg-secondary rounded-full p-1">
              <div className="p-1 rounded-full">
                <MdAddCall size={18} color="#fff" />
              </div>
              <AppDescriptionWithDangerouslySetInnerHTML
                text={call}
                class_name="capitalize hover:opacity-95 text-[14px] text-white !w-fit pr-3"
              />
            </div>
            <AppBtn
              text={"FREE 60 second skills check"}
              class_name="capitalize border md:px-4 px-2 md:py-2 py-1 rounded-full bg-secondary text-white hover:opacity-95 text-[14px]"
              handleClick={() => handelModal()}
            />
          </div>
        </div>
      </Container>

      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </section>
  );
}

export default TopHeader;
