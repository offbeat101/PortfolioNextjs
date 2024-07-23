import Layout from "@/Container/Layout";
import AnimateHeading from "@/components/Animate/AnimatedHeading";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import AnimatedNumbers from "@/components/Animate/AnimatedNumbers";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import CursorTail from "@/components/cursorTail";
// to use a component in framer motion... make it 
const FramerImage = motion(Image);

const about = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>About</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			<TransitionEffect/>
			{/* content */}
			<main className=" flex flex-col items-center justify-center dark:text-light ">
				<Layout className="pt-10">
					{/* Heading */}
					<AnimateHeading
						text={"Let there be Light!"}
						className={" mb-12 lg:!text-7xl md:!text-6xl xs:!text-3xl sm:mb-8 "}
					/>

					{/* about page structure */}
					<div className=" w-full grid grid-cols-16 gap-16 sm:gap-8 ">
						{/* introduction about self */}
						<div className=" col-span-3 flex flex-col items-center justify-center gap-4 md:order-2 md:col-span-8 lg:col-span-4 ">
							<h1 className=" text-3xl lg:text-2xl sm:text-lg font-bold uppercase text-dark/70 dark:text-light/75">
								Introduction
							</h1>
							<p className=" font-medium  ">
								I&apos;m a dedicated & motivated final year Computer Engineering student at IIIT Bhubaneswar.
							</p>
							<p className=" font-medium ">
							Proficient in multiple programming languages and frameworks, with strong problem-solving abilities and a focus on efficiency. Passionate about data science and analytics, continually enhancing skills through practical projects and certifications. Eager to contribute to innovative and impactful software solutions.
							</p>
							<p className=" font-medium ">
							I thrive on turning complex challenges into elegant code and have the ability to create cohesive solutions out of seemingly incoherent things. 
							</p>
						</div>
						
						{/* your profile Image */}
						{/* Uncomment and ensure you have imported profilePhoto */}
						{/* <div className=" col-span-3 h-min rounded-2xl border-2 border-solid border-dark dark:border-light dark:bg-dark p-8 md:p-6 bg-light relative md:order-1 md:col-span-8 lg:col-span-4 ">
							<div className=" absolute top-0 -right-3 rounded-3xl h-[103%] w-[102%] bg-dark dark:bg-light -z-10" />
							<FramerImage
								src={profilePhoto}
								alt="Your Name"
								className=" h-auto w-full rounded-2xl p-4 pb-0 bg-gradient-to-tr from-cyan-300 dark:from-dark via-orange-200 to-pink-300 dark:to-slate-700"
								whileHover={{scale:1.05}}
								transition={{duration:1.7, delay:0.3}}
								priority 
             			 		sizes="(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw"
							/>
						</div> */}

						{/* number which make impact */}
						{/* <div className=" col-span-2 flex flex-col items-end justify-between md:order-3 lg:col-span-8 lg:flex-row lg:items-center">
							<div className=" flex flex-col items-end justify-center ">
								<span className=" inline-block text-7xl font-bold dark:text-light/75 md:text-5xl sm:text-4xl "><AnimatedNumbers value={22}/>+</span>
								<h1 className=" text-xl sm:text-lg xs:text-base font-medium text-dark/75 dark:text-light/75  capitalize">projects</h1>
							</div>
							<div className=" flex flex-col items-end justify-center ">
								<span className=" inline-block text-7xl dark:text-light/75 font-bold md:text-5xl sm:text-4xl"><AnimatedNumbers value={10000}/>+</span>
								<h1 className=" text-xl sm:text-lg xs:text-base font-medium text-dark/75 dark:text-light/75 capitalize">line of codes</h1>
							</div>
							<div className=" flex flex-col items-end justify-center">
								<span className=" inline-block text-7xl font-bold dark:text-light/75 md:text-5xl sm:text-4xl"><AnimatedNumbers value={283}/>+</span>
								<h1 className=" text-xl sm:text-lg xs:text-base font-medium text-dark/75 dark:text-light/75 capitalize">number of commit</h1>
							</div>
						</div> */}
					</div>

					{/* Skills section */}
					<Skills/>

					{/* Experience */}
					<Experience />

					{/* Education  */}
					<Education/>
				</Layout>
			</main>
			<CursorTail/>
		</>
	);
};

export default about;
