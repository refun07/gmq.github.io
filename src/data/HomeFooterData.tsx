import footerBG from '@/assets/footerBG.png'
import f_flagOne from '@/assets/f_flagOne.png'
import f_flagTwo from '@/assets/f_flagTwo.png'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineWhatsApp 
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import { ACN_Number, whiteLogo } from './ShareData';

export const HomeFooterDummyData = {
  generalData:{
    whiteLogo,
    text: 'At GMQ (Get Me Qualified) here we empower students in Australia through innovative and ethical education consulting.',
    abn: `ABN: ${ACN_Number}`,
    description: 'We acknowledge the Traditional Aboriginal Owners of Country throughout Victoria and pay our respects to them, their connections to land, sea, and community. We pay our respects to their Elders past and present and future Traditional Owners.',
    F_logos: [f_flagOne, f_flagTwo]
  },
  footerLinkGP: [
    {
      id: 102,
      title: "Our Services",
      link: [
        {
          id: 401,
          text: "RPL Qualification",
          href: "/rpl",
        },
        {
          id: 402,
          text: "Education Counselling",
          href: "/services/education-counselling",
        },
        // {
        //   id: 403,
        //   text: "PR Pathway Courses",
        //   href: false,
        // },
        {
          id: 5,
          text: "professional year program",
          href: "/services/professional-year-program",
        },
        {
          id: 6,
          text: "PTE",
          href: "/services/pte",
        },
        {
          id: 7,
          text: "NAATI",
          href: "/services/naati",
        },
      ],
    },
    {
      id: 106,
      title: "PR Pathway Courses",
      link: [
        {
          id: 24,
          text: "nursing",
          href: "/popular-courses/nursing",
        },
        {
          id: 25,
          text: "hospitality and cookery",
          href: "/popular-courses/hospitality-and-cookery",
        },
        {
          id: 26,
          text: "teaching",
          href: "/popular-courses/teaching",
        },
        {
          id: 27,
          text: "information technology",
          href: "/popular-courses/information-technology",
        },
        {
          id: 28,
          text: "trade courses",
          href: "/popular-courses/trade-courses",
        },
      ],
    },
    // {
    //   id: 103,
    //   title: "Quick Links",
    //   link: [
    //     {
    //       id: 9,
    //       text: "RPL",
    //       href: "#",
    //     },
    //     {
    //       id: 10,
    //       text: "contact us",
    //       href: "#",
    //     },
    //     {
    //       id: 11,
    //       text: "Scholarships",
    //       href: "#",
    //     },
    //     {
    //       id: 12,
    //       text: "Health Cover",
    //       href: "#",
    //     },
    //     {
    //       id: 13,
    //       text: "Student Accomodation",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 104,
    //   title: "Study to Migrate",
    //   link: [
    //     {
    //       id: 14,
    //       text: "Education Counselling",
    //       href: "#",
    //     },
    //     {
    //       id: 15,
    //       text: "Visa & Migration Counselling",
    //       href: "#",
    //     },
    //     {
    //       id: 16,
    //       text: "Scholarships",
    //       href: "#",
    //     },
    //     {
    //       id: 17,
    //       text: "Health Cover",
    //       href: "#",
    //     },
    //     {
    //       id: 18,
    //       text: "Student Accomodation",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 105,
    //   title: "Which Visa is Right for me",
    //   link: [
    //     {
    //       id: 19,
    //       text: "Education Counselling",
    //       href: "#",
    //     },
    //     {
    //       id: 20,
    //       text: "Visa & Migration Counselling",
    //       href: "#",
    //     },
    //     {
    //       id: 21,
    //       text: "Scholarships",
    //       href: "#",
    //     },
    //     {
    //       id: 22,
    //       text: "Health Cover",
    //       href: "#",
    //     },
    //     {
    //       id: 23,
    //       text: "Student Accomodation",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 107,
    //   title: "Resources",
    //   link: [
    //     {
    //       id: 29,
    //       text: "Pathfinder Youtube",
    //       href: "#",
    //     },
    //     {
    //       id: 30,
    //       text: "Pathfinder Podcast",
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 108,
    //   title: "Our Branches",
    //   link: [
    //     {
    //       id: 31,
    //       text: "Sydney",
    //       href: "#",
    //     },
    //     {
    //       id: 32,
    //       text: "Melbourne",
    //       href: "#",
    //     },
    //     {
    //       id: 33,
    //       text: "Brisbane",
    //       href: "#",
    //     },
    //   ],
    // },
    {
      id: 109,
      title: "other links",
      link: [
        {
          id: 34,
          text: "contact us",
          href: "/contact-us",
        },
        {
          id: 35,
          text: "terms & conditions",
          href: "/terms-condition",
        },
        // {
        //   id: 36,
        //   text: "Terms of Use",
        //   href: "/terms-of-use",
        // },
        {
          id: 37,
          text: "Privacy Policy",
          href: "/privacy-policy",
        },
        // {
        //   id: 38,
        //   text: "Refund Policy",
        //   href: "#",
        // },
      ],
    },
  ],
  countries: [
    {
      id: 39,
      text: "Australia",
      href: "#",
    },
    {
      id: 40,
      text: "Bangladesh",
      href: "#",
    },
    {
      id: 41,
      text: "India",
      href: "#",
    },
    {
      id: 42,
      text: "Nepal",
      href: "#",
    },
    {
      id: 43,
      text: "Philippines",
      href: "#",
    },
    // {
    //   id: 44,
    //   text: "indonesia",
    //   href: "#",
    // },
  ],
  socialLinks: [
    {
      id: 1,
      href: 'https://www.facebook.com/gmqglobal',
      text: "Facebook",
      icon: <AiFillFacebook className="Facebook socialLink" size={24} />,
    },
    // {
    //   id: 2,
    //   href: '#',
    //   text: "linkedin",
    //   icon: <AiFillLinkedin className="linkedin socialLink" size={24} />,
    // },
    // {
    //   id: 4,
    //   text: "youtube",
    //   icon: <AiFillYoutube className="youtube socialLink" size={22} />,
    // },
    {
      id: 5,
      href: 'https://www.instagram.com/gmqglobal/',
      text: "instagram",
      icon: <AiFillInstagram className="instagram socialLink" size={24} />,
    },
    {
      id: 3,
      href: 'https://wa.me/1300515634',
      text: "whatsapp",
      icon: <AiOutlineWhatsApp className="whatsapp socialLink" size={23} />,
    },
  ],
  copyRight: `Copyright© 2023  GMQ GLOBAL. All Rights Reserved.`,
  secondaryImg: footerBG,
};
// ${new Date().getFullYear()}