import React from "react";
import { AppTitle, Container } from "../share";
import { TestimonialDummyData } from "@/data/TestimonialData";
import TestimonialItem from "./TestimonialItem";

function TestimonialSection() {
  const { title, reviewData } = TestimonialDummyData;
  return (
    <div className="py-16 w-full">
      <Container>
        <AppTitle text={title} class_name="!text-center" />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 mt-9">
          {reviewData?.map((item, key) => (
            <TestimonialItem key={key} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TestimonialSection;
