
import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useState } from "react";
import Four_formal_qualification from "./items/Four_formal_qualification";
import { motion } from "framer-motion";
import { Circles } from "react-loader-spinner";
import { AppBtn, AppDescription, AppSubTitle } from "@/components/share";

function FourStep({ submitHandle, value }: any) {
  const { four } = RPL_SkillsTextData;
  const { title, what_qualifications, formal_qualification } = four;

  const [selectArea, setSelectArea] = useState(value?.id || "");
  const [error, setError] = useState("");

  const [
    do_you_have_formal_qualification_Send,
    setDo_you_have_formal_qualification_Send,
  ] = useState({
    isFormal_qualification: "",
    what_qualification: "",
  });

  const [loading, setLoading] = useState(false);

  const [assetsData, setAssetsData] = useState();
  const [nextBtn, setBtnBtn] = useState(true);

  const handle_whatQualifications = (data: any) => {
    setDo_you_have_formal_qualification_Send({
      ...do_you_have_formal_qualification_Send,
      what_qualification: data.target.value,
    });
  };

  const handle_Select = (data: any) => {
    setSelectArea(data?.selectArea);

    setDo_you_have_formal_qualification_Send({
      ...do_you_have_formal_qualification_Send,
      isFormal_qualification: data?.Do_you_have_formal_qualification_text,
    });
    setError("");

    if (data?.selectArea === "1") {
      setBtnBtn(false);
    } else {
      setBtnBtn(true);
    }
  };

  const next_handle = (data: any) => {
    if (data === "pre") {
      submitHandle({
        type: "three_pre",
        value: false,
      });
      return;
    }
    if (data === "next") {
      if (do_you_have_formal_qualification_Send?.isFormal_qualification) {
        submitHandle({
          type: "next",
          goTo: "five_pre",
          value: {
            id: selectArea,
            value: {
              ...do_you_have_formal_qualification_Send,
              fileData: assetsData,
            },
          },
        });
        return;
      } else {
        setError('Select "YES" or "NO"');
      }
    }

    return false;
  };

  async function handleOnSubmit(event: any) {
    event.preventDefault();
    if (assetsData) {
      setLoading(true);

      const form = event.currentTarget;
      const fileInput: any = Array.from(form.elements).find(
        ({ name }: any) => name === "file"
      );

      const formData = new FormData();

      for (const file of fileInput.files) {
        formData.append("file", file);
      }

      const cloudinary_folder_name = "gmqGlobal";

      formData.append("gmq-upload-images", `${cloudinary_folder_name}`);

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/dh3qaglhg/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      setAssetsData(data);
      if (data || assetsData) {
        setBtnBtn(true);
        setLoading(false);
      }
      return;
    }
    return;
  }

  function changeUpload(changeEvent: any) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent: any) {
      setAssetsData(onLoadEvent.target.result);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }


  return (
    <div>
      <AppSubTitle text={title} class_name="text-center p-3 !text-[25px]" />
      <div className="flex justify-center items-center flex-wrap gap-3 p-3">
        {formal_qualification?.map((item, key) => (
          <Four_formal_qualification
            key={key}
            {...item}
            activeItem={selectArea}
            onClicked={handle_Select}
          />
        ))}
      </div>
      {selectArea === "1" && (
        <motion.div
          initial={{ y: -30, x: 0, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        >
          <AppSubTitle
            text={what_qualifications?.title}
            class_name="text-center p-3"
          />
          <input
            type="text"
            className="w-full p-3 px-5 border border-customWhite rounded-full m-1 outline-none"
            placeholder="I'll type (Optional)"
            value={do_you_have_formal_qualification_Send?.what_qualification}
            onChange={(e) => handle_whatQualifications(e)}
          />
          <div className="flex flex-col flex-wrap gap-2 p-2">
            <div className="text-left w-full">
              <AppDescription
                text={"Upload Resume (optional)"}
                class_name="text-left"
              />
            </div>
            <form
              method="post"
              onChange={(changeEvent) => changeUpload(changeEvent)}
              onSubmit={(event) => handleOnSubmit(event)}
            >
              <input
                type="file"
                name="file"
                className="w-full p-3 border border-customWhite rounded-full m-1"
                placeholder="I'll type (Optional)"
                id="fileID"
              />
              <button
                type="submit"
                className="bg-primaryOpacity cursor-pointer text-center w-full p-3 block m-1 rounded text-white"
              >
                Upload
              </button>
            </form>
          </div>
        </motion.div>
      )}

      {error && (
        <div className="text-center mt-3 bg-error p-2">
          <AppSubTitle text={error} class_name=" text-white" />
        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center">
          <Circles
            height="35"
            width="35"
            color="#D62C2C"
            aria-label="circles-loading"
            visible={true}
          />
        </div>
      )}

      {
        <div className="flex justify-between items-center gap-2">
          <AppBtn
            text={"Preview"}
            class_name="py-3 w-full text-center bg-customWhite border my-4"
            handleClick={() => next_handle("pre")}
          />
          <AppBtn
            text={"Next"}
            class_name="py-3 w-full text-center bg-primary hover:bg-primaryOpacity text-white my-4"
            handleClick={() => next_handle("next")}
          />
        </div>
      }
    </div>
  );
}

export default FourStep;
