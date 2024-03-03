import { AppBtn, AppTitle, Container } from "@/components/share";
import { createPagination } from "@/components/share/lib";
import { RPL_QualificationData } from "@/data/RPL_Data";
import React, { useState, useEffect } from "react";
import RPL_QualificationItem from "./RPL_QualificationItem";
import AppH5Title from "@/components/share/appHadding/AppH5Title";

const defaultVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (key: any) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * key,
      duration: 0.3,
    },
  }),
};

function AllQualifications({ PropsText }: any) {
  const { title, RPL_QualificationItems } = RPL_QualificationData;
  const [allRPL_QualificationItems] = useState(RPL_QualificationItems);
  const [PaginationDates, setPaginationDates] = useState([]);

  const loadMore = () => {
    if (PaginationDates.length === allRPL_QualificationItems.length) return;
    const newProducts = createPagination(
      allRPL_QualificationItems,
      8,
      PaginationDates.length
    );
    const newItems: any = [...PaginationDates, ...newProducts];
    setPaginationDates(newItems);
  };

  useEffect(() => {
    setPaginationDates(createPagination(RPL_QualificationItems));
  }, [RPL_QualificationItems]);
  return (
    <div className="py-16 bg-grayCustom">
      <Container>
        <div className="flex flex-col justify-center items-center ">
          <AppH5Title
            text={PropsText || title}
            class_name="capitalize !text-center md:w-2/3 w-full"
            isAnimation
          />
          <div className="my-9 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
            {PaginationDates?.map((item: any, key) => (
              <RPL_QualificationItem
                key={key}
                {...item}
                variants={defaultVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={key}
              />
            ))}
          </div>
          {PaginationDates.length != allRPL_QualificationItems.length && (
            <AppBtn
              text={"load more industries"}
              class_name="commonBtnStyle rounded-full"
              handleClick={loadMore}
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllQualifications;
