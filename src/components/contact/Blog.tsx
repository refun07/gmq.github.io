import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image1 from "../../assets/blog/GetYourSkillsRecognized.png";
import image2 from "../../assets/blog/testimonials.png";
import image3 from "../../assets/blog/diploma-of-salon-management-shb50216.jpg";
import image4 from "../../assets/blog/RenownBuildingConstruction.png";
import image5 from "../../assets/blog/graduate-certificate-in-hairdressing-creative-leadership-shb80116.jpg";
import image6 from "../../assets/blog/graduate-diploma-of-strategic-leadership-bsb80320.jpg";
import image7 from "../../assets/blog/Transport.jpg";

export const blogData = [
    {
        id: 1, title: "The Process of Getting PR in Australia through IT Courses", image: "/assets/blog/GetYourSkillsRecognized.png",

    },
    {
        id: 2, title: "PR Pathway IT Courses in Australia", image: '/assets/blog/testimonials.png',
    },
    {
        id: 3, title: "How to Obtain Permanent Residency in Australia Through IT Courses?", image: '/assets/blog/diploma-of-salon-management-shb50216.jpg',
    },
    {
        id: 4, title: "Visa Options.", image: '/assets/blog/RenownBuildingConstruction.png',
    },
    {
        id: 5, title: "Independent Visas", image: '/assets/blog/graduate-certificate-in-hairdressing-creative-leadership-shb80116.jpg',
    },
    {
        id: 6, title: "What are your options if you don’t opt for Independent Visa options?", image: '/assets/blog/graduate-diploma-of-strategic-leadership-bsb80320.jpg',
    },

    {
        id: 7, title: "Frequently Asked Questions (FAQs)",
        image: '/assets/blog/Transport.jpg',
    },

];

function Blog() {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-8 mt-10">
                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image1} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">The Process of Getting PR in Australia through IT Courses</h1>
                    <div className="text-center mt-4">
                        <Link href={`/blogs/process-of-getting-pr`}>
                            <button className="w-4/5 bg-secondary rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image2} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">How Can Recognition of Prior Learning (RPL) Help Your Career?</h1>
                    <div className="text-center">
                        <Link href={`/blogs/recognition-of-Prior-learning-help`}>
                            <button className="w-4/5 bg-secondary rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image3} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">What is Recognised Prior Learning (RPL) in Australia??</h1>
                    <div className="text-center mt-4">
                        <Link href={`/blogs/recognised-prior-learning`}>
                            <button className="w-4/5 bg-secondary rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>
                {/* <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image4} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">Visa Options.</h1>
                    <div className="text-center mt-50">
                        <Link href={`/blogs/visa-options`}>
                            <button className="w-4/5 bg-gray-400 hover:bg-blue-600 rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image5} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">Independent Visas</h1>
                    <div className="text-center mt-4">
                        <Link href={`/blogs/independent-visa`}>
                            <button className="w-4/5 bg-gray-400 hover:bg-blue-600 rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image6} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">What are your options if you don’t opt for Independent Visa options?</h1>
                    <div className="text-center mt-4">
                        <Link href={`/blogs/option-if-you-dont-opt-independent-visa`}>
                            <button className="w-4/5 bg-gray-400 hover:bg-blue-600 rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group hover:bg-gray-100 transition duration-300  transform hover:scale-105">
                    <Image src={image7} alt="" width={300} height={300} className="object-cover w-full h-64" />
                    <h1 className="text-3xl font-bold mb-2 mt-6 ml-4">Frequently Asked Questions (FAQs)</h1>
                    <div className="text-center mt-4">
                        <Link href={`/blogs/frequency-asked-questions`}>
                            <button className="w-4/5 bg-gray-400 hover:bg-blue-600 rounded-full text-white font-bold py-4 px-6 md:px-10 transition transform hover:scale-105 mt-10 mx-auto">
                                See More Details
                            </button>
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    );

};

export default Blog;