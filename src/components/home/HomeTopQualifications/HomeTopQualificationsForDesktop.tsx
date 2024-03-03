import { AppTitle, Container } from "@/components/share";
import React from "react";
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
import { HomeTopQualificationsData } from "@/data/HomeTopQualifications";
import TopQualificationsItem from "./TopQualificationsItem";

function HomeTopQualificationsForDesktop() {
  const { title, data } = HomeTopQualificationsData;

  return (
    <div className="hidden md:block">
      <Container fullWidth>
      <div className="flex flex-col justify-center items-center">
      <AppTitle text={title} />
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className={`w-full TopQualifications`}
          >
            <SwiperSlide>
              <div className="w-full grid grid-cols-5 justify-center flex-wrap gap-2  mt-5 pb-9 ">
                {data?.slice(0, 5).map((item: any, key: any) => (
                  <TopQualificationsItem key={key} {...item} class_name="border " />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full grid grid-cols-5 justify-center flex-wrap gap-2 mt-5 pb-9">
                {data?.slice(5, 10).map((item: any, key: any) => (
                  <TopQualificationsItem key={key} {...item} class_name="border" />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default HomeTopQualificationsForDesktop;
