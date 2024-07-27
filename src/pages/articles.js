import React from "react";
import Head from "next/head";
import Layout from "@/Container/Layout";
import AnimateHeading from "@/components/Animate/AnimatedHeading";
import FeatureArticle from "@/components/Articles/FeatureArticle";

import article4 from "../../public/images/articles/Eagle.jpg";
import LiArticles from "@/components/Articles/LiArticles";
import TransitionEffect from "@/components/TransitionEffect";
import CursorTail from "@/components/cursorTail";

const articles = () => {
	return (
		<>
			{/* this head tag help to achevie GOOD SEO for your portfolio */}
			<Head>
				<title>Blogs</title>
				<meta name="description" content="any discription"></meta>
			</Head>
			<TransitionEffect/>
			<main className=" w-full mb-16 flex flex-col justify-center items-center overflow-hidden dark:text-light">
				<Layout className=" pt-16 ">
					<AnimateHeading
						text="In A Maze"
					
						className=" mb-16 xl:!text-7xl lg:!text-6xl sm:!mb-6 sm:!text-5xl xs:!text-4xl "
					/>
					<h3 className="font-bold text-2xl w-full text-center my-16">
   						 <a href="https://treptos.wordpress.com" className="text-blue-500 hover:underline">
       						 Click Here to dive into Wordpress Blogs
   						 </a>
					</h3>

					<ul className=" grid grid-cols-2 gap-16 lg:gap-8 md:gap-4 md:grid-cols-1 md:gap-y-16 ">
						<FeatureArticle
							title="Why should you read Gita."
							summary="The Bhagavad-Gita, while not a panacea for all problems or a guide to heavenly salvation, offers profound insights into self-realization, action, and detachment through its teachings on seeing action in inaction and vice versa. It helps to reflect on their lives and challenges, providing a framework for understanding oneself and achieving inner equilibrium, making it a timeless resource for personal growth and equality."
							time="6 min read"
							link=""
							img={article4}
						/>
						<FeatureArticle
							title="What mothertongue does not teach.."
							summary="What mothertongue does not teach.."
							time="30 min read"
							link=""
							img={article4}
						/>
					</ul>

					{/* all remaining articles */}
					<h2 className=" font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
					<ul>
						<LiArticles
							title="Goning with the Flow"
							date="December 2023"
							link="/"
							// img={article4}
						/>
						<LiArticles
							title="All it needs is Truth"
							date="December 2023"
							link="/"
							// img={article4}
						/>
						<LiArticles
							title="The Emmergence of GenAI"
							date="December 2023"
							link="/"
							// img={article4}
						/>
						<LiArticles
							title="The Illusion of Control"
							date="October 2023"
							link="/"
							// img={article4}
						/>
					</ul>
				</Layout>
			</main>
			<CursorTail/>
		</>
	);
};

export default articles;
