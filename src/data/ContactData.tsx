import { MdAddCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { address, call } from "./ShareData";
import { FaAddressBook } from "react-icons/fa";

export const ContactDummyData = {
  ContactSectionOne: {
    title: `Get In Touch`,
    text: `Chat to us about your NDIS support needs and our team will work with you to come up with the best solutions to help you meet your goals. We love hearing from all our stakeholders, so get in touch today for any reason.`,
    data: [
      {
        asserts: <MdAddCall size={25} color="#fff" />,
        title: `Phone Number`,
        text: `${call}`,
      },
      {
        asserts: <MdOutlineMailOutline size={25} color="#fff" />,
        title: `Email`,
        text: `info@gmqglobal.com.au`,
      },
    //   {
    //     asserts: <FaRegClock size={32} color="#fff" />,
    //     title: `Office Hours`,
    //     text: `
    //             <div class="group grid grid-cols-1">
    //                 <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
    //                     <div class="left">
    //                             <p class="part">Saturday - Sunday</p>
    //                     </div>
    //                     <div class="right">
    //                         <p class="part">: Closed</p>
    //                     </div>
    //                 </div>

    //                 <div class="group item grid lg:grid-cols-3 grid-cols-2 justify-center items-center">
    //                     <div class="left">
    //                         <p class="part">Monday - Friday</p>
    //                     </div>
    //                     <div class="right">
    //                         <p class="part">: 10 am-6pm</p>
    //                     </div>
    //                 </div>
                  
    //             </div>
    //             `,
    //   },
      {
        asserts: <FaAddressBook  size={25} color="#fff" />,
        title: `Address`,
        text: address,
      },
      {
        asserts: <FaRegClock size={25} color="#fff" />,
        title: `Office Hours`,
        text: `
        <p class="text-secondary">Monday - Friday : 10 am-6pm</p>
        <p class="text-text">Saturday - Sunday : Closed</p>
        `,
      },
    ],
  },
};
