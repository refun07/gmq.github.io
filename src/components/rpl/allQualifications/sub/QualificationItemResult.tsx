import {
  AppBtn,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppModal,
  EntryForm,
} from "@/components/share";
import AppImg from "@/components/share/AppImg";
import React, { useEffect, useState } from "react";
import { createPagination } from "@/components/share/lib";
import { contactFormPopUpData } from "@/data/ShareData";


function QualificationItemResult({
  allRPL_QualificationItems = [],
  class_nameOfBtn = "lg:col-span-3 sm:col-span-2 col-span-1",
  outPutItemNumber = 6,
  class_name,
}: any) {
  const [modalShow, setModalShow] = useState(false);
  const [getData, setGetData] = useState(allRPL_QualificationItems);
  const [PaginationDates, setPaginationDates] = useState([]);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  const loadMore = () => {
    if (PaginationDates.length === getData.length) return;
    const newProducts = createPagination(
      getData,
      outPutItemNumber,
      PaginationDates.length
    );
    const newItems: any = [...PaginationDates, ...newProducts];
    setPaginationDates(newItems);
  };

  useEffect(() => {
    setPaginationDates(createPagination(getData, outPutItemNumber, 0));
  }, [getData, outPutItemNumber]);

  useEffect(() => {
    setGetData(allRPL_QualificationItems);
  }, [allRPL_QualificationItems]);

  return (
    <>
      {PaginationDates?.map((item: any, key: any) => (
        <div
          className={`w-full p-2 bg-white rounded-[24px] flex flex-col shadow hover:shadow-md transition-all hover:!scale-[1.02] ease-in duration-200 ${class_name}`}
          key={key}
        >
          <AppImg
            src={item?.img}
            alt={item?.text}
            height={250}
            class_name="rounded-[16px] object-cover lg:h-[200px] sm:h-[200px] h-[250px] w-full"
          />

          <div className="my-4 flex-1">
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.text}
              class_name="manropeFont mb-2 font-semibold text-secondary group-hover:!text-white text-center !text-[20px]"
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={item?.description}
              class_name=" group-hover:!text-white font-light text-center line-clamp-3"
            />
          </div>
          <AppBtn
            text={"Contact Now"}
            class_name="commonBtnStyle w-full rounded-2xl mt-4"
            handleClick={handelModal}
          />
        </div>
      ))}

      <div
        className={`flex justify-center items-center ${class_nameOfBtn}`}
      >
        {PaginationDates.length != getData.length && (
          <AppBtn
            text={"View more"}
            class_name="commonBtnStyle rounded-full"
            handleClick={loadMore}
          />
        )}
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

export default QualificationItemResult;
