import { AppDescriptionWithDangerouslySetInnerHTML } from "@/components/share";
import Image from "next/image";
import React from "react";

function MigrationServicesSectionOneItem({ img, description }: any) {
  return (
    <div className="flex flex-col justify-center items-center p-9">
      <Image
        src={img}
        alt={description}
        width={200}
        height={200}
        quality={100}
        // priority={true}
              loading="lazy"
              blurDataURL="true"
      />
      <AppDescriptionWithDangerouslySetInnerHTML text={description} class_name="text-center" />
    </div>
  );
}

export default MigrationServicesSectionOneItem;
