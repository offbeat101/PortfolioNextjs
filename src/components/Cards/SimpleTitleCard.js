import React from 'react';
import { motion } from 'framer-motion';

const FramerArticle = motion.article;

const SimpleTitleCard = ({ title, link }) => {
  return (
    <FramerArticle 
      className='relative w-full p-2 rounded-2xl border border-solid border-dark dark:border-light  shadow-2xl lg:p-6 xs:rounded-[2rem] xs:p-4'
      whileHover={{ scale: 1.05 }} 
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 -right-3 rounded-[2.3rem] rounded-br-[1.8rem] h-[103%] w-[101%]  -z-10 md:rounded-[2.2rem]" />

      <div className='flex flex-col items-center justify-center text-center'>
        <h2 className='text-2xl font-Normal text-dark dark:text-light mb-4'>
          <a 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='hover:underline'
          >
            {title}
          </a>
        </h2>
      </div>
    </FramerArticle>
  );
}

export default SimpleTitleCard;
