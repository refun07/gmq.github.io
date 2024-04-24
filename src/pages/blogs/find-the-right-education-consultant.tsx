import React from 'react'
import Image from 'next/image';
import { MdAdminPanelSettings } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
export const blogData = [
    {
        id: 1, 
        title: "How do I find the right education consultant to study in Australia?", image: "/assets/blog/graduate-diploma-of-management-learning.jpg",
        description: "The best education consultants don't take a one-size-fits-all approach. They understand your unique goals and aspirations, then customise their guidance to help you achieve them. Beware of consultants who simply provide generic application tips. You deserve personalised support that considers your academic background, desired program, and even budget. Keep reading the blog, to learn more about how to find an education consultant who will truly be your partner on your journey to study in Australia.",

        about1: {
            title: "What’s the differentiating factor when selecting an education consultant?",
            description: "What you need is a personalised care and an understanding of your needs and aspirations in going to Australia to achieve higher studies. So many education consultants tend to overlook that one unique factor in providing you with the right and personalised consultation."
        },
        
     
        title1: "What should be the qualities you need to be looking for?",
        about5: {
            title: "1. Do they personalise your course & uni choices?",
            description: "Passion and career ambitions are something that allow the consultants to understand which courses are ideal for you, this will happen only if they connect with your goals. Therefore, with numerous options available, an experienced Australian education consultant will guide you in selecting the most suitable course and university based on your interests, motivations, and available opportunities. Assuming you’re interested in engineering, advising you to take IT courses would be an ideal option since IT is a pathway course in Australia. Not only will it allow you to pursue your passion, but will likely become a beneficial career to migrate to Australia as well. Similarly, you may be interested in culinary, being a teacher, helping patients through nursing support, or even any type of trade courses such as construction – your consultants must be aligned with your career goals and provide the right suggestions which is good for living or getting a PR in Australia after student visa expir             es."
        },
        about6: {
            title: "2. Are they guiding you to get the right scholarship options?",
            description: "Knowledgeable educational consultancies facilitate access to scholarships and grants at Australian universities, offering guidance on procedures and submissions. Most of the time, these agencies are partnered with top institutes or universities located in Australia."
        },
        about7: {
            title: "3. Are they timely with your document submissions?",
            description: "There’ll be consultants where professional writers assist in preparing the required documents like essays and statements of purpose for various universities. This is super beneficial since you’ll be directly in communication with the writers in personalising your story for that persuasiveness. The education counsellors guide you through the admission process, ensuring all the documents are in place and deadlines are met efficiently."
        },
        about8: {
            title: "4. Are they providing efficient support with the admission process?",
            description: "Rules and regulations are always changing, the right education consultants will be aligned with the current updates in Australia’s visa, migration, and education system. Even if it’s a daunting process, your agency should be dependable with such information and consult you with the right mentorship and support, ensuring adherence to guidelines throughout the admission process."
        },
        about9: {
            title: "5. Are you getting a personalised consultation?",
            description: "This point brings us back to the first point, getting a personalised approach to consulting your way into Australia. Therefore, recognizing each student's unique qualifications and experiences, an expert educational consultant customises application strategies to align with individual skills, interests, and talents, optimising chances of selection."
        },
        about10: {
            title: "6. Do they have an alternative plan ready for you?",
            description: "In the event of unfulfilled aspirations, a reliable consultancy assists in strategising an alternative plan, or a Plan B, for relocation, offering valuable support and guidance. Additionally, a guided mentorship during the immigration process alleviates stress and anxiety associated with admissions, providing reassurance throughout the journey."
        },
        about11: {
            title: "7. Do your consultants have a strong network in Australia?",
             description:"Networking proves to be an essential avenue for growth!Look out for an education consultancy with deep familiarity with the Australian market and a wide array of connections. Therefore, it may come in handy for you to settle down in Australia, broaden your professional network, as well as maximise opportunities in your new life. Additionally, when you’re looking into getting your skills certified for career growth and getting into Australia’s most paying jobs or opening up a business, look for agencies that are proficient in providing the best RPL services in Australia."
        },

        about12: {
            title: "8. Are they providing comprehensive visa support?",
             description:"A good consultancy goes the extra mile. Make sure they'll guide you through the visa application process, as it can have tons of complications and steps that need to be carefully followed. Moreover, offering extended support and peace of mind every step of the way, until your aspirations of moving to Australia become an actual reality."
        },
        about13: {
            title: "9. Does your educational consultant have a proven track record?",
             description:"You must look at the reviews and stats that show the level of support the agencies have provided to students aspiring for Australia in the past. The expert consultants offer valuable insights into universities, which courses pursue, and even best type of scholarship options based on their knowledge, experience, and networking. Look for references, endorsements, and success stories from previous students to gauge the consultancy's reputation and achievement – positive feedback and success stories indicate a consultancy dedicated to helping students excel and ensuring an enjoyable study experience."
        },

        about2: {
            title: "How can education consultants help you achieve your dreams?",
            description: "Education consultancies may be your secret ingredient, as they assist you go through all aspects of the road, from documentation to getting you in on the Professional Year Programs (PYP) in Australia, as well as settling you into Australia by arranging accommodation. However, communication is essential. Look for a prompt and quick problem-solving staff of education specialists. Since communication and availability investigate if the firm can be depended on or not. First, find an agency that responds quickly to all inquiries, interacts with you frequently, and tailors its product offers to your specific needs."
        },

        title7: "Frequently Asked Questions (FAQs)",
        about14: {
            title: "1. What IELTS score is needed for teaching in Australia?",
            description: "To successfully apply to be a teacher in Australia, you must score at least 7.0 in both reading and writing, as well as 8.0 in speaking and hearing."
        },
        about15: {
            title: "2. Can I apply to Australian universities without agents?",
            description: "If you do not want to use an agent, you can apply directly using the international applicants portal of universities and submit the necessary documents."
        },
        about16: {
            title: "3. How much show money do I need to study in Australia?",
            description: "The needed bank balance for an Australian student visa application is AUD 24,505, which covers living expenses, one year of tuition fees, return flights to and from Australia to the student's home country, and overseas student health insurance."
        },
        about17: {
            title: "4. Is PTE easier than IELTS?",
            description: "Except for changes in examination style and pattern, no test is easier than the other. The total duration for both tests is three hours. The IELTS consists of four portions with somewhat lengthy tasks, whereas the PTE consists of several short problems divided into three sections."
        },
    }
]
const BlogDetailsPageFour = () => {
    const firstBlog = blogData[0];
    return (
        <div className='max-w-screen-2xl mx-auto mt-10'>
            <Image src={firstBlog?.image} alt={firstBlog?.title} layout="responsive" width={600} height={300} />
            <div className="mt-10 p-5">
                <h1 className="text-4xl font-bold">{firstBlog?.title}</h1>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center gap-3 text-gray-500">
                        <MdAdminPanelSettings size={32} />
                        <div className="font-bold text-lg">GMQ Global Team</div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                        <MdDateRange size={32} />
                        <div className="font-bold text-lg">March 02, 2024</div>
                    </div>
                </div>
            </div>
            <div className="mt-2 p-2">
                <p className="text-gray-700 text-lg mb-4">{firstBlog?.description}</p>
            </div>
            <div className="mt-4 space-y-6 p-5">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about1?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about1?.description}</p>
                </div>

                <h1 className="text-4xl font-bold">{firstBlog?.title1}</h1>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about5?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about5?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about6?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about6?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about7?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about7?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about8?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about8.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about9?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about9?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about10?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about10?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about11?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about11?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about12?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about12?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about13?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about13?.description}</p>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about2?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about2?.description}</p>
                </div>

                <h1 className="text-4xl font-bold">{firstBlog?.title7}</h1>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about14?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about14?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about15?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about15.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about16?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about16?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about17?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about17?.description}</p>
                </div>
            </div>
            <h2 className="text-2xl font-bold text-center mb-2">Follow us on Social Media:</h2>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-10">
                <div className="flex flex-wrap items-center justify-center lg:justify-evenly gap-4 sm:gap-10 shadow-xl w-full border py-4 px-4 sm:py-6 sm:px-6">
                    <a href="https://www.facebook.com/gmqglobal" className="text-blue-700 hover:text-blue-900">
                        <FaFacebookSquare size={30} />
                    </a>
                    <a href="https://www.instagram.com/gmqglobal/" className="text-blue-500 hover:text-blue-700">
                        <FaSquareInstagram size={30} />
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=1300515634&text&type=phone_number&app_absent=0" className="text-green-500 hover:text-green-700">
                        <IoLogoWhatsapp size={30} />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BlogDetailsPageFour
