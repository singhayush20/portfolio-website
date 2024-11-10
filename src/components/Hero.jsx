import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles/style'
import { profile } from '../assets'
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {

  
  return (
    <section className='w-full relative bg-no-repeat bg-center pt-20 md:pt-32'>
      <div className=' flex flex-col md:flex-row justify-evenly items-center md:mx-auto'>
        <div className={` md:w-[60%] w-[100%] inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-52 violet-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white md:`}>
              <TypeAnimation
                preRenderFirstString={false}

                sequence={[
                  500,
                  'Hi,',
                  500,
                  'Hi, I\'m ',
                  500,
                  'Hi, I\'m Ayush',
                  500,
                  'Hi, I\'m ',
                  500,
                  'Hi,'
                ]}
                className={styles.textGradientHero}
                speed={25}
                repeat={Infinity}


              />
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A passionate Computer Science graduate, currently working on Flutter App Development & Backend Development.
              <br className='block' />
            </p>
          </div>
        </div>
        <div className='md:w-[40%] w-[100%] flex justify-center items-center'>
      
            <img src={profile} alt='Your Image' className=' rounded-full shadow-md w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-r blue-green-purple-gradient px-1 py-1 cursor-pointer ' />
          

        </div>
      </div>
      <div className='flex xs:bottom-10 bottom-32 w-[100%] my-6 justify-center items-center'>
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
    </section>
  )
}

export default Hero