import React from 'react';
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
        id: 1, title: "What is Recognised Prior Learning (RPL) in Australia??", image: "/assets/blog/graduate-diploma-of-management-learning.jpg",
        description: "Have you ever thought about all the skills and knowledge you've gained throughout your life, outside of traditional classrooms? However, there is no certain proof of those skills on paper where they will be recognised. It's just your raw skill.Well, RPL is here to recognize and acknowledge those skills, making it relevant for you to work anywhere in Australia with those skills! Whether you're a seasoned professional or someone just starting, RPL is like your secret key to unlocking new opportunities and showcasing your abilities in a whole new light. We’ll be looking into the breakdowns of what RPL truly means and how it could help you chase your passion for working in your desired industry.",

        about1: {
            title: "Let’s get started.",
            description: "Imagine a magical process where everything you've learned, from your hobbies to your job experiences, is like a treasure waiting to be discovered – that's RPL! It's more like an assessment where you get to prove your skills and knowledge. In some cases, further gap training may be provided to bridge any knowledge or skill gaps, as RPL is all about showing the world what you're capable of, no matter where or how you learned it."
        },
        about2: {
            title: "Why is RPL the ultimate option for you to work anywhere in Australia?",
            description: "Think of RPL as your passport to success in working anywhere in Australia. It's not just about getting a piece of paper; it's about opening doors to new opportunities. Whether you're aiming for a promotion, switching careers, or just want to feel more confident in your abilities, RPL is your trusted pathway on the journey to success.",
            description1: "It helps you create diversity by recognising skills from a variety of fields, allowing individuals to demonstrate their knowledge without repeating formal schooling.",
            description2: "Allows you to save time, as well as money by accrediting existing skills, cutting down the time needed to gain qualifications through schooling.",
            description3: "Enables a career progression by acknowledging work experience, enhancing employability, and opening new career avenues.",

        },
        title1: "Steps to success, through RPL:",
        about30: {
            title: "1. Initial-assessment",
            description: "The first step on your RPL journey is to uncover all the industry skills and knowledge you already possess. It's like being a detective, except instead of solving mysteries, you find evidence of your brilliance and identifying relevant competencies.",
        },
        about31: {
            title: "2. Gathering evidence",
            description: "Once you've recognized your expertise, it's time to acquire proof to demonstrate your abilities. This might include everything from job projects to credentials, as well as glowing recommendations from colleagues or clients, such as portfolios.What could be the evidence, you may ask? Here are the evidence types for RPL:.",
        },
        about32: {
            title: "3. Team up with your RPL guide",
            description: "Once the self-assessment is completed, Every individual generally consults with an RPL assessor, when starting the journey to begin a career anywhere in Australia.You need a trusted RPL guide, and in the world of RPL service providers – GMQ Global comes off as the most personalised service provider out there During this session, all the evidence relevance may be cross-checked and the process of RPL will be thoroughly explained. Helping you to navigate the RPL process, providing tips, advice, and everything else that’s required.",
        },
        about33: {
            title: "4. Get your skills assessed by an RPL Assessor",
            description: "Now comes the fun part: put your skills to the test! Whether you're taking a skills exam or impressing the assessor with your practical knowledge, exhibiting your proficiency in your profession is essential for a good evaluation.The RPL assessor carefully compares the data you offer to the competency criteria necessary for the qualification you're pursuing. Interviews, observations, or practical demonstrations may be used during the evaluation process to evaluate your stated abilities and expertise.The four steps are the initial and basic steps that you need to follow to identify, assess, and verify your industry skills that can be recognized in the retail industry or job market of Australia. Once you're through the process, it's time to plan out your journey to a new life with your existing skills.",
        },

        about4: {
            title: "RPL’s recognition in the Australian professional industry",
            description: "RPL comes off as an essential source where you can establish your skills in the professional environment of Australia. Since, employers across sectors place a high value on practical experience and skills obtained in real-world situations, making RPL an important method for recognising and verifying these talents.Moreover, RPL is recognized widely in Australia and is also endorsed by companies that appreciate the enormous benefits of having a competent and certified staff. Many organisations actively encourage their workers to pursue RPL exams, recognising them as an important part of their professional growth and development.It further ensures that professionals stay up to date on industry innovations by explicitly recognising continuous professional development and practical experience, especially in quickly changing fields where traditional degrees may fall short."
        },
        title2: "What are the challenges?",
        about5: {
            title: "1. Quality of evidence:",
            description: "Providing access to a nationally acknowledged qualification that validates your skills across several sectors and geographical borders."
        },
        about6: {
            title: "2. Standardisation of RPL processes:",
            description: "RPL demonstrates the expertise and hard work you've put into improving your talents over time."
        },
        about7: {
            title: "3. Perceived Value:",
            description: "RPL provides a flexible option, allowing individuals to use their current skills to get officially recognised, thus, creating a pathway for career development."
        },

        title7: "Frequently Asked Questions (FAQs)",
        about8: {
            title: "1. How do I get my RPL certificate in Australia?",
            description: "You must apply to the training provider for RPL. There is normally a cost, and you must give proof to support your application. This might contain reports or portfolios of work examples, as well as proof of evaluation activities like work observations or interviews."
        },
        about9: {
            title: "2. Is RPL Recognised in Australia?",
            description: "So, with RPL, you may convert the skills and information you obtained via on-the-job experience into an Australian recognised certificate."
        },
        about10: {
            title: "3. Can international students get RPL in Australia?",
            description: "International students who already live in Australia have a unique chance to advance their academic studies through the Recognition of Prior Learning (RPL) procedure."
        },
        about11: {
            title: "4. Are international students eligible to do RPL?",
            description: "Yes! Whether you studied or worked in Australia or abroad, your experience can be considered for RPL."
        },
        about12: {
            title: "5. Is RPL nationally Recognised?",
            description: "Yes, RPL evaluation is recognised across Australia. That is why, after completing the RPL assessment, you will get a Nationally Recognised Qualification."
        },
        about13: {
            title: "Conclusion",
            description: "To put it simply, RPL is the process of certifying oneself for the abilities you've gained via hard work and industry expertise over the years.It serves as a bridge between real-world experience and formal education, encouraging exclusivity, efficiency, and professional advancement.The RPL journey not only benefits you but also the industry by addressing the skilled labour shortage, ensuring the business's relevance, and contributing to a trained and adaptive workforce.Do you have any skills? Want to go to Australia and help them flourish? Why not assess yourself through RPL and get verified as soon as possible? Connect with GMQ Global today to plan your future!"
        },
    }
]

const ThirdBlogDetailsPage = () => {
    const firstBlog = blogData[0];
    return (
        <div className="max-w-screen-2xl mx-auto mt-10">
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
                        <div className="font-bold text-lg">March 06, 2024</div>
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
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about2?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about2?.description}</p>
                    <div className='mt-4'>
                        <p ><span className="text-2xl font-bold">Inclusivity & Diversity : </span><span className='text-gray-700 text-lg'>{firstBlog?.about2?.description1}</span></p>
                    </div>
                    <div className='mt-2'>
                        <p ><span className="text-2xl font-bold">Time & Cost-Efficiency : </span><span className='text-gray-700 text-lg'>{firstBlog?.about2?.description2}</span></p>
                    </div>
                    <div className='mt-2'>
                        <p ><span className="text-2xl font-bold">Career Advancement : </span><span className='text-gray-700 text-lg'>{firstBlog?.about2?.description3}</span></p>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">{firstBlog?.title1}</h1>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about30?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about30.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about31?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about31?.description}</p>
                    <ul className="list-disc pl-4 mt-5 space-y-3">
                        <li ><p ><span className="text-2xl font-bold">Work Samples/Portfolios :  </span><span className='text-gray-700 text-lg'>Work samples or even portfolios can be a tangible representation of how your skills and knowledge have been used, such as finished projects, reports, or outputs.</span></p></li>
                        <li ><p ><span className="text-2xl font-bold">References :  </span><span className='text-gray-700 text-lg'>Letters of recommendation from employers, superiors, or coworkers confirming the qualifications.</span></p></li>

                        <li ><p ><span className="text-2xl font-bold">Certificates & Qualifications :  </span><span className='text-gray-700 text-lg'> Relevant certifications or credentials earned via previous schooling or training.</span></p></li>
                        <li ><p ><span className="text-2xl font-bold">Training Records  : </span><span className='text-gray-700 text-lg'>Records of official or informal training programs, workshops, seminars, or conferences attended that help to build skills.</span></p></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about32?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about32?.description}</p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about33?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about33?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about4?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about4.description}</p>
                </div>
                <h1 className="text-4xl font-bold">{firstBlog?.title2}</h1>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about5?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about5.description}</p>
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
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about13?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about13?.description}</p>
                </div>

                <h1 className="text-4xl font-bold">{firstBlog?.title7}</h1>
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
                    <h1 className="text-2xl font-bold mb-2">{firstBlog?.about12?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about12?.description}</p>
                </div>
            </div>



            <h2 className="text-2xl font-bold text-center mb-2">Follow us on Social Media:</h2>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-10">
                <div className="flex flex-wrap items-center justify-center lg:justify-around gap-4 sm:gap-10 shadow-xl w-full border py-4 px-4 sm:py-6 sm:px-6">

                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <FaFacebookSquare size={30} />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="#" className="text-green-700 hover:text-green-900">
                        <FaXTwitter size={30} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <FaSquareInstagram size={30} />
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-700">
                        <IoLogoWhatsapp size={30} />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <FaTelegram size={30} />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ThirdBlogDetailsPage;