import React from 'react';

const Resume = () => {
    return (
        <div className="flex flex-wrap m-12">
            <div className="w-full md:w-1/2 p-4">
                <div className="mb-8 text-left font-bold text-2xl">Education</div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2021 - 2023</div>
                            <div className='text-xs text-gray-600'>San Diego State University</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">Masters in Computer Science</div>
                        <div className="text-left text-gray-700">
                            <p>AOOPS, Data Structures, Web Development,</p>
                            <p>Parallel Algorithm.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2015 - 2019</div>
                            <div className='text-xs text-gray-600'>University of Mumbai</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">Bachelors in Computer Engineering</div>
                        <div className="text-left text-gray-700">Data Mining, OOPS, SQL, Python.</div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2013 - 2015</div>
                            <div className='text-xs text-gray-600'>Nirmala College</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">High School</div>
                        <div className="text-left text-gray-700">C, C++.</div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <div className="mb-8 text-left font-bold text-2xl">Experience</div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2022</div>
                            <div className='text-xs text-gray-600'>NBCUniversal</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">Software Engineer Intern</div>
                        <div className="text-left text-gray-700">
                            Automated processing of 5TB of movie data, reducing manual work by 50%. 
                            Developed a GraphQL API for easy retrieval and filtering of critical movie award data.
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2022</div>
                            <div className='text-xs text-gray-600'>ASML</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">Software Engineer Intern</div>
                        <div className="text-left text-gray-700">
                            As a Software Engineer, I developed innovative cross-platform solutions, boosting user engagement by 25%. Integrated Webpack, designed customizable admin dashboard, reducing interface complaints by 50%. Collaborated on Github for scalable microservice architecture, reducing server costs.
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="flex items-start">
                        <div className="flex items-center">
                            <div className="border-2 border-blue-500 rounded-full p-1 pl-2 pr-2 text-black font-bold text-xs mr-2">2019 - 2021</div>
                            <div className='text-xs text-gray-600'>Kan Innovation | HealthCare Company</div>
                        </div>
                    </div>
                    <div className="ml-10 mt-2">
                        <div className="text-left font-bold">Software Engineer</div>
                        <div className="text-left text-gray-700">
                            Designed a YOLO-based foot detection model, improving accuracy. Architected scalable cloud infrastructure on AWS Lambda, reducing costs. Developed data cleaning algorithm for faster image processing. Enhanced patient registration and test info efficiency. Reduced deployment time with Docker. Configured Apache2 across AWS EC2 and Raspberry Pi 3/4 stacks, synchronized with WebLogic.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;
