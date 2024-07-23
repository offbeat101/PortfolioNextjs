import React from 'react';
import { motion } from 'framer-motion';
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
                    <li>Web Search & Mining</li>    
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
                            
                                title="Python for Everybody"
                                
                                link="https://github.com/offbeat101/manas"
                                

                            />
                        </div>
                
        


            
            </Layout>
            </main>
        <CursorTail />
        </>
    );
};

export default Courses;