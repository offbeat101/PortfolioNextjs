import Layout from "@/Container/Layout";
import AnimateHeading from "@/components/Animate/AnimatedHeading";
import FeatureCard from "@/components/Cards/FeatureCard";
import Head from "next/head";
import React from "react";
import manas from "../../public/images/projects/manas.png"
import TransitionEffect from "@/components/TransitionEffect";
import CursorTail from "@/components/cursorTail";

const projects = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>Projects</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			<TransitionEffect/>
			{/* content */}
			<main className=" flex flex-col justify-center items-center dark:text-light ">
				<Layout className=" pt-16">
					{/* heading of page */}
					<AnimateHeading text="Projects" className=" mb-16 lg:!text-7xl sm:!mb-6 sm:!text-6xl xs:!text-4xl "/>

					{/* list of feature prtoject or simple project */}
					<div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-20 lg:gap-x-16 md:gap-x-8 xs:gap-x-4">

						<div className=" col-span-12 ">
							<FeatureCard
								type="Feature Project"
								title="Manas - Mental Health Detection"
								summary="An application for detectiting multiclass mental health conditions using social media posts."
								img={manas}
								link="https://github.com/offbeat101/manas"
								github="https://github.com/offbeat101/manas"

							/>
						</div>
						
						
						
					</div>
				</Layout>
			</main>
			<CursorTail/>
		</>
	);
};

export default projects;
