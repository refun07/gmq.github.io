import React from "react";
import { HomeBannerData, HomeBannerMobileData } from "@/data/BannerData";
import AppSliderBanner from "@/components/share/section/AppSliderBanner";
import { motion } from "framer-motion";

function HomeBanner() {
  return (
    <section className=" w-full">
      <div className="hidden md:block">
        <AppSliderBanner
          data={HomeBannerData}
          img_class_name="md:max-h-[510px] h-[510px]"
          class_name="md:h-[510px]"
        />
      </div>
      <div className="block md:hidden h-[450px] bg-slate-200">
        <AppSliderBanner
          data={HomeBannerMobileData}
          img_class_name="md:max-h-[500px]"
        />
      </div>
    </section>
  );
}

export default HomeBanner;
