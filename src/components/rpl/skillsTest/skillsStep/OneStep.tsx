import { AppSubTitle } from "@/components/share";
import AppBtn from "@/components/share/AppBtn";
import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useEffect, useState } from "react";

function OneStep({ submitHandle, value }: any) {
  const { one } = RPL_SkillsTextData;
  const { title_two, title, selection } = one;

  const [oneStepSelectValueResult, setOneStepSelectValueResult] = useState(
    value?.experience || ""
  );
  const [TwoStepSelectValueResult, setTwoStepSelectValueResult] = useState(
    value?.qualification || ""
  );

  const [one_One, setOne_One] = useState<boolean | string>(false);
  const [oneStepSuggesterValue, setOneStepSuggesterValue] = useState(
    selection[0].suggester
  );

  const [errorExperienceResult, setErrorExperienceResult] = useState(false);
  const [errorQualificationResult, setErrorQualificationResult] =
    useState(false);

  const next_handle = () => {
    // error handling
    if (!oneStepSelectValueResult || !TwoStepSelectValueResult) {
      if (!oneStepSelectValueResult) {
        setErrorExperienceResult(true);
      }
      if (!TwoStepSelectValueResult) {
        setErrorQualificationResult(true);
      }
      return;
    }

    if (oneStepSelectValueResult) {
      setErrorExperienceResult(false);
    }
    if (TwoStepSelectValueResult) {
      setErrorQualificationResult(false);
    }

    submitHandle({
      type: "next",
      goTo: "two_pre",
      value: {
        experience: oneStepSelectValueResult,
        qualification: TwoStepSelectValueResult,
      },
    });
  };

  useEffect(() => {
    if (oneStepSelectValueResult) {
      const result = selection?.filter(
        (item) => item?.selection === oneStepSelectValueResult
      );
      setOne_One(result[0]?.value);
      setOneStepSuggesterValue(result[0].suggester);
      setTwoStepSelectValueResult("");
    }
  }, [oneStepSelectValueResult, selection]);

  useEffect(() => {
    setOneStepSelectValueResult(value?.experience || "");
    setTwoStepSelectValueResult(value?.qualification || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (oneStepSelectValueResult) {
      setErrorExperienceResult(false);
    }
    if (TwoStepSelectValueResult) {
      setErrorQualificationResult(false);
    }
  }, [oneStepSelectValueResult, TwoStepSelectValueResult]);

  return (
    <div className="md:px-9 px-3 flex flex-col justify-center items-center">
      <AppSubTitle text={title} class_name="text-center p-3 md:!text-[22px]" />
      <div
        className={`w-full border border-customWhite p-3 rounded-full ${
          errorExperienceResult && "border-error"
        }`}
      >
        <select
          className="w-full outline-none"
          onChange={(e) => setOneStepSelectValueResult(e.target.value)}
          value={oneStepSelectValueResult}
        >
          {selection?.map((item, key) => (
            <option key={key} value={`${item?.selection}`}>
              {item?.selection}
            </option>
          ))}
        </select>
      </div>
      <AppSubTitle text={title_two} class_name="text-center p-3 md:!text-[22px]" />

      <div
        className={`w-full  border border-customWhite p-3 rounded-full ${
          errorQualificationResult && "border-error"
        }`}
      >
        <select
          className="w-full outline-none"
          onChange={(e) => setTwoStepSelectValueResult(e.target.value)}
          value={TwoStepSelectValueResult}
        >
          {one_One &&
            oneStepSuggesterValue?.map(
              (item: any, key: React.Key | null | undefined) => (
                <option key={key} value={`${item?.value}`}>
                  {item?.text}
                </option>
              )
            )}
        </select>
      </div>

      <AppBtn
        text={"Next"}
        class_name="py-3 w-full text-center rounded-full bg-primary text-white my-4 hover:opacity-75 transition-all"
        handleClick={() => next_handle()}
      />
    </div>
  );
}

export default OneStep;
