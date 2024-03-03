import { logo } from "./ShareData";

export const NavbarDummyData = {
  Logo: logo,
  Menus: [
    {
      id: "0",
      text: "home",
      href: "/",
      submenu: false,
    },
    {
      id: "1",
      text: "student services",
      href: "#",
      submenu: true,
      subMenuData: [
        {
          id: "submenu201",
          text: "Student Counselling",
          href: "/services/education-counselling",
          megaMenu: false,
        },
        {
          id: "subMenu1",
          text: "PR Pathway Courses",
          href: "#",
          megaMenu: true,
          megaMenuData: [
            {
              id: "megaMenu1",
              text: "Nursing",
              href: "/popular-courses/nursing",
            },
            {
              id: "megaMenu2",
              text: "Hospitality and Cookery",
              href: "/popular-courses/hospitality-and-cookery",
            },
            {
              id: "megaMenu3",
              text: "Teaching",
              href: "/popular-courses/teaching",
            },
            {
              id: "megaMenu4",
              text: "IT ",
              href: "/popular-courses/information-technology",
            },
            {
              id: "megaMenu4",
              text: "Trade Courses",
              href: "/popular-courses/trade-courses",
            },
          ],
        },
        {
          id: "subMenu1",
          text: "Other Services",
          href: "#",
          megaMenu: true,
          megaMenuData: [
            {
              id: "subMenu2",
              text: "Professional Year",
              href: "/services/professional-year-program",
              
            },
            {
              id: "subMenu3",
              text: "PTE",
              href: "/services/pte",
             
            },
            {
              id: "subMenu3",
              text: "NAATI",
              href: "/services/naati",
              
            },
          ],
        },
        // {
        //   id: "subMenu1",
        //   text: "Student Counselling",
        //   href: "#",
        //   megaMenu: true,
        //   megaMenuData: [
        //     {
        //       id: "subMenu1",
        //       text: "PR Pathway Courses",
        //       href: "#",
        //       SupperMegaMenu: true,
        //       SupperMegaMenuData: [
        //         {
        //           id: "megaMenu1",
        //           text: "Nursing",
        //           href: "/popular-courses/nursing",
        //         },
        //         {
        //           id: "megaMenu2",
        //           text: "Hospitality and Cookery",
        //           href: "/popular-courses/hospitality-and-cookery",
        //         },
        //         {
        //           id: "megaMenu3",
        //           text: "Teaching",
        //           href: "/popular-courses/teaching",
        //         },
        //         {
        //           id: "megaMenu4",
        //           text: "IT ",
        //           href: "/popular-courses/information-technology",
        //         },
        //         {
        //           id: "megaMenu4",
        //           text: "Trade Courses",
        //           href: "/popular-courses/trade-courses",
        //         },
        //       ],
        //     },
        //     {
        //       id: "subMenu1",
        //       text: "Other Services",
        //       href: "#",
        //       SupperMegaMenu: true,
        //       SupperMegaMenuData: [
        //         {
        //           id: "subMenu2",
        //           text: "Professional Year",
        //           href: "/services/professional-year-program",
        //           megaMenu: false,
        //         },
        //         {
        //           id: "subMenu3",
        //           text: "PTE",
        //           href: "/services/pte",
        //           megaMenu: false,
        //         },
        //         {
        //           id: "subMenu3",
        //           text: "NAATI",
        //           href: "/services/naati",
        //           megaMenu: false,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
    {
      id: "2",
      text: "RPL Qualification",
      href: "/rpl",
      submenu: false,
    },
    // {
    //   id: "3",
    //   text: "Services",
    //   href: "#",
    //   submenu: true,
    //   subMenuData: [
    //     {
    //       id: "subMenu1",
    //       text: "Education Counselling",
    //       href: "/services/education-counselling",
    //       megaMenu: false,
    //     },
    //     {
    //       id: "subMenu2",
    //       text: "Professional Year Program",
    //       href: "/services/professional-year-program",
    //       megaMenu: false,
    //     },
    //     {
    //       id: "subMenu3",
    //       text: "PTE",
    //       href: "/services/pte",
    //       megaMenu: false,
    //     },
    //     {
    //       id: "subMenu3",
    //       text: "NAATI",
    //       href: "/services/naati",
    //       megaMenu: false,
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   text: "latest updates",
    //   href: "#",
    //   submenu: true,
    //   subMenuData: [
    //     {
    //       id: "subMenu1",
    //       text: "blogs",
    //       href: "/",
    //       megaMenu: false,
    //     },
    //     {
    //       id: "subMenu2",
    //       text: "news",
    //       href: "/",
    //       megaMenu: false,
    //     },
    //     {
    //       id: "subMenu3",
    //       text: "events",
    //       href: "/",
    //       megaMenu: false,
    //     },
    //   ],
    // },
    {
      id: "6",
      text: "contact us",
      href: "/contact-us",
      submenu: false,
    },
    {
      id: "8",
      text: "",
      href: "/single-blog",
      submenu: false,
    },
    // {
    //   id: "7",
    //   text: "blog",
    //   href: "/blog",
    //   submenu: false,
    // },
  ],
};
