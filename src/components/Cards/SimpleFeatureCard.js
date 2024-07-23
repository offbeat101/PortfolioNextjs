
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';



// To use a component in framer motion, wrap it
const FramerImage = motion(Image);

const SimpleFeatureCard = ({ title, summary, img }) => {
  return (
    <article className='relative w-full flex items-center justify-between p-8 rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl lg:p-6 xs:rounded-[2rem] xs:p-4'>
      <div className="absolute top-0 -right-3 rounded-[2.3rem] rounded-br-[1.8rem] h-[103%] w-[101%] bg-dark dark:bg-light -z-10 md:rounded-[2.2rem]" />
      
      <div className='w-1/4 cursor-pointer inline-block overflow-hidden rounded-lg'>
        <FramerImage 
          alt={title} 
          src={img} 
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }} 
          priority 
          sizes="(min-width: 768px) 100vw, (min-width: 1200px) 25vw, 25vw" 
        />
      </div>
      
      <div className='w-3/4 flex flex-col items-start justify-center pl-6'>
      <h2 className='absolute inset-2 flex items-start justify-center text-4xl font-bold md:text-3xl sm:text-2xl mb-4'>{title}</h2>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-lg xs:text-base xs:font-normal'>{summary}</p>
      </div>
    </article>
  );
}

export default SimpleFeatureCard;
