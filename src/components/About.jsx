import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles/style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../motion'
import { SectionWrapper } from '../higher_order_component'
import { useTheme } from '../context/ThemeContext'
import backend from "../assets/backed2.png";
import frontend from "../assets/frontend.png";
import appDev from "../assets/app-development.png";

const ServiceCard = ({ index, title, icon }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`glass-card p-5 rounded-2xl w-full ${
        theme === 'dark' ? 'border-primary/30' : 'border-primary/20'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${
          theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
        }`}>
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
    </motion.div>
  );
}

const About = () => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='relative z-0'
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${
          theme === 'dark' ? 'text-primary/80' : 'text-primary'
        }`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>Overview</h2>
      </motion.div>
      
      <motion.p
        className={`mt-4 text-foreground text-[17px] max-w-full leading-[30px] ${
          theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
        }`}
        variants={fadeIn("", "", 0.1, 1)}
      >
        A committed, self-driven learner with a passion for technology. A collaborative team player who excels in working toward shared goals. Experienced in backend development with Spring Boot and Java, currently working on Flutter mobile application development.
      </motion.p>

      <motion.div 
        className='mt-20 flex flex-wrap flex-col justify-center items-center md:flex-row gap-10 glass-effect rounded-2xl py-10 px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          {
            title: "Web Development",
            icon: frontend,
          },
          {
            title: "Mobile Development",
            icon: appDev,
          },
          {
            title: "Backend Development",
            icon: backend,
          },
        ].map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(About, "about")