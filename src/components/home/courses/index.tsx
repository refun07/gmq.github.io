import { AppSubTitle, AppTitle, Container } from "@/components/share";
import { HomeCoursesDummyData } from "@/data/HomeCoursesData";
import React from "react";
import CoursesItem from "./CoursesItem";
import { motion } from "framer-motion";
import OldCoursesItem from "./OldCoursesItem";
import ItemCourse from "./ItemCourse";
import AppH2Title from "@/components/share/appHadding/AppH2Title";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * key,
      duration: 0.5 * key,
    },
  }),
};

function HomeCourses() {
  const { title, subTitle, CoursesData } = HomeCoursesDummyData;

  return (
    <section className="bg-white py-9 w-full">
      <Container fullWidth={true}>
        <div className="flex flex-col justify-center items-center flex-wrap">
          <AppH2Title text={title} class_name="!text-center" isAnimation />
          {/* <AppSubTitle text={subTitle} class_name="!text-center" /> */}
          <div className="w-full mt-8 flex justify-center md:gap-5 gap-1 flex-wrap">
            {CoursesData?.map((item, key) => (
              <ItemCourse {...item} key={key} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeCourses;


{/* <OldCoursesItem
                key={key}
                {...item}
                index={key}
                variants={defaultVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={key}
                class_name=" rounded-2xl md:w-[32%] sm:w-[48%] w-[95%] max-w-full "
              /> */}
