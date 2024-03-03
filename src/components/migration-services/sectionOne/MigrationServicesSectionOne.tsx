import React from "react";
import { AppTitle, Container } from "../../share";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import MigrationServicesSectionOneItem from "./MigrationServicesSectionOneItem";

function MigrationServicesSectionOne() {
  const { sectionOne } = ServiceMigrationServicesDummyData;
  const { title, itemData } = sectionOne;
  return (
    <div className="py-16">
      <Container>
        <AppTitle text={title} class_name="!text-center" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-center items-center mt-8">
          {itemData?.map((item, key) => (
            <MigrationServicesSectionOneItem key={key} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MigrationServicesSectionOne;
