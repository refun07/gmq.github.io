import { useState, useEffect } from "react";
import OneStep from "./skillsStep/OneStep";
import TwoStep from "./skillsStep/TwoStep";
import ThreeStep from "./skillsStep/ThreeStep";
import FourStep from "./skillsStep/FourStep";
import FiveStep from "./skillsStep/FiveStep";
import SuccessStep from "./skillsStep/SuccessStep";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

function SkillsTestForm({class_name}:any) {
  const [ProgressNumber, setProgressNumber] = useState(5);

  const [visitableOne, setVisitableOne] = useState(true);
  const [visitableTwo, setVisitableTwo] = useState(false);
  const [visitableThree, setVisitableThree] = useState(false);
  const [visitableFour, setVisitableFour] = useState(false);
  const [visitableFive, setVisitableFive] = useState(false);
  const [visitableSuccess, setVisitableSuccess] = useState(false);

  const [oneFormData, setOneFormData] = useState<object>();
  const [twoFormData, setTwoFormData] = useState<object>();
  const [threeFormData, setThreeFormData] = useState<object>();
  const [fourFormData, setFourFormData] = useState<object>();
  const [fiveFormData, setFiveFormData] = useState<object>();

  const step_handler = (data: any) => {
    if (data === "one_pre") {
      setVisitableOne(true);
      setVisitableTwo(false);
      setVisitableThree(false);
      setVisitableFour(false);
      setVisitableFive(false);
    }
    if (data === "two_pre") {
      setVisitableOne(false);
      setVisitableTwo(true);
      setVisitableThree(false);
      setVisitableFour(false);
      setVisitableFive(false);
    }
    if (data === "three_pre") {
      setVisitableOne(false);
      setVisitableTwo(false);
      setVisitableThree(true);
      setVisitableFour(false);
      setVisitableFive(false);
    }
    if (data === "four_pre") {
      setVisitableOne(false);
      setVisitableTwo(false);
      setVisitableThree(false);
      setVisitableFour(true);
      setVisitableFive(false);
    }
    if (data === "five_pre") {
      setVisitableOne(false);
      setVisitableTwo(false);
      setVisitableThree(false);
      setVisitableFour(false);
      setVisitableFive(true);
    }
    if (data === "success") {
      setVisitableOne(false);
      setVisitableTwo(false);
      setVisitableThree(false);
      setVisitableFour(false);
      setVisitableFive(false);
      setVisitableSuccess(true);
    }
  };

  const oneFormData_handler = (data?: any) => {
    const { type, value, goTo } = data;

    if (type === "next") {
      setOneFormData(value);
      step_handler(goTo);
      return;
    }

    step_handler(type);
    return;
  };

  const twoFormData_handler = (data?: any) => {
    const { type, value, goTo } = data;

    if (type === "next") {
      setTwoFormData(value);
      step_handler(goTo);
      return;
    }

    step_handler(type);
    return;
  };

  const threeFormData_handler = (data?: any) => {
    const { type, value, goTo } = data;

    if (type === "next") {
      setThreeFormData(value);
      step_handler(goTo);
      return;
    }

    step_handler(type);
    return;
  };

  const fourFormData_handler = (data?: any) => {
    const { type, value, goTo } = data;

    if (type === "next") {
      setFourFormData(value);
      step_handler(goTo);
      return;
    }

    step_handler(type);
    return;
  };

  const fiveFormData_handler = (data?: any) => {
    const { type, value, goTo } = data;

    if (type === "success") {
      setFiveFormData(value);
      step_handler(goTo);
      return;
    }

    step_handler(type);
    return;
  };

  useEffect(() => {
    if (oneFormData) {
      setProgressNumber((100 / 5) * 1);
    }
    if (twoFormData) {
      setProgressNumber((100 / 5) * 2);
    }
    if (threeFormData) {
      setProgressNumber((100 / 5) * 3);
    }
    if (fourFormData) {
      setProgressNumber((100 / 5) * 4);
    }
    if (fiveFormData) {
      setProgressNumber((100 / 5) * 5);
    }
  }, [fiveFormData, fourFormData, oneFormData, threeFormData, twoFormData]);

  const allValue = {
    one: oneFormData,
    two: twoFormData,
    three: threeFormData,
    four: fourFormData,
    five: fiveFormData,
  };

  return (
    <motion.div
      className={`md:p-3 w-full md:flex md:justify-center md:items-center p-2 ${class_name}`}
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
    >
      <div className="contact-form bg-white w-full md:w-[750px]  shadow p-3 flex flex-col justify-between items-center flex-wrap gap-3 rounded">
        <div className="progressArea my-3 w-full px-6">
          <ProgressBar completed={ProgressNumber} bgColor="#22d1ee" />
        </div>
        {visitableOne && (
          <OneStep value={oneFormData} submitHandle={oneFormData_handler} />
        )}
        {visitableTwo && (
          <TwoStep value={twoFormData} submitHandle={twoFormData_handler} />
        )}
        {visitableThree && (
          <ThreeStep
            value={threeFormData}
            submitHandle={threeFormData_handler}
          />
        )}
        {visitableFour && (
          <FourStep value={fourFormData} submitHandle={fourFormData_handler} />
        )}
        {visitableFive && (
          <FiveStep value={allValue} submitHandle={fiveFormData_handler} />
        )}
        {visitableSuccess && <SuccessStep value={allValue} />}
      </div>
    </motion.div>
  );
}

export default SkillsTestForm;
