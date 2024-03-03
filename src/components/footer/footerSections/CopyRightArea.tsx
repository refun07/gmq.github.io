import { Container } from "@/components/share";
import AppDescriptionWithDangerouslySetInnerHTML from "@/components/share/AppDescriptionWithDangerouslySetInnerHTML";
import React from "react";

function CopyRightArea({ text, socialLinkData }: any) {
  return (
    <div className="bg-primary p-2">
      <Container>
        <div className="py-2 grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-0">
          <AppDescriptionWithDangerouslySetInnerHTML
            text={text}
            class_name="text-white capitalize text-center sm:text-left"
          />
          <div className="flex justify-center sm:justify-end items-center gap-2 flex-wrap">
            {socialLinkData?.map((item: any, key: any) => {
              return (
                <a
                  href={item?.href}
                  className="hover:bg-secondary bg-primary opacity-90 hover:opacity-100 p-1 text-white rounded transition-all"
                  key={key}
                  target="_blank"
                >
                  {item?.icon}
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CopyRightArea;
