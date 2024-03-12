import React from 'react';

export const blogData = [
    {
        id: 3, title: "How to Obtain Permanent Residency in Australia Through IT Courses?", image: '/assets/blog/diploma-of-salon-management-shb50216.jpg',
        description: "Unlike other industries, Australia's IT industry is quickly increasing, with consistent job growth. The Tech Council of Australia has urged the government to ease skilled migration for IT workers, citing a 60% higher vacancy rate in IT professions than the national average.This offers an appealing path to permanent residency for tech-savvy foreigners seeking stable employment in Australia.",

        about1: {
            title: "Choosing the Right IT Courses to Study",
            description: "The first step in obtaining the right to apply for PR is to prepare ahead of time and select the most suitable and in-demand IT courses, which are not only in demand in Australia's IT industry but also throughout the world.The following courses are in high demand and listed on the Medium and Long-term Strategic Skills List: ICT Business Analyst (261111),Systems Analyst (261112),Software Engineer (261313),Software & Applicationsprogrammers NEC (261399),Analyst Programmer (261311), ICT Security Specialist (262112),Developer Programmer (261312),Multimedia Specialist (261211),Computer Network & Systems Engineer (263111),Students who choose these courses associate themselves with global technology breakthroughs, assuring relevance and demand in the labour market, hence improving their chances of permanent residency in Australia."
        },
        about2: {
            title: "Knowing About the Visa Options",
            description: "Before exploring the many visa alternatives that may lead to permanent residency in Australia, it is important to understand the key requirements. These requirements serve as the foundation for a successful career in IT Down Under. Let us look at the main conditions."
        },
        about3: {
            title: "Eligibility Criteria for Student Visa",
            description: "Acquire a letter of acceptance from the university or institution of your choice. Preserve a valid passport for the duration of your studies in Australia. Attain a minimum IELTS score of 6.5 (excluding any section below 50).Provide documentation of sufficient financial assets. Obtain Overseas Students Health Cover (OHSC).Comply with every supplementary legal obligation specified in the checklists provided by the Department of Home Affairs."
        },

    }
]

const BlogDetailsThree = () => {
    const thirdBlog = blogData[0];
    return (
        <div>
            <h1>card 3</h1>
        </div>
    );
};

export default BlogDetailsThree;