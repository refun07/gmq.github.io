import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useEffect, useState } from "react";
import Two_workExperience from "./items/Two_workExperience";
import Two_workExperience_Area from "./items/Two_workExperience_Area";
import { AppSubTitle } from "@/components/share";
import AppBtn from "@/components/share/AppBtn";

function TwoStep({ submitHandle, value }: any) {
  const { two } = RPL_SkillsTextData;
  const { title, title_two, workExperience, workExperience_Area } = two;

  const [workExperienceResult, setWorkExperienceResult] = useState(
    value?.workExperience?.id || "2"
  );
  const [workExperience_AreaResult, setWorkExperience_AreaResult] = useState(
    value?.workExperience_Area?.id || "1"
  );

  const [workExperienceResult_send, setWorkExperienceResult_send] =
    useState("");
  const [workExperience_AreaResult_send, setWorkExperience_AreaResult_send] =
    useState("");

  const handle_workExperienceResult = (data: number) => {
    const result = workExperience?.filter((item) => item.id === data);
    const resultObject = result[0]?.year + " " + result[0]?.text;
    setWorkExperienceResult_send(resultObject);
    setWorkExperienceResult(String(data));
  };
  const handle_workExperience_AreaResult = (data: number) => {
    const result = workExperience_Area?.filter((item) => item.id === data);
    setWorkExperience_AreaResult_send(result[0]?.name);
    setWorkExperience_AreaResult(String(data));
  };

  const next_handle = (data: any) => {
    if (data === "pre") {
      submitHandle({
        type: "one_pre",
        value: false,
      });
      return;
    }
    if (data === "next") {
      submitHandle({
        type: "next",
        goTo: "three_pre",
        value: {
          workExperience: {
            id: workExperienceResult,
            value: workExperienceResult_send,
          },
          workExperience_Area: {
            id: workExperience_AreaResult,
            value: workExperience_AreaResult_send,
          },
        },
      });
      return;
    }

    return false;
  };

  useEffect(() => {
    handle_workExperienceResult(Number(workExperienceResult));
    handle_workExperience_AreaResult(Number(workExperience_AreaResult));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap">
      <div className="my-3">
        <AppSubTitle
          text={title}
          class_name="!text-center p-3 md:px-16 md:!text-[22px]"
        />
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {workExperience?.map((item, key) => (
            <Two_workExperience
              key={key}
              {...item}
              workExperienceResult={workExperienceResult}
              checked={handle_workExperienceResult}
            />
          ))}
        </div>
      </div>
      <div className="my-3">
        <AppSubTitle
          text={title_two}
          class_name="text-center p-3 md:px-16 md:!text-[22px]"
        />
        <div className="flex justify-center items-center gap-2 flex-wrap">
          {workExperience_Area?.map((item, key) => (
            <Two_workExperience_Area
              key={key}
              {...item}
              workExperience_AreaResult={workExperience_AreaResult}
              checked={handle_workExperience_AreaResult}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 md:w-2/3 w-full mt-3">
        <AppBtn
          text={"Preview"}
          class_name=" py-3 rounded-full w-full text-center bg-grayCustom shadow border my-4 hover:opacity-75"
          handleClick={() => next_handle("pre")}
        />
        <AppBtn
          text={"Next"}
          class_name=" py-3 rounded-full w-full text-center bg-primary shadow hover:bg-primaryOpacity text-white my-4 hover:opacity-75"
          handleClick={() => next_handle("next")}
        />
      </div>
    </div>
  );
}

export default TwoStep;
