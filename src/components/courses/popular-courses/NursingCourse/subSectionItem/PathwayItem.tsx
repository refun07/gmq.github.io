import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import React from "react";

function PathwayItem({ id, name, text }: any) {
  return (
    <div className="grid grid-cols-2 justify-center items-center">
      <div className={`relative ${!(Number(id) % 2) ? "order-2 PathwayItem_Left" : "PathwayItem_Right"}`}>
        <div className={`p-5 border mx-9 shadow py-9 px-9`}>
          <AppSubTitle text={name} class_name="font-bold" />
          <AppDescriptionWithDangerouslySetInnerHTML text={text} />
        </div>
      </div>
      <div className="df"></div>
    </div>
  );
}

export default PathwayItem;
