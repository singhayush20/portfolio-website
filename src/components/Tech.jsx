import React from 'react';
import { SectionWrapper } from '../higher_order_component';
import { technologies } from '../constants';
import { styles } from '../styles/style';
import { fadeIn, textVariant } from '../motion'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const TechCard = ({ tech, index }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <div className='glass-effect p-[1px] rounded-[20px] shadow-card hover:shadow-glow-sm transition-all duration-300'>
        <div className="bg-card/50 backdrop-blur-sm flex items-center gap-3 px-4 py-3 rounded-[20px]">
          <motion.img 
            src={tech.icon} 
            alt={tech.name} 
            className="w-6 h-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <span className={`text-foreground font-medium ${
            theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
          }`}>{tech.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${
          theme === 'dark' ? 'text-primary/80' : 'text-primary'
        }`}>My skills</p>
        <h2 className={`${styles.sectionHeadText} ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-foreground text-[17px] max-w-full leading-[30px] ${
          theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
        }`}
      >
        I'm driven by curiosity and thrive on exploring the world of technology.
      </motion.p>

      <motion.div 
        className='mt-16 glass-effect rounded-2xl p-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "tech");
