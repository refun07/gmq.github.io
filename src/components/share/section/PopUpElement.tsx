import React, { useEffect, useState } from "react";
import { AppModal, EntryForm } from "..";
import EntryImgPopUp from "../EntryImgPopUp";

function PopUpElement({ data }: any) {
  const [modalShow, setModalShow] = useState(true);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 10000);
    return setModalShow(false);
  }, []);

  return (
    <>
      {modalShow && (
        <AppModal
          close_class="md:justify-around pr-9 md:pr-0"
          handelModal={handelModal}
          content={<EntryImgPopUp data={data} />}
        />
      )}
    </>
  );
}

export default PopUpElement;
