import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles/style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../motion'
import { SectionWrapper } from '../higher_order_component'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='flex flex-col justify-center items-center '>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 300
        }}
          className='bg-tertiary rounded-[20px] px-5 py-10 w-[300px] h-[205px] min-h-[200px]'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain mx-auto' />
          <h3 className='text-white text-[20px] text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        className='mt-2 text-white italic font-bold text-[17px] max-w-full leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}>
        A committed, self-driven learner with a passion for technology. A collaborative team player who excels in working toward shared goals. Experienced in backend development with Spring Boot and Java, currently working on Flutter mobile application development.
      </motion.p>
      <div className='mt-20 flex flex-wrap flex-col justify-center items-center md:flex-row gap-10 bg-opacity-80 bg-[#121729] rounded-2xl py-10'>
        {
          services.map((service, index) => {
            return (<ServiceCard key={service.title} index={index} {...service} />)
          })
        }
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about")