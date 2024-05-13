import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles/style'
import { experiences } from '../constants'
import { SectionWrapper } from '../higher_order_component'
import { textVariant } from '../motion';


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'linear-gradient(#18142b, #2e4b60)', color: '#fff' }}
      contentArrowStyle={{ botderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center h-full w-full'>
          <img src={experience.icon} alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-white font-bold text-[24px]'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>{
        experience.points.map((point, index) => (
          (<li key={`experience-point-${index}`}
            className='text-white-100 text-[14px] p1-1 tracking-wider'>
            {point}
          </li>)
        ))
      }</ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard key={index} experience={experience} />
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, "work");