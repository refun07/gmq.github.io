import React, { useEffect, useState } from "react";
import { AppModal, EntryForm } from "..";

function VisitedForm({ data }: any) {
  const [modalShow, setModalShow] = useState(true);

  const handelModal = () => {
    setModalShow(!modalShow);
  };

  useEffect(() => {
    setTimeout(function () {
      setModalShow(true);
    }, 3000);
    return setModalShow(false);
  }, []);



  return (
    <>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<EntryForm data={data} />} />
      )}
    </>
  );
}

export default VisitedForm;
