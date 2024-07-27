import React from 'react';
import AnimateHeading from '@/components/Animate/AnimatedHeading';
import BulletCard from '@/components/Cards/BulletCard';
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Layout from "@/Container/Layout";
import CursorTail from "@/components/cursorTail";
import SimpleTitleCard from "@/components/Cards/SimpleTitleCard";

const Courses = () => {
    return (
        <>
        <Head>
        <title>Courses & Certifications</title>
        <meta name="description" content="any discription"></meta>
        </Head>
    <TransitionEffect/>
    <main className=" flex flex-col justify-center items-center dark:text-light ">
        <Layout className=" pt-16">
            
            <AnimateHeading text="Courses & Certifications" className=" mb-16 lg:!text-7xl sm:!mb-6 sm:!text-6xl xs:!text-4xl "/>
           
            <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Courses & Academic Projects
                    </h1>

                    <div className="col-span-12">
                <BulletCard>
                    <ul>
                  <li>Introduction to Programming using C</li>
                  <li>Introduction to Data Structures</li>
                  <li>Object Oriented Programming with C++</li>
                    <li>Scientific Computing using Python</li>
                    <li>Computer Organization & Architecture</li>
                    <li>Theory of Computation</li>
                    <li>Relational Database Management Systems</li>
                    <li>
                        Compiler Design
                    </li>
                    <li>Web Search Mining</li>    
                    <li>Design & Analysis of Algorithms</li>
                    <li>Quantum Computing and Quantum Information</li>
                    <li>Artificial Intelligence</li>
                    <li>Data Science for AI in Healthcare</li>
                    <li>Graph Theory</li>
                    <li>Discrete Mathematics</li>
                    <li>Microprocessor and Microcontroller</li>
                    <li>Probability & Statistics</li>
                    <li>Digital Electronic Circuits</li>
                    <li>Software Engineering</li>
                    <li>Fundamental of Robotics</li>
                    <li>Cloud Computing</li>
                    <li>Internet of Things</li>
                    <li>Optimization Techniques</li>

                    <li>Operating Systems</li>
                    <li>Data Communication & Computer Networks</li>
                    </ul>
                </BulletCard>
                    </div>


             <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Certifications
                    </h1>

                    <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Programming for Everybody (Getting Started with Python) - Coursera"
                                
                                link="https://coursera.org/share/da5ada1dcd95b3aa935516155c43b5a8"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Introduction to Data Science in Python - Coursera"
                                
                                link="https://coursera.org/share/f3e2fcbcbec9531cd85d1bd4f8393257"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Applied Plotting, Charting & Data Representation in Python - Coursera"
                                
                                link="https://coursera.org/share/b52b54d8e37579cc33ad390e3fefd722"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Python Data Structures - Coursera"
                                
                                link="https://coursera.org/share/af206f3a5c5171b9cae94b391e4200e7"
                                

                            />
                        </div>
                        <div className=" col-span-10 ">
                            <SimpleTitleCard
                            
                                title="Introduction to Machine Learning - Coursera"
                                
                                link="https://coursera.org/share/a5725333b0c8d5016e7373aa222efb2c"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Using Python to Access Web Data - Coursera"
                                
                                link="https://coursera.org/share/485559f72dbfcc8c6817dd91ecbaed9b"
                                

                            />
                        </div>

                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Business Metrics for Data-Driven Companies - Coursera"
                                
                                link="https://coursera.org/share/3c4e28c9cd3d42988c20cba45c28a54a"
                                

                            />
                        </div>
                
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Mastering Data Analysis in Excel - Coursera"
                                
                                link="https://coursera.org/share/30c4f9c7f9efc26b605f088bd4a4fe40"
                                

                            />
                        </div>
                

                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Introduction to Data Science in Python - Coursera"
                                
                                link="https://coursera.org/share/f3e2fcbcbec9531cd85d1bd4f8393257"
                                

                            />
                        </div>
                

                        {/* <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Cameras, Exposure, and Photography - Coursera"
                                
                                link="https://coursera.org/share/b3964b15f826ca022e7275eef4f5a4bb"
                                

                            />
                        </div> */}
                

                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Databases and SQL for Data Science with Python - Coursera"

                                
                                link="https://coursera.org/share/ad726443fd268dded88d238b2c0993d1"
                                

                            />
                        </div>
                

                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Agile Project Management - Coursera"
                                
                                link="https://coursera.org/share/07f3dc7d816054cdcdceacd9e8302752"
                                

                            />
                        </div>
                

                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Project Planning: Putting It All Together - Coursera"
                                
                                link="https://coursera.org/share/51ca13c6f8960835c20954a5303d9f58"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Project Initiation: Starting a Successful Project - Coursera
"
                                
                                link="https://coursera.org/share/cf94cb5fa903ff304442ca20ca0113f1"
                                

                            />
                        </div>
                
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Foundations of Project Management - Coursera
"
                                
                                link="https://coursera.org/share/44aee570e3234a6eac69864de2764c43"
                                

                            />
                        </div>
                
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Linux Basics: The Command Line Interface - Coursera"
                                
                                link="https://coursera.org/share/fc49f1f1b73e2b656e89210089ac285d"
                                

                            />
                        </div>
                
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Diabetic Retinopathy Detection with Artificial Intelligence - Coursera
"
                                
                                link="https://coursera.org/share/65400dabe53ba070771270a102806c93"
                                

                            />
                        </div>
                
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Predicting the Weather with Artificial Neural Networks - Coursera"
                                
                                link="https://coursera.org/share/3af936966b15f717dc065d4806342f13"
                                

                            />
                        </div>
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Enterprise Design Thinking Practitioner - IBM SkillsBuild"
                                
                                link="https://skills.yourlearning.ibm.com/credential/CREDLY-c98fdc5c-b5f5-4c00-bd61-2db0efabedde"
                                

                            />
                        </div>
                        {/* <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Job Application Essentials"
                                
                                link="https://skills.yourlearning.ibm.com/credential/CREDLY-71db9bd9-b01f-43c3-8b8e-ab438e2706c1"
                                

                            />
                        </div> */}
                        <div className=" col-span-12 ">
                            <SimpleTitleCard
                            
                                title="Cyber Security Internship - IBM SkillsBuild & Edunet Foundation"
                                
                                link="https://docs.google.com/document/d/1Sw0Wn5PB1Ost6mOoRkizAUdtPScEYRev/edit?usp=sharing&ouid=108150669394635605520&rtpof=true&sd=true"
                                

                            />
                        </div>
                        
            
            
            </Layout>
            </main>
        <CursorTail />
        </>
    );
};

export default Courses;