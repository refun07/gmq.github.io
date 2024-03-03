import { AppBtn, AppSubTitle } from "@/components/share";
import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useEffect, useState } from "react";
import ThreeStep_State from "./items/ThreeStep_State";

function ThreeStep({ submitHandle, value }: any) {
  const { three } = RPL_SkillsTextData;
  const { title, state } = three;

  const [selectArea, setSelectArea] = useState(value?.livening_state?.id || "");
  const [selectArea_Send, setSelectArea_Send] = useState();

  const [error, setError] = useState("");

  const handle_Select = (data: any) => {
    setSelectArea(data?.selectArea);
    setSelectArea_Send(data?.selectArea_text);
    setError("");
  };

  const next_handle = (data: any) => {
    if (data === "pre") {
      submitHandle({
        type: "two_pre",
        value: false,
      });
      return;
    }
    if (data === "next") {
      if (selectArea) {
        submitHandle({
          type: "next",
          goTo: "four_pre",
          value: {
            livening_state: {
              id: selectArea,
              value: selectArea_Send,
            },
          },
        });
        setError("");
        return;
      } else {
        setError("Select Your Area");
      }
    }

    return false;
  };

  useEffect(() => {
    setSelectArea(value?.livening_state?.id || "");
    setError("");
  }, [value]);

  return (
    <div>
      <AppSubTitle
        text={title}
        class_name="text-center p-3 md:px-16 !text-[25px]"
      />
      <div className="grid grid-cols-4 justify-center items-center flex-wrap gap-2">
        {state?.map((item, key) => (
          <ThreeStep_State
            {...item}
            key={key}
            activeItem={selectArea}
            onClicked={handle_Select}
          />
        ))}
      </div>

      {error && (
        <div className="text-center mt-3 bg-error p-2 rounded-full">
          <AppSubTitle text={error} class_name=" text-white" />
        </div>
      )}

      <div className="flex justify-between items-center gap-2">
        <AppBtn
          text={"Preview"}
          class_name="animationBtn py-3 w-full text-center bg-grayCustom rounded-full border my-4  hover:opacity-75 transition-all"
          handleClick={() => next_handle("pre")}
        />
        <AppBtn
          text={"Next"}
          class_name="animationBtn py-3 w-full text-center bg-primary rounded-full hover:bg-primaryOpacity text-white my-4  hover:opacity-75 transition-all"
          handleClick={() => next_handle("next")}
        />
      </div>
    </div>
  );
}

export default ThreeStep;
