import { Container } from "@/components/share";
import LeftToRight from "@/components/share/section/LeftToRight";
import { NursingCourseDummyData } from "@/data/popular-courses/NursingCourseData";
import React from "react";

function NursingCourseAboutSection() {
  const { NursingCourseAboutSection } = NursingCourseDummyData;
  const { title, img, description } = NursingCourseAboutSection;
  return (
    <div className="py-9">
      <Container>
        <div className="df">
          <LeftToRight
            title={title}
            tiny_mceEditor={description}
            sideImg={img}
            alt={title}
            heading
            class_name="lg:gap-5"
          />
        </div>
      </Container>
    </div>
  );
}

export default NursingCourseAboutSection;
