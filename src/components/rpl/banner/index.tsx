import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import {
  AppDescriptionWithDangerouslySetInnerHTML,
  AppTitle,
  Container,
  PageLink,
} from "@/components/share";
import { RPL_BannerData } from "@/data/RPL_Data";
import AppBgImg from "@/components/share/AppBgImg";
import { motion } from "framer-motion";
import AppSliderBannerItem from "@/components/share/section/AppSliderBannerItem";

function RPLBanner() {
  const { title, link, description, bgImg, mobileBG } = RPL_BannerData;

  return (
    <section className="relative w-full">
      {/* <AppSliderBannerItem
        text={title}
        description={description}
        btnData={link}
        img={bgImg}
      /> */}
      <div className=" hidden md:block">
        <AppSliderBannerItem
          text={title}
          description={description}
          btnData={link}
          img={bgImg}
        />
      </div>
      <div className="block md:hidden">
        <AppSliderBannerItem
          text={title}
          description={description}
          btnData={link}
          img={mobileBG}
        />
      </div>
    </section>
  );
}

export default RPLBanner;
