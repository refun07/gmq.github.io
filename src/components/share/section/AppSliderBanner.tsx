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
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AppBgImg, AppBtn, AppSubTitle, AppTitle, Container } from "..";
import { useRouter } from "next/router";
import AppSliderBannerItem from "./AppSliderBannerItem";

function AppSliderBanner({
  data,
  class_name,
  img_class_name = "md:max-h-[450px]",
  ...rest
}: any) {
  return (
    <section className="w-full">
      {data?.length === 1 ? (
        <AppSliderBannerItem
          text={data[0]?.text}
          description={data[0]?.description}
          btnData={data[0]?.btn}
          img={data[0].img}
          ExtraText={data[0].extraText}
        />
      ) : (
        <Swiper
          slidesPerView={1}
          initialSlide={3}
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          {...rest}
          className={`HomeBannerSwipeWrap overflow-hidden object-cover  ${class_name}`}
        >
          {data?.map((item: any, key: any) => (
            <SwiperSlide key={key}>
              <AppSliderBannerItem
                text={item?.text}
                description={item?.description}
                btnData={item?.btn}
                img={item.img}
                ExtraText={item.ExtraText}
                class_name={class_name}
                noFilterImg={item.noFilterImg}
              />
              {/* <Image
                src={item?.img}
                alt={item?.text || "GMQ GLOBAL slider img"}
                quality={100}
                // priority={true}
                loading="lazy"
                // blurDataURL="true"
                placeholder="blur"
                className={`HomeBannerSwipeWrapSliderImg ${img_class_name}`}
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default AppSliderBanner;
