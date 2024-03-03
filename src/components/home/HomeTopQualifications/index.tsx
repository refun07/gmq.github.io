import CookeryCoursesSectionOneItem from "@/components/courses/popular-courses/CookeryCourse/subItem/CookeryCoursesSectionOneItem";
import QualificationItemResult from "@/components/rpl/allQualifications/sub/QualificationItemResult";
import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppTitle,
  Container,
  EntryForm,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import { HomeTopQualificationsData } from "@/data/HomeTopQualifications";
import { contactFormPopUpData } from "@/data/ShareData";
import React, { useState } from "react";
import TopQualificationsItem from "./TopQualificationsItem";
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
import { IndustrialOfPartner } from "@/data/IndustrialOfPartner";
import PartnersItem from "../IndustrialOfPartner/PartnersItem";
import HomeTopQualificationsForDesktop from "./HomeTopQualificationsForDesktop";

function HomeTopQualifications() {
  const { title, data } = HomeTopQualificationsData;

  return (
    // <>
    // {/* mobile view  */}
    // <div className="py-9 md:hidden">
    //   <Container fullWidth>
    //     <div className="flex flex-col justify-center items-center gap-5">
    //       <AppTitle text={title} />
    //       {/* <div className="grid grid-cols-5 justify-center flex-wrap gap-1 w-full ">
    //         {data?.map((item: any, key: any) => (
    //             <TopQualificationsItem key={key} {...item} />
    //           ))}
    //       </div> */}
    //       <div className="w-full">
    //         <Swiper
    //           slidesPerView={1}
    //           navigation={true}
    //           loop={true}
    //           autoplay={{
    //             delay: 3000,
    //           }}
    //           pagination={{
    //             clickable: true,
    //           }}
    //           breakpoints={{
    //             1280: {
    //               slidesPerView: 5,
    //               spaceBetween: 7,
    //             },
    //             1024: {
    //               slidesPerView: 4,
    //               spaceBetween: 7,
    //             },
    //             768: {
    //               slidesPerView: 3,
    //               spaceBetween: 7,
    //             },
    //             500: {
    //               slidesPerView: 2,
    //               spaceBetween: 10,
    //             },
    //           }}
    //           centeredSlides={true}
    //           modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
    //           className={`w-full TopQualifications`}
    //         >
    //           {data?.map((item: any, key: any) => (
    //             <SwiperSlide key={key}>
    //               <div className="pb-9">
    //                 <TopQualificationsItem {...item} />
    //               </div>
    //             </SwiperSlide>
    //           ))}
    //         </Swiper>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    // {/* desktop  */}
    // <HomeTopQualificationsForDesktop />
    // </>
    <>
    <Container fullWidth>
      <div className="flex flex-col gap-5 justify-center items-center ">
        <AppTitle text={title} />
        <div className="flex justify-center flex-wrap gap-2">
          {data?.map((item: any, key: any) => (
            <div className="pb-2" key={key}>
              <TopQualificationsItem {...item} class_name="md:w-[270px] sm:w-[250px] w-[300px] h-full border" />
            </div>
          ))}
        </div>
      </div>
    </Container>
      
    </>
  );
}

export default HomeTopQualifications;
