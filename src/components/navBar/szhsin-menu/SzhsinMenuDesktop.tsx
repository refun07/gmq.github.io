import React from "react";
import { useRef, useState } from "react";

import {
  ControlledMenu,
  MenuItem,
  useHover,
  useMenuState,
  Menu,
  MenuButton,
  SubMenu,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  PageLink,
} from "@/components/share";
import { useRouter } from "next/router";
import { FaChevronDown } from "react-icons/fa";

function SzhsinMenuDesktop() {
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
  const router = useRouter();
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const pushPageHandler = (data: any) => {
    router.push(data);
  };

  return (
    <div className="md:block flex-1 px-2 hidden">
      <div className="flex justify-end items-center gap-2 w-full">
        <div className="1">
          <PageLink href="/" text="home" isIcon={false} class_name="p-2 px-4" />
        </div>
        <div className="2">
          <div ref={ref} {...anchorProps}>
            <div className="flex justify-center items-center px-4 gap-1 ">
              <AppDescriptionWithDangerouslySetInnerHTML
                text={"Education Services"}
                class_name="cursor-pointer py-4 !text-black"
              />
              <div
                className={`transition-all ease-in duration-300 ${menuState?.state === "open" ? "rotate-180" : "rotate-0"
                  }`}
              >
                <FaChevronDown />
              </div>
            </div>
          </div>

          <ControlledMenu
            {...hoverProps}
            {...menuState}
            anchorRef={ref}
            onClose={() => toggle(false)}
            arrow={true}
          >
            <MenuItem className={"w-full !p-0"}>
              <PageLink
                text={"Student Counselling"}
                href={"/services/education-counselling"}
                isIcon={false}
                class_name="w-full px-6 py-1 "
              />
            </MenuItem>

            <SubMenu
              label="PR Pathway Courses"
              arrow={true}
              direction="right"
            >
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"Nursing"}
                  href={"/popular-courses/nursing"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"Hospitality & Cookery "}
                  href={"/popular-courses/hospitality-and-cookery"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"Teaching"}
                  href={"/popular-courses/teaching"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"IT "}
                  href={"/popular-courses/information-technology"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"Trade Courses"}
                  href={"/popular-courses/trade-courses"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
            </SubMenu>
            <SubMenu label="Other Services" arrow={true}>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"Professional Year"}
                  href={"/services/professional-year-program"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"PTE"}
                  href={"/services/pte"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
              <MenuItem className={"w-full !p-0"}>
                <PageLink
                  text={"NAATI"}
                  href={"/services/naati"}
                  isIcon={false}
                  class_name="w-full px-6 py-1 "
                />
              </MenuItem>
            </SubMenu>
          </ControlledMenu>
        </div>
        <div className="3">
          <PageLink
            href="/rpl"
            text="RPL Qualification"
            isIcon={false}
            class_name="p-2 px-4"
          />
        </div>
        <div className="4">
          <PageLink
            href="/contact-us"
            text="Contact Us"
            isIcon={false}
            class_name="p-2 px-4"
          />
        </div>
        <div className="5">
          <PageLink
            href="https://gmqglobal.com.au/blogs/"
            text="Blog"
            isIcon={false}
            class_name="p-2 px-4"
          />
        </div>
        <div className="6">
          <PageLink
            href="/blogs/process-of-getting-pr"
            isIcon={false}
        
          />
        </div>
        <div className="7">
          <PageLink
            href="/blogs/recognition-of-Prior-learning-help"
            isIcon={false}
          
          />
        </div>
        <div className="8">
          <PageLink
            href="/blogs/recognised-prior-learning"
            text=""
            isIcon={false}
           
          />
        </div>
        <div className="9">
          <PageLink
            href="/blogs/find-the-right-education-consultant"
            isIcon={false}
          
          />
        </div>
        <div className="10">
          <PageLink
            href="/blogs/how-to-apply-for-rpl"
            isIcon={false}
            
          />
        </div>
        <div className="11">
          <PageLink
            href="/blogs/option-if-you-dont-opt-independent-visa"
            isIcon={false}
            
          />
        </div>
        <div className="12">
          <PageLink
            href="/blogs/frequency-asked-questions"
            isIcon={false}
            
          />
        </div>
      </div>
    </div>
  );
}

export default SzhsinMenuDesktop;
