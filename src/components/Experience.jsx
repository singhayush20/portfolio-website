import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles/style'
import { experiences } from '../constants'
import { SectionWrapper } from '../higher_order_component'
import { textVariant, fadeIn } from '../motion'
import { useTheme } from '../context/ThemeContext'

const ExperienceCard = ({ experience }) => {
  const { theme } = useTheme();
  
  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        color: theme === 'dark' ? '#fff' : '#000',
        boxShadow: theme === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.2)' : '0 4px 30px rgba(0, 0, 0, 0.1)'
      }}
      contentArrowStyle={{ 
        borderRight: theme === 'dark' ? '7px solid rgba(0, 0, 0, 0.3)' : '7px solid rgba(255, 255, 255, 0.8)'
      }}
      dateClassName={`${
        theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
      }`}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: theme === 'dark' ? '0 0 0 4px rgba(0, 0, 0, 0.3)' : '0 0 0 4px rgba(255, 255, 255, 0.8)'
      }}
      icon={
        <motion.div
          className='flex justify-center items-center h-full w-full'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={experience.icon} 
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain' 
          />
        </motion.div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>{experience.title}</h3>
        <p className={`text-[16px] font-semibold ${
          theme === 'dark' ? 'text-primary/80' : 'text-primary'
        }`} style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <motion.li 
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${
              theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
            }`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
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
        }`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>Work Experience.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-[17px] max-w-full leading-[30px] ${
          theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
        }`}
      >
        Real world projects have helped me in strengthening my skillset and showcasing my expertise.
      </motion.p>

      <motion.div 
        className='mt-20 flex flex-col glass-effect rounded-2xl py-10 px-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Experience, "experience")