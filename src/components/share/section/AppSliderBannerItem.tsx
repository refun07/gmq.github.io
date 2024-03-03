import React from "react";
import { AppBgImg, AppBtn, AppSubTitle, AppTitle, Container } from "..";
import { useRouter } from "next/router";
import AppH2Title from "../appHadding/AppH2Title";
import AppH4Title from "../appHadding/AppH4Title";

function AppSliderBannerItem({
  text,
  description,
  btnData,
  img,
  ExtraText,
  class_name,
  noFilterImg
}: any) {
  const router = useRouter();

  const clickBtn = (data: any) => {
    router.push(data || "/");
  };
  return (
    <>
      <div
        className={`relative md:h-[460px] sm:h-[300px] h-auto overflow-hidden z-0 hidden md:block  ${class_name}`}
      >
        <Container>
          <div
            className={`lg:w-[650px] md:1/2 sm:w-2/3 w-full flex justify-center items-center md:h-[460px]  sm:h-[300px] h-auto py-5 sm:py-0 ${class_name}`}
          >
            <div className="flex flex-col gap-1 pl-0 sm:pl-3 ms:pl-0">
              <AppH2Title
                text={text || ""}
                class_name="text-white !text-left lg:text-[45px] md:text-[30px] text-[20px] textShadow leading-tight"
              />
              <AppH4Title
                text={ExtraText || ""}
                class_name="text-white !text-left textShadow lg:text-[30px] md:text-[25px] text-[18px]"
              />
              {/* <AppDynamicTitle text={`<h3>${ExtraText}</h3>`} /> */}
              <AppSubTitle
                text={description || ""}
                class_name="text-white !text-left text-[22px] textShadowNormal line-clamp-4
              "
              />
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {btnData.map((btnItem: any, key: any) => (
                  <AppBtn
                    key={key}
                    text={btnItem?.text}
                    handleClick={() => clickBtn(btnItem?.href || "")}
                    class_name="NewCommonBtnStyle mt-3 bg-primary hover:bg-secondary hover:text-white rounded-full  border-primary hover:border-white text-[18px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
        <AppBgImg src={img} alt={text || "GMQ GLOBAL slider img"} class_name={noFilterImg || " "} />
      </div>
      {/* mobile  */}
      <div
        className={`relative h-[450px] overflow-hidden z-0 block md:hidden ${class_name}`}
      >
        <Container>
          <div className="md:w-1/2 sm:w-2/3 w-full flex justify-start items-start h-[450px] py-5 sm:py-0">
            <div className="flex flex-col gap-2 pt-4">
              <AppH2Title
                text={text || ""}
                class_name="text-white !text-left lg:text-[45px] md:text-[30px] text-[28px] textShadow leading-tight"
              />
              <AppH4Title
                text={ExtraText || ""}
                class_name="text-white !text-left textShadow lg:text-[30px] md:text-[25px] text-[18px]"
              />
              <AppSubTitle
                text={description || ""}
                class_name="text-white !text-left !text-[16px] textShadowNormal line-clamp-3
              "
              />
              <div className="flex justify-start items-center gap-2 flex-wrap">
                {btnData.map((btnItem: any, key: any) => (
                  <AppBtn
                    key={key}
                    text={btnItem?.text}
                    handleClick={() => clickBtn(btnItem?.href || "")}
                    class_name="NewCommonBtnStyle mt-3 bg-primary hover:bg-transparent hover:text-white rounded-full  border-primary hover:border-white"
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
        <AppBgImg src={img} alt={text || "GMQ GLOBAL slider img"} />
      </div>
    </>
  );
}

export default AppSliderBannerItem;
