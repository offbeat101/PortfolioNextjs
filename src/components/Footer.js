import Layout from '@/Container/Layout';
import Link from 'next/link';
import React from 'react'
import CursorTail from './cursorTail.js';


const Footer = () => {
  return (
	<footer className=' w-full border-t-2 border-solid border-dark	dark:border-light dark:text-light '>
		<Layout className={"py-8 flex items-center justify-between lg:flex-col lg:py-5 space-y-2"}>
			<span>{ new Date().getFullYear()} &copy; All rights are reserved</span>
			<div className=' text-lg flex items-center'>
				Build&nbsp; by &nbsp; <a className=' underline' target={"_blank"}>Yash S</a>
			</div>
			
		</Layout>
	</footer>
  )
}

export default Footer;