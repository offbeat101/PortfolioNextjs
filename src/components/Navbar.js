

import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import GithubIcon from "./IconComponents/GithubIcon";
import LinkedInIcon from "./IconComponents/LinkedInIcon";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import SunIcon from "./IconComponents/SunIcon";
import MoonIcon from "./IconComponents/MoonIcon";
import CursorTail from './cursorTail.js';
const CustomeLink = ({href, title, className="" }) => {

	const router = useRouter();
	
	return (
		<Link href={href} className={`${className} relative group `}>
			{title}
			<span className={`absolute left-0 -bottom-0.5 h-[2px] inline-block bg-black group-hover:w-full 
			transition-[width] ease-linear duration-300 ${router.asPath === href? "w-full" : "w-0"} dark:bg-light`}>&nbsp;</span>
		</Link>
	);
};

// custom link for mobile which can colse itself and change the page
const CustomeMobileLink = ({href, title, className="", toggle }) => {

	const router = useRouter();
	const handleNavClick = () => {
		toggle();
		router.push(href);
	}
	return (
		<button onClick={handleNavClick} href={href} className={`${className} relative group text-light dark:text-dark my-2 `}>
			{title}
			<span className={`absolute left-0 -bottom-0.5 h-[2px] inline-block bg-light group-hover:w-full 
			transition-[width] ease-linear duration-300 ${router.asPath === href? "w-full" : "w-0"} dark:bg-dark`}>&nbsp;</span>
		</button>
	);
};

const Navbar = () => {

	const [mode, setMode] = useThemeSwitcher();
	const [ isOpen,setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	}
	return (
		<header className="w-full px-32 md:px-12 sm:px-8 py-10 font-medium flex items-center justify-between dark:text-light relative ">

			{/* Hamburger menu */}
			<button className="  flex-col justify-center items-center hidden lg:flex " onClick={handleClick}>
				<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " rotate-45 translate-y-1": " -translate-y-0.5"}`}></span>
				<span className={` bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm my-0.5 ${ isOpen ? "opacity-0": "opacity-100"}`}></span>
				<span className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 block w-6 rounded-sm -translate-y-0.5 ${isOpen ? " -rotate-45 -translate-y-1": " translate-y-0.5"}`}></span>
			</button>
			
			{/* nav for laptop device */}
			<div className=" w-full flex justify-between items-center lg:hidden">
				{/* list pages */}
				<nav>
					<CustomeLink href="/" title="Home" className=" mr-4 "/>
					<CustomeLink href="/about" title="About" className=" mx-4 "/>
					<CustomeLink href="/projects" title="Projects" className=" mx-4 "/>
					<CustomeLink href="/activities" title="Activities" className=" mx-4 "/>
					<CustomeLink href="/courses" title="Coursework" className=" mx-4 "/>
					<CustomeLink href="/articles" title="Blogs" className=" ml-4 "/>
				</nav>
				{/* social media or theme */}
				<nav className=" flex justify-center items-center flex-wrap">
				
					<motion.a href="https://github.com/offbeat101" target={"_blank"}
					whileHover={{y:-2}}
					whileTap={{scale:0.9}}
					className=" w-8 mx-3 ">
						<GithubIcon/>
					</motion.a>
					<motion.a href="https://www.linkedin.com/in/yash-sapkal/" target={"_blank"}
					whileHover={{y:-2}}
					whileTap={{scale:0.9}}
					className=" w-8 mx-3 ">
						<LinkedInIcon/>
					</motion.a>
					

					<button
						className={`flex items-center justify-center rounded-full ml-3 p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
						onClick={ ()=> setMode(mode === "light" ? "dark" : "light")}>
						{
							mode === "dark" ? <SunIcon className={" fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
						}
					</button>
				</nav>
			</div>

			{/* nav for mobile device */}
			{ isOpen && <motion.div className=" z-10  min-w-[70%] xs:min-w-[85%] flex flex-col justify-between items-center fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark/90 dark:bg-light/75 backdrop-blur-md py-24 rounded-xl "
			initial={{ scale:0, opacity:0, x: "-50%", y:"-50%"}}
			animate={{ scale:1, opacity:1, transition:{ duration: 0.3 } }}>
				{/* list pages */}
				<nav className=" flex flex-col justify-center items-center text-lg">
					<CustomeMobileLink href="/" title="Home" className="" toggle={handleClick} />
					<CustomeMobileLink href="/about" title="About" className="" toggle={handleClick} />
					<CustomeMobileLink href="/projects" title="Projects" className="" toggle={handleClick} />
					<CustomeMobileLink href="/activities" title="Activities" className="" toggle={handleClick} />
					<CustomeMobileLink href="/courses" title="Coursework" className="" toggle={handleClick} />
					<CustomeMobileLink href="/articles" title="Blogs" className="" toggle={handleClick} />
				</nav>
			
				{/* social media or theme */}
				<nav className=" flex justify-center items-center flex-wrap mt-2 space-y-2">
					
					<motion.a href="https://github.com/offbeat101" target={"_blank"}
					whileHover={{y:-2}}
					whileTap={{scale:0.9}}
					className=" w-8 mx-3 sm:mx-1 text-light dark:text-dark">
						<GithubIcon/>
					</motion.a>
					<motion.a href="https://www.linkedin.com/in/yash-sapkal/" target={"_blank"}
					whileHover={{y:-2}}
					whileTap={{scale:0.9}}
					className=" w-8 mx-3 sm:mx-1 ">
						<LinkedInIcon/>
					</motion.a>
					

					<button
						className={`flex items-center justify-center rounded-full ml-3 p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
						onClick={ ()=> setMode(mode === "light" ? "dark" : "light")}>
						{
							mode === "dark" ? <SunIcon className={" fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
						}
					</button>
				</nav>
			</motion.div>}

			<div className=" absolute left-[50%] translate-x-[-50%] ">
				<Logo />
			</div>
		</header>
	);
};

export default Navbar;
