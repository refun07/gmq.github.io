import { AppDescriptionWithDangerouslySetInnerHTML, AppTitle } from "@/components/share";
import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function SuccessStep({ value }: any) {
  const { four } = RPL_SkillsTextData;
  const { formal_qualification } = four;
  const [dabbleSubmitToggle, setDabbleSubmitToggle] = useState(false);

  const form: any = useRef();

  const finalFormHandler = (e?: any) => {
    e?.preventDefault();
    const service_ID = `service_whzps24`;
    const template_ID = `template_lymxadr`;
    const Public_Key = `oJfs7GVoS5G8ETjmn`;

    // send massage by gmail inbox
    emailjs
      .sendForm(
        `${service_ID}`,
        `${template_ID}`,
        form.current,
        `${Public_Key}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (dabbleSubmitToggle) {
      finalFormHandler();
      return;
    }
    setDabbleSubmitToggle(true);
  }, [dabbleSubmitToggle]);


  return (
    <div className="flex flex-col justify-center items-center flex-wrap gap-3">
      <span className="bg-[#61a146] text-white w-10 h-10 rounded-full flex justify-center items-center !font-[30px] scale-150">
        {formal_qualification[0]?.assert}
      </span>
      <AppDescriptionWithDangerouslySetInnerHTML
        text={"Thank you for taking the first step to achieving a nationally recognised qualification. One of our consultants will be in contact to discuss the RPL process and provide you with a quote if you are to meet the requirements."}
        class_name="!text-center p-3 capitalize"
      />

      <form ref={form} className="hidden" onSubmit={(e) => finalFormHandler(e)}>
        <div className="grid grid-cols-1 gap-1">
          <input
            type="text"
            name="one_experience"
            className="border w-full p-1"
            value={value?.one?.experience}
            readOnly
          />
          <input
            type="text"
            name="one_qualification"
            className="border w-full p-1"
            value={value?.one?.qualification}
            readOnly
          />

          <input
            type="text"
            name="two_workExperience"
            className="border w-full p-1"
            value={value?.two?.workExperience?.value}
            readOnly
          />
          <input
            type="text"
            name="two_workExperience_Area"
            className="border w-full p-1"
            value={value?.two?.workExperience_Area?.value}
            readOnly
          />

          <input
            type="text"
            name="three_livening_state"
            className="border w-full p-1"
            value={value?.three?.livening_state?.value}
            readOnly
          />

          <input
            type="text"
            name="four_isFormal_qualification"
            className="border w-full p-1"
            value={value?.four?.value?.isFormal_qualification}
            readOnly
          />
          <input
            type="text"
            name="four_what_qualification"
            className="border w-full p-1"
            value={value?.four?.value?.what_qualification}
            readOnly
          />
          <input
            type="text"
            name="four_fileData"
            className="border w-full p-1"
            value={value?.four?.value?.fileData}
            readOnly
          />

          <input
            type="text"
            name="five_first_name"
            className="border w-full p-1"
            value={value?.five?.first_name}
            readOnly
          />
          <input
            type="text"
            name="five_last_name"
            className="border w-full p-1"
            value={value?.five?.last_name}
            readOnly
          />
          <input
            type="text"
            name="five_email"
            className="border w-full p-1"
            value={value?.five?.email}
            readOnly
          />
          <input
            type="text"
            name="five_contact_number"
            className="border w-full p-1"
            value={value?.five?.contact_number}
            readOnly
          />
          <input
            type="text"
            name="five_message"
            className="border w-full p-1"
            value={value?.five?.message}
            readOnly
          />
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default SuccessStep;
