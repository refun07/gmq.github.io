import CoursesItem from "@/components/home/courses/CoursesItem";
import { Container } from "@/components/share";
import { ServiceMigrationServicesDummyData } from "@/data/ServiceMigrationServicesData";
import React from "react";

function MigrationServicesSectionFour() {
  const { sectionFour } = ServiceMigrationServicesDummyData;
  const { courses } = sectionFour;
  return (
    <div className="py-16">
      <Container>
        <div className="flex justify-center flex-wrap gap-5 mt-8 w-full">
          {courses?.map((item, key) => (
            <CoursesItem key={key} {...item} class_name='w-full md:w-[33%] sm:w-[48%] ' />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MigrationServicesSectionFour;
