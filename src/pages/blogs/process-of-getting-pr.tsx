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
        id: 1, title: "The Process of Getting PR in Australia through IT Courses", image: "/assets/blog/diploma-of-salon-management-shb50216.jpg",
        description: "The recent growth in the IT sector in Australia makes it a favourable career choice for many international students since there’s a higher possibility of getting a PR. However, you must learn the specifics of the whole process of getting PR there. Not to worry! In this blog, we have explored how to obtain PR in Australia through IT courses by breaking down the whole procedure, discussing PR pathway courses, visa options, and so much more.",
        about1: {
            title: "Information Technology (IT)",
            description: "Information Technology (IT) encompasses a wide range of professional activities, such as constructing communication networks, protecting information and data, and resolving technological issues.Within the field of information technology, your responsibilities may include tasks like the installation and configuration of hardware, the management of third-party software, the provision of training and assistance to staff, oversight of security systems, and potentially the development of customised software.Therefore, in our contemporary digital landscape, acquiring knowledge about information systems and utilising IT has a lot of positive implications."
        },
        about2: {
            title: "Why Study IT in Australia",
            description: "There is a strong need for qualified workers in the quickly expanding industry of Information Technology (IT). Many Australian institutions provide IT courses that provide students with the knowledge and abilities they need to enter this field.Given that Australia is a hotspot for IT workers with attractive benefits and pay, studying IT for an eventual permanent residency there opens up a wide range of career options.The Australian government has made steps to support the IT sector’s expansion and draw in highly qualified individuals from around the globe, making the country an excellent location for IT experts."
        },
        about3: {
            title: "Career Prospects in IT in Australia ",
            description: "The need for qualified IT specialists in Australia has grown exponentially and it is anticipated that this trend will continue for years to come. The rising use of technology along with the demand for IT specialists to manage and maintain these technologies are the key drivers of this rise. Some of the career prospects in IT in Australia are as follows-Business Analyst,Analyst Programmer,  Developer Programmer, Project Manager,Information Security Analyst, Network Administrator,IT Consultant, Data Modeling ,System Analysts,Software Operation Support,Cyber Security,Data Analyst ,Web Development."
        }
    }
]

const BlogDetailsOne = () => {
    const firstBlog = blogData[0]; // Access the first item in the array
    return (
        // <div className='max-w-screen-2xl mx-auto mt-10'>
        //     <Image src={firstBlog?.image} alt={firstBlog?.title} layout="responsive" width={600} height={300} />

        //         <h1 className='mt-10 text-4xl'>{firstBlog?.title}</h1>
        //         <div className='flex gap-5 mt-5'>
        //             <div className='flex gap-3'>
        //                 <div ><MdAdminPanelSettings size={32}/></div>
        //                 <div className='font-bold text-2xl'>Admin</div>
        //             </div>
        //             <div className='flex gap-3'>
        //                 <div><MdDateRange size={32}/></div>
        //                 <div className='font-bold text-2xl'> December 13, 23</div>
        //             </div>
        //         </div>
        //     {/* Add other content based on your data structure */}
        //        <div className="mt-6">
        //             <p className="text-gray-700 text-2xl mb-4">{firstBlog?.description}</p>
        //         </div>
        //         <div className="mt-4">
        //             <h1 className="text-3xl font-bold mb-2">{firstBlog?.about1?.title}</h1>
        //             <p className="text-gray-700 font-bold mb-2">{firstBlog?.about1?.description}</p>
        //             <h1 className="text-3xl font-bold mb-2">{firstBlog?.about2?.title}</h1>
        //             <p className="text-gray-700 font-bold mb-2">{firstBlog?.about2?.description}</p>
        //             <h1 className="text-3xl font-bold mb-2">{firstBlog?.about3?.title}</h1>
        //             <p className="text-gray-700 font-bold mb-2">{firstBlog?.about3?.description}</p>
        //         </div>
        // </div>
        <div className="max-w-screen-2xl mx-auto mt-10">
            <Image src={firstBlog?.image} alt={firstBlog?.title} layout="responsive" width={600} height={300} />

            <div className="mt-10">
                <h1 className="text-4xl font-bold">{firstBlog?.title}</h1>
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

            <div className="mt-6">
                <p className="text-gray-700 text-lg mb-4">{firstBlog?.description}</p>
            </div>

            <div className="mt-4 space-y-6">
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
            </div>


            {/* Social Links Section */}
            <div className="mt-8 flex flex-col items-center gap-10 ">
                <h2 className="text-2xl font-bold mb-2">Follow us on Social Media:</h2>
                <div className="flex items-center justify-around gap-20 shadow-xl w-full border py-6 px-6">
                    {/* Add your social icons and links here */}
                    <a href="#" className="text-blue-700 hover:text-blue-900">
                        <FaFacebookSquare size={50} />
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900">

                        <FaLinkedin size={50}/>
                    </a>
                    <a href="#" className="text-green-700 hover:text-green-900">

                        <FaXTwitter size={50}/>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">

                        <FaSquareInstagram size={50}/>
                    </a>
                    <a href="#" className="text-green-500 hover:text-green-700">

                        <IoLogoWhatsapp size={50}/>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        <FaTelegram size={50}/>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default BlogDetailsOne;