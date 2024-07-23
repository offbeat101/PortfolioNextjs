
import React from 'react';
import { motion } from 'framer-motion';
import AnimateHeading from '@/components/Animate/AnimatedHeading';

import article4 from "../../public/images/articles/Eagle.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Layout from "@/Container/Layout";
import CursorTail from "@/components/cursorTail";
import SimpleFeatureCard from '@/components/Cards/SimpleFeatureCard';
import linguistics from '@/components/linguistics';
const Activities = () => {
    return (
        <>
            <Head>
                <title>Activities & Hobbies</title>
				<meta name="description" content="any discription"></meta>
			</Head>
            <TransitionEffect/>
            <main className=" flex flex-col justify-center items-center dark:text-light ">
				<Layout className=" pt-16">
					
					<AnimateHeading text="Activities & Hobbies" className=" mb-16 lg:!text-7xl sm:!mb-6 sm:!text-6xl xs:!text-4xl "/>
                   
                    <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
								Books
							</h1>

					<div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">

						<div className=" col-span-12 ">
							<SimpleFeatureCard
							
								title="Beloved"
								summary="An amazing book by Tony Morrison."
								img={article4}
								
								

							/>
						</div>
						
						
						
					</div>
                    <h1 className="text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
                        Movies
                   </h1>
                    

                    <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">

						<div className=" col-span-12 ">
							<SimpleFeatureCard
							
								title="Beloved"
								summary="An amazing book by Tony Morrison."
								img={article4}
								
								

							/>
						</div>
                        </div>

                        <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
								Linguistics
							</h1>
                            <linguistics/>

                            <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
								Games & Sports
							</h1>

                            <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
								Drawing & Painting
							</h1>

                            <h1 className=" text-4xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/90 dark:text-light/85 p-8">
								Travelling & Trekking
							</h1>
                    
            {/* <h2>Activities & Hobbies</h2>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Movies</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Books</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Games & Sports</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Linguistics</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Travelling & Trekking</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <h3>Drawing & Painting</h3>
                <ul>
                    <li>Point 1</li>
                    <li>Point 2</li>
                    <li>Point 3</li>
                </ul>
            </motion.div> */}
            
        
        </Layout>
        </main>
        <CursorTail/>
        </>
    );
};

export default Activities;
