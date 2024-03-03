import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
} from "@/components/share";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import Image from "next/image";
import React from "react";

function MigrationServicesSectionTwo() {
  const { sectionTwo } = ServiceMigrationServicesDummyData;
  const { left, right } = sectionTwo;
  return (
    <div className="py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex justify-center items-center">
            <Image
              src={left?.img}
              alt={right?.title}
              width={300}
              quality={100}
              // priority={true}
              loading="lazy"
              blurDataURL="true"
            />
          </div>
          <div className="right">
            <AppTitle text={right?.title} />
            <div className="mt-5 flex flex-col gap-2">
              {right?.description?.map((item, key) => (
                <AppDescriptionWithDangerouslySetInnerHTML
                  key={key}
                  text={item}
                  class_name="text-center md:text-left"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MigrationServicesSectionTwo;
