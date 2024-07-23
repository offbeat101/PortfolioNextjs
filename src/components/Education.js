import React, { useRef } from 'react'
import EducationDetails from './EducationDetails';
import {motion, useScroll } from 'framer-motion';

const Education = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start']
	})
  return (
	<div className=' my-64'>
		<h2 className=' text-8xl font-bold mb-16 w-full text-center lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>Education</h2>
		<div className=' w-[75%] mx-auto relative lg:w-[80%] sm:w-[90%] xs:w-full ' ref={ref} >

			<motion.div className=' absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top sm:left-0 md:-[2px]'
				style={{scaleY:scrollYProgress}}/>
			<ul className=" flex flex-col justify-between items-start ml-4 ">
				<EducationDetails 
					type="Bachelor of Technology" 
					Course="Computer Engineering"
					time="2025"
					place="CGPA: 8.21/10"
					info="IIIT Bhubaneswar" />
				<EducationDetails 
					type="Higher Secondary Certificate"
					Course="PCM with Computer Science" 
					time="2020"
					place="Percentage: 83.23%"
					info="Ashok Vidyalaya & Junior College " />
				<EducationDetails 
					type="Secondary School Certificate" 
					time="2018"
					place="Percentage: 97.00%"
					info="Vasundhara Dnyanpeeth ." />
				
			</ul>
		</div>
	</div>
  )
}

export default Education;