import { AppSubTitle } from "@/components/share";

function Four_formal_qualification({
  id,
  assert,
  text,
  activeItem,
  onClicked,
}: any) {
  const handlerClick = () => {
    onClicked({
      selectArea: String(id),
      Do_you_have_formal_qualification_text: text,
    });
  };

  return (
    <div
      className={`flex flex-col justify-center items-center flex-wrap hover:bg-secondary hover:text-white cursor-pointer border border-secondary p-2 rounded-2xl w-24 h-20 group transition-all ${
        activeItem === String(id) ? "bg-secondary text-white" : "bg-white"
      }`}
      onClick={() => handlerClick()}
    >
      <span className="">{assert}</span>
      <AppSubTitle
        text={text}
        class_name={`text-center uppercase my-1 group-hover:text-white ${
          activeItem === String(id) ? "text-white" : ""
        }`}
      />
    </div>
  );
}

export default Four_formal_qualification;
