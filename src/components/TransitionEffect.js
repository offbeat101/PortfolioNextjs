// import React from 'react'
// import { motion } from 'framer-motion';

// const TransitionEffect = () => {
//   return (
// 	<>
// 		<motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary'
// 			initial={{ x:"100%", width:"100%"}}
// 			animate={{ x:"0%", width:"0%"}}
// 			transition={{ duration:0.6, ease:"easeInOut"}}
// 		/>
// 		<motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light'
// 			initial={{ x:"100%", width:"100%"}}
// 			animate={{ x:"0%", width:"0%"}}
// 			transition={{ delay:0.2, duration:0.6, ease:"easeInOut"}}
// 		/>
// 		<motion.div className=' fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark'
// 			initial={{ x:"100%", width:"100%"}}
// 			animate={{ x:"0%", width:"0%"}}
// 			transition={{ delay:0.4, duration:0.6, ease:"easeInOut"}}
// 		/>

// 	</>
//   )
// }

// export default TransitionEffect;

// import React from 'react'
// import { motion } from 'framer-motion';

// const TransitionEffect = () => {
//   return (
//     <>
//       <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-30 bg-primary'
//         initial={{ x: "0%", y: "0%", scale: 1 }}
//         animate={{ x: "50%", y: "50%", scale: 0 }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//       />
//       <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-20 bg-light'
//         initial={{ x: "0%", y: "0%", scale: 1 }}
//         animate={{ x: "50%", y: "50%", scale: 0 }}
//         transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
//       />
//       <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-10 bg-dark'
//         initial={{ x: "0%", y: "0%", scale: 1 }}
//         animate={{ x: "50%", y: "50%", scale: 0 }}
//         transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
//       />
//     </>
//   )
// }

// export default TransitionEffect;



import React from 'react'
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-30 bg-primary'
        initial={{ x: "0%", y: "0%", scale: 1, rotate: 0 }}
        animate={{ x: "50%", y: "50%", scale: 0, rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-20 bg-light'
        initial={{ x: "0%", y: "0%", scale: 1, rotate: 0 }}
        animate={{ x: "50%", y: "50%", scale: 0, rotate: 360 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className='fixed top-0 bottom-0 left-0 right-0 w-screen h-screen z-10 bg-dark'
        initial={{ x: "0%", y: "0%", scale: 1, rotate: 0 }}
        animate={{ x: "50%", y: "50%", scale: 0, rotate: 360 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  )
}

export default TransitionEffect;
