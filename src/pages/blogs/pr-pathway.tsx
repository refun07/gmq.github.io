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
         id: 2, title: "PR Pathway IT Courses in Australia", image: "/assets/blog/diploma-of-salon-management-shb50216.jpg",
         description: '',
         about1: {
             title: "Diploma of Information Technology",
             description: "A diploma in information technology is a program that covers IT engineering, application, and technology, among other things. This imparts two primary prospects, which are employment in the IT industry or enrollment in the second year of a university program.Both alternatives offer outstanding professional opportunities within the dynamic and growing IT sector. This credential equips people with the knowledge and abilities necessary to administer and manage support for IT in small and medium-sized companies by employing an extensive array of general IT technologies.Individuals occupying this position execute a more generalised approach to IT support utilising programming, web development, networking, and IT support. In addition to devising, implementing, assessing, and designing solutions for unforeseeable challenges, they analyse and integrate data from diverse sources. If you are looking to obtain a diploma in information technology, contact GMQ Global now!"
         },
         about2: {
             title: "Advanced Diploma of Information Technology",
             description: "An advanced diploma in information technology equips one with critical thinking and computing expertise for designing, administering, and evaluating computer systems and applications.  This diploma embodies the responsibilities of professionals across diverse IT positions who possess substantial expertise in specialised technical proficiencies, as well as managerial acumen in business operations and personnel administration. These individuals execute complex responsibilities in a specialised field while also providing leadership to a team or determining the strategic trajectory of a business. They utilise their expertise in a variety of functions. The necessary competencies for these positions may consist of IT solutions, management, and communication. Struggling to find the perfect place for an advanced diploma in IT? GMQ Global is a reliable partner for you."
         },
         about3: {
             title: "Bachelor of Science in Information Technology",
             description: "The coursework for a Bachelor of Science in Information Technology (IT) comprises computer networks, databases, software development, web design, and other subjects that are intended to offer students a comprehensive understanding of the IT sector.Students who enrol here learn how to create, deploy, and oversee computer networks and systems as well as how to apply technology to resolve business issues. The standard course may include programming language, computer architecture and systems, database administration, algorithm, and data structure, website design and development, security, and networking, and project oversight.Graduates with a bachelor’s degree in information technology may work as IT professionals in a range of sectors, such as government, finance, healthcare, and education.Seeking a solid base in IT? Reach out to GMQ Global!"
         },
         about4: {
             title: "Masters of Science in Information Technology",
             description: "A Master of Information Technology (IT) degree is a program at the graduate level that focuses on more complex and advanced computing and technology areas. The coursework may vary by program but typically consists of a combination of specialised computer science and IT courses, practical expertise development, and research prospects.The standard coursework may cover advanced computer programming, database systems, data management, security information, and cryptography, artificial intelligence, research methods, and so forth.Moreover, you’ll be able to acquire advanced understanding abilities in areas of IT such as network security, or data science from this. Furthermore, you will have the ability to remain abreast of the most recent advancements and technologies in the industry, thereby enhancing your competitive edge in the market.Therefore, landing a managerial position in the IT sector may improve your employment prospects and boost your financial capabilities. Simultaneously, it can facilitate the cultivation of proficiency in a particular domain of IT and boost one’s capabilities through the acquisition of knowledge and skills essential for career progression and assuming leadership positions through the monitoring of emerging industry trends. GMQ Global is the ideal place that will help you find the perfect PR Pathway course."
         },
     }
 ]
const  BlogDetailsTwo= () => {
    const secondBlog = blogData[0];

    return (
        <div className="max-w-screen-2xl mx-auto mt-10">
            <Image src={secondBlog?.image} alt={secondBlog?.title} layout="responsive" width={600} height={300} />

            <div className="mt-5 p-5">
                <h1 className="text-4xl font-bold">{secondBlog?.title}</h1>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center gap-3 text-gray-500">
                        <MdAdminPanelSettings size={32} />
                        <div className="font-bold text-lg">Admin</div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                        <MdDateRange size={32} />
                        <div className="font-bold text-lg">December 13, 23</div>
                    </div>
                </div>
            </div>

            <div className="mt-2 p-2">
                <p className="text-gray-700 text-lg mb-4">{secondBlog?.description}</p>
            </div>

            <div className="space-y-5 p-5">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{secondBlog?.about1?.title}</h1>
                    <p className="text-gray-700 text-lg">{secondBlog?.about1?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{secondBlog?.about2?.title}</h1>
                    <p className="text-gray-700 text-lg">{secondBlog?.about2?.description}</p>
                </div>
                <div>
                    <h1 className="text-3xl font-bold mb-2">{secondBlog?.about3?.title}</h1>
                    <p className="text-gray-700 text-lg">{secondBlog?.about3?.description}</p>

                </div>
            </div>
            
            {/* Social Links Section */}
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

export default BlogDetailsTwo;