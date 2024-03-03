import {
  AppBgImg,
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  AppSubTitle,
  AppTitle,
  Container,
  EntryForm,
} from "@/components/share";
import { OurRenownIndustriesData } from "@/data/OurRenownIndustries";
import { contactFormPopUpData, popUp_ElementData } from "@/data/ShareData";
import React, { useState } from "react";

function OurRenownIndustries() {
  const { title, data } = OurRenownIndustriesData;
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      <div className="py-9">
        <Container fullWidth>
          <div className="flex flex-col gap-5 justify-center items-center">
            <AppTitle text={title} />
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-1 justify-center items-center w-full md:h-[900px] h-[1800px] py-2">
              {data?.map((item: any, key: any) => (
                <div
                  key={key}
                  className={`cursor-pointer rounded-lg hover:opacity-90 overflow-hidden transition-all ease-in-out duration-300 border p-3 md:p-7 h-full relative
                  ${
                    item?.id === "1" && "md:row-start-1 md:row-end-2"
                  }
                  ${
                    item?.id === "3" && "md:row-start-1 md:row-end-3 md:col-start-3"
                  }
                  ${
                    item?.id === "4" && "md:row-start-2 md:row-end-4"
                  }
                  ${
                    item?.id === "5" && "md:row-start-2 md:row-end-4"
                  }
                  
                  `}
                  onClick={handelModal}
                >
                  <div className="w-full h-full flex justify-start items-end">
                    <div className="fd">
                      <AppSubTitle
                        text={item?.title}
                        class_name="text-[32px] leading-8 text-white font-medium mb-2"
                      />
                      <AppDescriptionWithDangerouslySetInnerHTML
                        text={item?.description}
                        class_name="text-white md:!text-[18px] line-clamp-4"
                      />
                    </div>
                  </div>

                  <AppBgImg
                    BgImg={item?.img}
                    alt={title}
                    class_name="group-hover:scale-110 transition-all ease-in-out duration-500"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {modalShow && (
        <AppModal
          handelModal={handelModal}
          content={<EntryForm data={contactFormPopUpData} />}
        />
      )}
    </>
  );
}

export default OurRenownIndustries;


// ${
//   item?.id === "3" &&
//   "md:col-start-3 md:row-start-1 md:row-end-3"
// }
// ${
//   item?.id === "4" &&
//   "md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3"
// }
// ${
//   item?.id === "5" &&
//   "md:col-start-1 md:col-end-2"
// }
// ${
//   item?.id === "6" &&
//   "md:col-start-2 md:col-end-4"
// }

