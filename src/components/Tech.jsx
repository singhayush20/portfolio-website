import React from 'react';
import { SectionWrapper } from '../higher_order_component';
import { technologies } from '../constants';
import { styles } from '../styles/style';
import { fadeIn, textVariant } from '../motion'
import { motion } from 'framer-motion'

const TechCard = ({ tech, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}>
      <div className="relative overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className='blue-green-purple-gradient p-[1px] rounded-[20px] shadow-card'>
          <div>
            <div className="bg-gradient-to-r from-[#1C1E35] to-[#2e4a5f]  flex justify-center items-center flex-row px-2 py-2 gap-1 cursor-pointer rounded-[20px] shadow-card">
              <img src={tech.icon} alt={tech.name} width={'30px'} />
              <span className="text-white">{tech.name}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tools and Technologies</h2>
      </motion.div>
      <div className='mt-10 flex flex-row flex-wrap md:gap-10 gap-5 items-center justify-center'>
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
