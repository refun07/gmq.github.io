import React from 'react'
import { AppBgImg, AppBtn, AppSubTitle, AppTitle, Container } from '..'
import { useRouter } from 'next/router';


function AppSliderMobileBanner({text, description, btnData, img, ExtraText }:any) {
const router = useRouter();

  const clickBtn = (data: any) => {
    router.push(data || "/");
  };
  return (
    <div className="relative md:h-[460px] sm:h-[300px] h-auto overflow-hidden z-0">
    <Container>
      <div className="md:w-1/2 sm:w-2/3 w-full flex justify-center items-center md:h-[460px]  sm:h-[300px] h-auto py-5 sm:py-0">
        <div className="flex flex-col gap-1 pl-0 sm:pl-3 ms:pl-0">
          <AppTitle
            text={text || ""}
            class_name="text-white !text-left lg:text-[45px] md:text-[30px] text-[20px] textShadow leading-tight"
          />
          <AppTitle
            text={ExtraText || ""}
            class_name="text-white !text-left textShadow lg:text-[30px] md:text-[25px] text-[18px]"
          />
          <AppSubTitle
            text={description || ""}
            class_name="text-white !text-left text-[16px] textShadowNormal line-clamp-3
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
    <AppBgImg
      src={img}
      alt={text || "GMQ GLOBAL slider img"}
    />
  </div>
  )
}

export default AppSliderMobileBanner
