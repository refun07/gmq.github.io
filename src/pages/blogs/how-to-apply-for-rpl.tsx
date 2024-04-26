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
        title: "How to Apply for RPL in Australia?", image: "/assets/blog/graduate-diploma-of-management-learning.jpg",
        description: "Do you have years of valuable skills but no formal certification? Wouldn't it be a game-changer if you could leverage that experience towards a qualification? Let us introduce you to Recognition of Prior Learning (RPL)! This blog post will be your guide to how you could apply for RPL assessments and turn your skills into a recognised Australian qualification.",

        about1: {
            title: "Is a Skills Recognition RPL Certificate or Diploma Right for You?",
            question: "Wondering if RPL is the right fit for you?",
            description: "It is! RPL helps to fast-track your qualifications, bridge skill gaps, or upskill for a new career – all with the flexibility of RPL certifications. Thus, allowing you to apply for better jobs, or your dream job, anywhere in Australia or maybe start that business you’ve always wanted to build. All this could be possible when you get partnered up with the right and experienced RPL service providers who know how to get you certified, which brings us to the first step of applying for RPL in Australia!"
        },
        
        title1: "Steps of Applying for RPL in Australia.",
        about5: {
            title: "1. Doing an online self-assessment",
            description: "It’s an online assessment and it only takes a minute to get a check on your skills. It gauges your eligibility and once you're done assessing yourself – the RPL service providers will get in touch with you. There will be further discussions on your options and see whether an RPL qualification is the right path you are moving towards or not."
        },
        about6: {
            title: "2. Building a portfolio of your skills",
            description: "The next step is gathering evidence to demonstrate your skills and experience. This might sound daunting but don't worry your RPL service providers will be with you along the way. In your portfolio, you’ll need to compile all the prior works that you have done in the past. For instance, if you are a chef then all the culinary expertise that you have can be helpful. This evidence of your unrecognised skills will work as a charm when applying for an RPL in Australia."
        },
        about7: {
            title: "3. Writing a letter of application",
            description: "Include your name, contact information, and the RPL you're seeking on the cover of this application form. Provide a brief executive summary, introducing yourself and stating your reasons for pursuing the qualification. Additionally, you’ll need to explain how the RPL process could concisely benefit your career advancement."
        },

        about8: {
            title: "4. Getting assessed by the assessors",
            description: "RPL assessor will contact you after they check out your portfolio, to discuss your experiences in further detail. Think of it as a friendly chat, not a test! The goal here is to understand your background and how your skills match the qualifications you're seeking. During this chat, the assessor might suggest a practical demonstration if needed, to get a complete picture of your abilities. Nothing to fuss about, if there are any gaps, your RPL provider will guide you through additional assessments to bridge them."
        },

         about9: {
            title: "5. Get yourself certified",
            description: "Those are the four essential steps in applying for an RPL. The last thing is getting yourself certified. After completing the RPL process, you'll receive a nationally recognized qualification from one of our partnered colleges.This isn't just a piece of paper; it's a formal recognition of your skills and experience, opening doors to exciting new opportunities."
        },


        about10: {
            title: "Conclusion",
            description: "RPL is relevant in this new world order – education is not always the source of skills enhancement, however, it is a major one. Even so, there are people who have gained their skills in IT, culinary, or even construction without ever going to a proper education establishment. For these individuals, RPL is something that can help them get certified on their existing skills, making them recognised throughout the world, thus, allowing them to work better jobs or even start a business."
        },
  
        title7: "Frequently Asked Questions (FAQs)",
        about14: {
            title: "1. Can international students get RPL in Australia?",
            description: "International students who already live in Australia have a unique chance to advance their academic studies through the Recognition of Prior Learning (RPL) procedure."
        },
        about15: {
            title: "2. What evidence is required for RPL?",
            description: "Instead of directly showing your skills, indirect evidence is like having someone vouch for you. This could be documents or statements from others that back up your claims of competence. Think of it like letters of recommendation, positive reviews, or references from past employers – all supporting the idea that you have the skills you say you do."
        },
        about16: {
            title: "3. What are the obstacles to RPL?",
            description: "People aren't quite sure what RPL is, how it works, or if it's even reliable. This means there's a big need for training on how to assess RPL properly and to spread the word about it within organisations."
        },
       
    }
]
const BlogDetailsPageFive = () => {
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
export default BlogDetailsPageFive
