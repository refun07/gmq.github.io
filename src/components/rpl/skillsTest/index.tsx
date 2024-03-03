import { RPL_BannerData } from "@/data/RPL_Data";
import { useState } from "react";
import { AppModal, AppSubTitle, Container } from "../../share";
import AppLoader from "@/components/share/AppLoader";
import SkillsTestForm from "./SkillsTestForm";
// import SkillsTestForm from "./SkillsTestForm";
import { motion } from "framer-motion";

function SkillsTest() {
  const [modalShow, setModalShow] = useState(false);

  const handelModal = () => {
    setModalShow(!modalShow);
  };
  const { skillsTest } = RPL_BannerData;

  return (
    <section className="w-full">
      <div className="bg-primary cursor-pointer" onClick={() => handelModal()}>
        <Container>
          <div className="flex justify-center items-center py-2 pb-4 ">
            <AppLoader class_name="w-[70px]" />
            <AppSubTitle
              text={skillsTest?.text}
              class_name="md:text-[24px] text-[16px] text-white text-center"
            />
            <AppLoader class_name="w-[70px]" />
          </div>
        </Container>
      </div>
      {modalShow && (
        <AppModal handelModal={handelModal} content={<SkillsTestForm />} />
      )}
    </section>
  );
}

export default SkillsTest;
