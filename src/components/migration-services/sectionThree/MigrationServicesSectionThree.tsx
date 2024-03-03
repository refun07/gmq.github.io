import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import Image from "next/image";
import React from "react";

function MigrationServicesSectionThree() {
  const { sectionThree } = ServiceMigrationServicesDummyData;
  const { left, right } = sectionThree;
  return (
    <div className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="left">
            <AppTitle text={left?.title} />
            <div className="mt-5 flex flex-col gap-2">
              {left?.description?.map((item, key) => (
                <AppDescriptionWithDangerouslySetInnerHTML
                  key={key}
                  text={item}
                  class_name="text-center md:text-left"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={right?.img}
              alt={left?.title}
              width={300}
              quality={100}
              // priority={true}
              loading="lazy"
              blurDataURL="true"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MigrationServicesSectionThree;
