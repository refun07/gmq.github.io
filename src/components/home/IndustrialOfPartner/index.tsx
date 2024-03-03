import { AppTitle, Container } from "@/components/share";
import { IndustrialOfPartner } from "@/data/IndustrialOfPartner";
import { motion } from "framer-motion";
import React from "react";
import PartnersItem from "./PartnersItem";
import AppH4Title from "@/components/share/appHadding/AppH4Title";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * key,
      duration: 0.05 * key,
    },
  }),
};

function HomeIndustrialOfPartner() {
  const { one } = IndustrialOfPartner;
  const { title, PartnersData } = one;

  return (
    <section className="py-9 bg-cream/10 w-full">
      <Container fullWidth>
        <div className="">
          <AppH4Title
            text={title}
            class_name="capitalize text-center"
            isAnimation
          />
          <div className="hidden lg:block">
            <Swiper
              slidesPerView={1}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className={`w-full IndustrialOfPartner`}
            >
              <SwiperSlide>
                <div className="w-full grid grid-cols-5 justify-center flex-wrap gap-2  mt-5 pb-9">
                  {PartnersData?.slice(0, 10).map((item: any, key: any) => (
                    <PartnersItem
                      key={key}
                      {...item}
                      custom={key}
                      class_name=" w-full max-w-full"
                      odd={!(key % 2)}
                    />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full grid grid-cols-5 justify-center flex-wrap gap-2 mt-5 pb-9">
                  {PartnersData?.slice(10, 20).map((item: any, key: any) => (
                    <PartnersItem
                      key={key}
                      {...item}
                      custom={key}
                      class_name=" w-full max-w-full"
                      odd={!(key % 2)}
                    />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full grid grid-cols-5 justify-center flex-wrap gap-2 mt-5 pb-9">
                  {PartnersData?.slice(20, 30).map((item: any, key: any) => (
                    <PartnersItem
                      key={key}
                      {...item}
                      custom={key}
                      class_name=" w-full max-w-full"
                      odd={!(key % 2)}
                    />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="block lg:hidden mt-4">
            <Swiper
              slidesPerView={1}
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 7,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 7,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 7,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              centeredSlides={true}
              modules={[ Mousewheel, Keyboard, Autoplay]}
              className={`w-full IndustrialOfPartner`}
            >
              
              {PartnersData?.map((item: any, key: any) => (
                <SwiperSlide key={key}>
                  <PartnersItem
                    {...item}
                    custom={key}
                    class_name=""
                    odd={!(key % 2)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeIndustrialOfPartner;
