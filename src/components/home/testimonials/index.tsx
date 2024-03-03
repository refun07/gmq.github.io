import { AppTitle, Container } from "@/components/share";
import { HomeTestimonialDummyData } from "@/data/HomeTestimonialData";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";
import { motion } from "framer-motion";
import AppH6Title from "@/components/share/appHadding/AppH6Title";

function HomeTestimonials() {
  const { title, secondaryImg, TestimonialDummyData } =
    HomeTestimonialDummyData;
  return (
    <section className="py-8 w-full">
      <Container fullWidth class_name="!py-0">
        <div className="flex justify-center items-center flex-col gap-5 flex-wrap">
          <AppH6Title
            text={title}
            class_name="text-center md:w-1/2 w-full"
            isAnimation
          />
          <div className="w-full grid grid-cols-1 justify-center items-center ">
            <div className="px-3">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 7,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 7,
                  },
                  560: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper Testimonial !pb-14 "
              >
                {TestimonialDummyData?.map((item, key) => (
                  <SwiperSlide key={key}>
                    <TestimonialItem {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeTestimonials;
