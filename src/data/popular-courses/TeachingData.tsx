import teacingAbout from "@/assets/course/new/teaching/teacingAbout.png";
import CareerPathways from "@/assets/course/new/teaching/CareerPathways.png";
import educationBGImg from "@/assets/course/new/teaching/educationBGImg.png";
import bgiocnImg from "@/assets/bgiocn.png";
import CertificateIIIinEarlyChildhoodEducationandCare from "@/assets/course/new/teaching/CertificateIIIinEarlyChildhoodEducationandCare.png";
import DiplomaofEarlyChildhoodEducationandCare from "@/assets/course/new/teaching/DiplomaofEarlyChildhoodEducationandCare.png";
import DiplomaofSchoolAgeEducationandCare from "@/assets/course/new/teaching/DiplomaofSchoolAgeEducationandCare.png";
import CertificateIVinSchoolBasedEducationSupport from "@/assets/course/new/teaching/CertificateIVinSchoolBasedEducationSupport.png";

export const TeachingDummyData = {
  SectionOneOfTeaching: {
    left: {
      title: `Why Choose a Career in Teaching?`,
      text: `
      <p class="part">Teaching courses have an aptitude to influence an individual with an ever-growing mindset, shaping young minds in early childhood, primary, and secondary school. Thus, making it a noble profession, shaping future generations, and enabling students to reach their potential. It's a meaningful career, vital in imparting knowledge and fostering young minds.</p>

      <p class="part">Teaching courses in Australia provide an industry-focused qualification taught by experienced educators in Early Childhood Education, School Age Education and Care, and School-Based Education Support.
      </p>
      <p class="part">Fulfil your career goals as a teaching professional with GMQ Global’s guidance. We inspire you to embark on a journey, as your career counsellors, assisting in every step, providing course options that best fit you, finding top-tier universities, and more. Prepare for a fulfilling career in education and life with GMQ Global.
      </p>
      `,
    },
    right: {
      img: teacingAbout,
    },
  },
  SectionTwoOfTeaching: {
    title: `Eligibility Requirement`,
    data: [
      {
        text: `Certificate III in Early Childhood Education and Care`,
        img: CertificateIIIinEarlyChildhoodEducationandCare
      },
      {
        text: `Diploma of Early Childhood Education and Care`,
        img: DiplomaofEarlyChildhoodEducationandCare
      },
      {
        text: `Diploma of School-Age Education and Care`,
        img: DiplomaofSchoolAgeEducationandCare
      },
      {
        text: `Certificate IV in School-Based Education Support`,
        img: CertificateIVinSchoolBasedEducationSupport
      },
    ],
    secondaryImg: bgiocnImg,
  },
  SectionThreeOfTeaching: {
    title: `Career Pathways`,
    img: CareerPathways,
    data: {
      CareerOutcomeText: [
        `Teachers/Educators`,
        `Educational Leader`,
        `Vocational Education and Training (VET) Instructor`,
        `School principal`,
        `University lecturer`,
        `University professor`,
        `Early Childhood Educator`,
        `Family Day Care Operator`,
        `Early Childhood Centre Director Or Coordinator`,
        `Early Childhood Programs and Primary School Settings (Preparatory to Year 6)`,
        `Casual teacher`,
        `Private academic tutor`,
      ],
    },
  },
  SectionFourOfTeaching: {
    title: `Looking for scholarships? We got you covered in making your educational dreams into achievable realities.
    `,
    text: `At GMQ Global, we are passionate about assisting international students in Australia by connecting them with suited scholarship opportunities across universities and institutions, paving the way for their academic success.`,
    btn: {
      text: `contact now`,
      href: `/contact-us`,
    },
    secondaryImg: educationBGImg,
  },
  SectionFiveOfTeaching: {
    title: `Frequently Asked Questions`,
    data: [
      {
        title: `Can international students become teachers in Australia?`,
        text: `Graduates who studied early childhood or secondary education at an Australian university on a student visa and currently hold a temporary graduate visa (subclass 485 - post-study work stream) 16, are eligible to teach in public schools.
        `,
      },
      {
        title: `How much does a teaching course cost in Australia?`,
        text: `In Australia, the annual course fees for a Bachelor of Education range from 20,000 to 35,000 AUD. The average tuition fee for a Master of Education degree in Australia ranges from 65,000 AUD to 90,000 AUD.
        `,
      },
      {
        title: `Which state pays teachers the most in Australia? `,
        text: `Teachers in New South Wales have been referred to as the highest-paid school educators in the country, due to extensive negotiations between the government and local representatives that resulted in a four to twenty percent increase in annual take-home pay.
        `,
      },
    ],
  },
  SectionSixOfTeaching: {
    title: `choose the path to your passion`,
    text: `ready to embark on the journey to success`,
    btn: {
      text: `contact us`,
      href: `#`,
    },
  },
};
