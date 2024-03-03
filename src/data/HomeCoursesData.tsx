import Nursing from '@/assets/nursing.png'
import HospitalityCookery from '@/assets/hospitality-cookery.png'
import Teaching from '@/assets/teaching.png'
import informationTechnology from '@/assets/information-technology.png'
import tradeCourses from '@/assets/Student-Health.png'
import StudentAccommodation from '@/assets/StudentAccommodation.png'
import RPL_IMG from '@/assets/RPL_IMG.png'

export const HomeCoursesDummyData = {
  title: "Our Services",
  subTitle: 'Count on GMQ Global for every step of your educational journey',
  CoursesData:[
    {
        id: 3,
        img: RPL_IMG,
        title:'RPL',
        description:'Begin your RPL journey with a customized assessment from one of our consultants, who will build a pathway that corresponds with your abilities and professional ambitions.',
        btn:{
            text:"learn more",
            href:'/rpl'
        },
    },
    {
        id: 1,
        img: Nursing,
        title:'Education',
        description:'Our education counsellors are here to ignite your passion by discussing your career aspirations and properly guiding you to your goals. Book a consultation with us today! ',
        btn:{
            text:"learn more",
            href:'/services/education-counselling'
        },
    },
    // {
    //     id: 2,
    //     img: HospitalityCookery,
    //     title:'Student Services',
    //     description:`Don't get caught up in the hurdle of choosing the right university for yourself to decide what to do next! We're here to guide you from start to success. Click to learn more!`,
    //     btn:{
    //         text:"contact us",
    //         href:'/contact-us'
    //     },
    // },
    {
        id: 3,
        img: Teaching,
        title:'PR Pathway Courses',
        description:'GMQ Global partners with 100+ leading universities, schools, and colleges worldwide. Explore your options from the in-demand study fields to discover your ideal course and institution today.',
        btn:{
            text:"contact us",
            href:'/contact-us'
        },
    },
    // {
    //     id: 4,
    //     img: informationTechnology,
    //     title:'Student Visa',
    //     description:'Are you considering studying, working, or migrating? Learn how we can assist you in studying, working, and living in Australia by aiding you in obtaining the visas of your choosing.',
    //     btn:{
    //         text:"contact us",
    //         href:'/contact-us'
    //     },
    // },
    // {
    //     id: 5,
    //     img: tradeCourses,
    //     title:'Student Health',
    //     description:`GMQ Global is well-resourced with renowned organizations to ensure the best health cover policies tailored for you. We've got you covered, securing comprehensive insurance benefits. Our partner health insurance providers are listed below: 1.NIB, 2.Allianz
    //     `,
    //     btn:{
    //         text:"contact us",
    //         href:'/contact-us'
    //     },
    // }
  ]
};
