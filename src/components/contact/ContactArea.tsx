import React from "react";
import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
  AppTitle,
  Container,
} from "../share";
import { ContactDummyData } from "@/data/ContactData";
import { CommonFormDummyData } from "@/data/ContactAllForm";
import { FaRegClock } from "react-icons/fa";
import { LocationOfGoogleMap } from "@/data/ShareData";

function ContactArea() {
  const { left } = CommonFormDummyData;
  const { ContactSectionOne } = ContactDummyData;
  const { title, text, data } = ContactSectionOne;
  return (
    <div className="overflow-hidden pt-9">
      <Container fullWidth>
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-2">
          <div className=" w-full pt-14 md:px-9  rounded-r-lg">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-1">
              {data?.map((item, key) => (
                <div
                  className={`flex justify-between items-start flex-wrap gap-4 rounded p-2 bg-white  `}
                  key={key}
                >
                  <div className=" bg-secondary p-2 rounded">
                    {item?.asserts}
                  </div>
                  <div className="flex-1">
                    <AppSubTitle text={item?.title} class_name="text-[22px]" />
                    <AppDescriptionWithDangerouslySetInnerHTML
                      text={item?.text}
                      class_name="!text-[18px] !text-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-9">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={LocationOfGoogleMap}
                class_name="border-2 w-full rounded "
              />
            </div>
          </div>
          <div className="pb-24 pt-10 md:px-5 px-2 ">
            <div className=" h-full">
              <AppTitle
                text={"Get In Touch"}
                class_name="text-center pb-3 border-b "
                heading
              />
              <AppDescriptionWithDangerouslySetInnerHTML
                text={left?.form}
                class_name="h-[820px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactArea;
