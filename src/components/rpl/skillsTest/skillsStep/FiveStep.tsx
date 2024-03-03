import {
  AppDescription,
  AppDescriptionWithDangerouslySetInnerHTML,
  AppSubTitle,
} from "@/components/share";
import { RPL_SkillsTextData } from "@/data/RPL_Data";
import { useState } from "react";

function FiveStep({ submitHandle }: any) {
  const [contactForm, setContactForm] = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    message: "",
    isChecked: false,
  });

  const [contactError, setContactError] = useState({
    first_name: false,
    last_name: false,
    contact_number: false,
    email: false,
    message: false,
    isChecked: false,
  });

  const { five } = RPL_SkillsTextData;
  const { title, terms_and_contrition } = five;

  const form_handler = (data: any) => {
    data.preventDefault();
    // success
    if (
      contactForm.first_name &&
      contactForm.last_name &&
      contactForm.contact_number &&
      contactForm.email &&
      contactForm.isChecked
    ) {
      submitHandle({
        type: "success",
        goTo: "success",
        value: contactForm,
      });

      setContactForm({
        first_name: "",
        last_name: "",
        contact_number: "",
        email: "",
        message: "",
        isChecked: false,
      });
      return;
    }

    // failed
    if (!contactForm.first_name) {
      setContactError({ ...contactError, first_name: true });
      return;
    }

    if (!contactForm.last_name) {
      setContactError({ ...contactError, last_name: true });
      return;
    }
    if (!contactForm.contact_number) {
      setContactError({ ...contactError, contact_number: true });
      return;
    }
    if (!contactForm.email) {
      setContactError({ ...contactError, email: true });
      return;
    }
    if (!contactForm.isChecked) {
      setContactError({ ...contactError, isChecked: true });
      return;
    }

    return;
  };

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;
    if (name === "isChecked") {
      setContactForm({ ...contactForm, isChecked: !contactForm.isChecked });
    } else {
      setContactForm({ ...contactForm, [name]: value });
    }
    setContactError({ ...contactError, [name]: Boolean(!value) });
  };

  return (
    <div className="md:px-9">
      <AppSubTitle text={title} class_name="!text-center p-3" />
      <div>
        <form onSubmit={(e) => form_handler(e)}>
          <input
            type="text"
            value={contactForm.first_name}
            onChange={(e) => inputChangeHandler(e)}
            placeholder="First Name*"
            className={`w-full p-3 border  rounded-full m-1  outline-none bg-customWhite ${
              contactError.first_name ? "border-error" : "border-customWhite"
            }`}
            name="first_name"
            required
          />
          <input
            type="text"
            value={contactForm.last_name}
            onChange={(e) => inputChangeHandler(e)}
            placeholder="Last Name*"
            className={`w-full p-3 border rounded-full m-1  outline-none bg-customWhite ${
              contactError.last_name ? "border-error" : "border-customWhite"
            }`}
            name="last_name"
            required
          />
          <input
            type="number"
            value={contactForm.contact_number}
            onChange={(e) => inputChangeHandler(e)}
            placeholder="Contact Number*"
            className={`w-full p-3 border  rounded-full m-1  outline-none bg-customWhite ${
              contactError.contact_number
                ? "border-error"
                : "border-customWhite"
            }`}
            name="contact_number"
            required
          />
          <input
            type="email"
            value={contactForm.email}
            onChange={(e) => inputChangeHandler(e)}
            placeholder="Email*"
            className={`w-full p-3 border rounded-full m-1  outline-none bg-customWhite ${
              contactError.email ? "border-error" : "border-customWhite"
            }`}
            name="email"
            required
          />
          <textarea
            className="w-full h-28 p-3 border border-customWhite bg-customWhite rounded-2xl m-1  outline-none"
            placeholder="Any questions for us?"
            name="message"
            value={contactForm.message}
            onChange={(e) => inputChangeHandler(e)}
            required
          ></textarea>

          <div className="flex justify-start items-center gap-3 p-3">
            <input
              type="checkbox"
              name="isChecked"
              checked={contactForm.isChecked}
              onChange={(e) => inputChangeHandler(e)}
              required
            />
            <AppDescriptionWithDangerouslySetInnerHTML
              text={terms_and_contrition}
            />
          </div>
          <input
            type="submit"
            className="w-full p-3 border border-customWhite rounded-full m-1  outline-none bg-primary hover:bg-primaryOpacity text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default FiveStep;
