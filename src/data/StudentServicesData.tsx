import StudentServicesBanner from "@/assets/student-services/student-services-banner.png";
import StudentServicesSectionOneImgOne from "@/assets/student-services/one1.png";
import EducationCounselling from "@/assets/student-services/EducationCounselling.png";
import VisaAndMigrationCounselling from "@/assets/student-services/VisaandMigrationCounselling.png";
import ScholarShipsForInternationalStudents from "@/assets/student-services/ScholarshipsforInternationalStudents.png";
import StudentsVisaHealthCover from "@/assets/student-services/StudentsVisaHealthCover.png";

export const StudentServicesDummyData = {
  banner: StudentServicesBanner,
  StudentServicesSectionOne: {
    left: {
      title: `Don’t leave your options to chance. Speak with the GMQ Global experts before you make a big decision`,
      text: `
            <p class="part">As an international student, choosing the right course of study for you in Global is an important decision. It&rsquo;s not only money, it&rsquo;s also time that you can&rsquo;t get back if you choose a course or institution here that doesn&rsquo;t meet your study or long term career objectives.</p>


<p class="part">Talking with an Education Counsellor from GMQ Global can help. You can tell us your career goals and we&rsquo;ll give you expert guidance on the study choices that will get you there.</p>

<p>We can help, whichever stage you&rsquo;re at:</p>

<ul class="part">
	<li>Considering university or further courses of education in Global?</li>
	<li>Want to know about different institutions in Global and how they compare so you can make a good choice?</li>
	<li>Need assistance with student visa?</li>
</ul>


<p>It doesn&rsquo;t matter, if you&rsquo;ve studied before or not, we can help international students at every level, from university preparation courses right through to PhD and Master&rsquo;s level research.</p>

            `,
    },
    right: {
      img: StudentServicesSectionOneImgOne,
    },
  },
  StudentServicesSectionTwo: {
    left: {
      title: `Seek advice from an education industry-leader`,
      text: `<p class="part">With almost 10 years&rsquo; experience and a wonderful team of QEAC Certified Education Counsellors, GMQ Global can give you all the guidance and services you need to study in Global. From course selection and managing your study application to visa advice and application services through our in-house migration agents to extensive support for health cover, taxation, accommodation and more, we are here for international students.</p>

      <p class="part">We will start with learning about you and your goals, then our friendly Education Counsellors will help you find a fantastic course at an institution that gets you where you want to go.</p>
      
      <p class="part">We&rsquo;ll help arrange everything, from your course application to offer letter and study visa. We will also guide you on accommodation, health cover, and insurance. We will also search for applicable financial assistance and scholarships you could get. We know that leaving your home country to study overseas is an exciting journey &ndash; and we&rsquo;ll be with you the whole way whenever you need advice or assistance throughout your stay in Global.</p>
      
             `,
    },
    right: {
      img: StudentServicesSectionOneImgOne,
    },
  },
  StudentServicesSectionThree: {
    courses: [
      {
        id: 1,
        img: EducationCounselling,
        title: "Education Counselling",
        description: `Tell us your dreams and we’ll help turn them into reality. It’s a four-step process that gives you the confidence you need to move forward.`,
        btn: {
          text: "find out more",
          href: "#",
        },
      },
      {
        id: 2,
        img: VisaAndMigrationCounselling,
        title: "Visa and Migration Counselling",
        description: `Need the right advice for university or college placement, scholarships and internships? From the initial consultation to application, find out more how we can help.`,
        btn: {
          text: "find out more",
          href: "#",
        },
      },
      {
        id: 3,
        img: ScholarShipsForInternationalStudents,
        title: "Scholarships for International Students",
        description: `GMQ Global represent over 750+ top universities, schools and colleges globally. Browse our fields of study to find your perfect course and institution today.`,
        btn: {
          text: "find out more",
          href: "#",
        },
      },
      {
        id: 4,
        img: StudentsVisaHealthCover,
        title: "Students Visa Health Cover",
        description: `Whether you’re looking to study abroad or planning for a career overseas. See how we can help you study, work and live in leading destinations around the world.`,
        btn: {
          text: "find out more",
          href: "#",
        },
      },
    ],
  },
};
