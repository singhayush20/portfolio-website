import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles/style'
import { profile } from '../assets'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute top-[120px] flex flex-col md:flex-row justify-evenly items-center md:mx-auto'>
        <div className={`relative md:w-[60%] w-[100%] inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-52 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm  <span className={`text-[#915eff] `}>Ayush.</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A self-driven and committed learner, with expertise in Backend Development in Java & Spring Boot.
              <br className='block' />
            </p>
          </div>
        </div>
        <div className='md:w-[40%] w-[100%] relative'>
          <img src={profile} alt='Your Image' className='rounded-lg shadow-md w-60 md:w-70 lg:w-80 border-purple-400 border-4 mx-auto' />
        </div>
      </div>
      <div className='hidden absolute xs:bottom-10 bottom-32 w-[100%] lg:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      =    </section>
  )
}

export default Hero