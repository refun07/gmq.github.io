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
        id: 1, title: "How Can Recognition of Prior Learning (RPL) Help Your Career?", image: "/assets/blog/graduate-diploma-of-management-learning.jpg",
        description: "Recognition of Prior Learning (RPL) has become one of the sought-after options for individuals who are looking to get their skills assessed and certified. Thus, making them enter the industry of their passion with ease.How it can help your career development, you may ask? Well, it can give your career the boost it needs as RPL offers a pathway to advancement that's both efficient and rewarding.Let’s look at the possibilities of how it may help your career grow in more depth!",

        about1: {
            title: "RPL helps unlock open doors of opportunities.",
            description: "Well, picture something like this, you’ve been working as a carpenter or in the construction business for years and, thus, gained invaluable experience along the way. However, you may not have the formal education or qualification to back it up, you might find yourself hitting a glass ceiling in terms of career progression.This is where RPL comes to the rescue. How? Well, by providing you the option to convert your skills into recognisable skills in the local and global professional environment. Therefore, removing not having a formal qualification as an obstacle, now you have your skills assessed and verified by the RPL assessors."
        },
        about2: {
            title: "RPL helps you explore broader job opportunities",
            description: "This is similar to having a passport that allows you to travel anywhere in the world without issues, that’s exactly what RPL helps you get. With RPL, you will be able to groom yourself as a more suitable candidate for prospective employers in Australia or anywhere in the world!Let's take an example to help you understand better: Suppose you have expertise in project management. However, this expertise is not confined to the construction industry alone. You can leverage these skills for organizational management, budget management, or even lead event planning or management in the IT sector or even healthcare administration.Suddenly, the world becomes your oyster, and your career path expands into territories you never thought possible",
        },
        about3: {
            title: "RPL helps you earn more.",
            description: "Money is the reason we work, but earning more while working in the industry of your choosing is just the cherry on top!Since RPL helps you bridge the gap between experience and qualification, your position becomes more lucrative with paychecks. Whether it is you’re looking for a promotion, better job opportunities in a different company or sector entirely, or even having an idea of doing a business of your own, you’ll be equipped with the right credentials to earn more and have a secured financial future.",
        },
        
        about4: {
            title: "RPL helps you add weight to your resume",
            description: "A resume encapsulates your entire career-related information, and if crafted effectively, it serves as your gateway to the professional world. Moreover, Recognition of Prior Learning (RPL) can amplify its impact by certifying your skills, a highly desirable trait for any employer.Therefore, RPL could be the pivotal factor in your resume that distinguishes you from competitors in the corporate world."
        },
        title1: "The benefits of RPL to develop your career",
        about5: {
            title: "1. Attain a nationally recognised qualification",
            description: "Providing access to a nationally acknowledged qualification that validates your skills across several sectors and geographical borders."
        },
        about6: {
            title: "2. Validate your experience & learning",
            description: "RPL demonstrates the expertise and hard work you've put into improving your talents over time."
        },
        about7: {
            title: "3. Forge an alternative pathway",
            description: "RPL provides a flexible option, allowing individuals to use their current skills to get officially recognised, thus, creating a pathway for career development."
        },
        about8: {
            title: "4. Maintain work-life balance",
            description: "RPL provides an alternative by allowing you to acquire qualifications while maintaining your work-life balance. It is a smooth combination of personal and professional goals."
        },
        about9: {
            title: "5. Accelerate your qualification journey",
            description: "Time is the key to career advancement, which is why RPL simplifies the qualifying process by removing redundant training and expediting your route to certification. It's a quick way to open up new professional opportunities."
        },
        about10: {
            title: "6. Efficiency through eliminating repetition",
            description: "Why go over something you already know? RPL recognises your previous talents, avoiding repetitive learning procedures. This efficiency guarantees that you focus on areas that require improvement, maximising your development journey."
        },
        about11: {
            title: "7. Start ahead without starting afresh",
            description: "The idea of starting again might be scary. But, don’t worry, with RPL you can reduce starting afresh entirely. It is an option to invest in your professional growth outside of the limits of traditional school obligations, by assessing your existing skills."
        },
        about12: {
            title: "Conclusion",
            description: "At GMQ Global, we understand how Recognition of Prior Learning (RPL) can push your career to new heights. RPL makes it easier to get official degrees by recognising your previous abilities and expertise. It's not simply a procedure; it's a deliberate investment in your professional development.With GMQ Global on your side, navigating the RPL landscape becomes effortless and empowering. Allow us to lead you towards realising the full potential of your abilities and goals. Take the essential first step with GMQ Global now and start on a professional progression adventure unlike any other."
        },
       
        title7: "Frequently Asked Questions (FAQs)",
        about13: {
            title: "1. How does RPL boost career prospects?",
            description: "RPL strengthens your CV by validating your skills and experience, demonstrating your capabilities to future employers. The mix of practical experience and formal degrees demonstrates your commitment to professional growth."
        },
        about14: {
            title: "2. Why do we need recognition of prior learning?",
            description: "If you already know part of the information in a course and the training provider recognises it, you will not be required to repeat those courses. Recognition will lower your student fees for a Smart and Skilled course. You can obtain recognition through Recognition of Prior Learning (RPL) or Credit Transfer."
        },
        about15: {
            title: "3. Why is RPL important in conducting competency-based training?",
            description: "The RPL process can assist an individual in obtaining a formal qualification that fits their competencies, therefore enhancing employment, mobility, lifelong learning, social inclusion, and self-esteem."
        },
    }
]

const SecondBlogDetailsPage = () => {
    const firstBlog = blogData[0]; // Access the first item in the array
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
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about2?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about2?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about3?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about3?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about4?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about4.description}</p>
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
                <h1 className="text-4xl font-bold">{firstBlog?.title7}</h1>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about13?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about13?.description}</p>
                </div>
                {/* <h1 className="text-4xl font-bold">{firstBlog?.title3}</h1>
                <div className="mt-2 p-2">
                    <p className="text-gray-700 text-lg mb-4">{firstBlog?.description3}</p>
                </div> */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about14?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about14.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{firstBlog?.about15?.title}</h1>
                    <p className="text-gray-700 text-lg">{firstBlog?.about15?.description}</p>
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
    );
};

export default SecondBlogDetailsPage;