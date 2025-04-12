import React from 'react';
import { SectionWrapper } from '../higher_order_component';
import { technologies } from '../constants';
import { styles } from '../styles/style';
import { fadeIn, textVariant } from '../motion'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const TechCard = ({ tech, index }) => {
  const { theme } = useTheme();
  const colors = [
    {
      gradient: 'from-red-500/20 to-pink-500/20',
      border: 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]'
    },
    {
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]'
    },
    {
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
    },
    {
      gradient: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
    },
    {
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]'
    },
    {
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]',
      glow: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
    }
  ];
  const colorIndex = index % colors.length;
  
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className={`glass-card relative overflow-hidden ${
        theme === 'dark' 
          ? `border ${colors[colorIndex].border} ${colors[colorIndex].glow}` 
          : `border ${colors[colorIndex].border} ${colors[colorIndex].glow}`
      }`}>
        {/* Background gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors[colorIndex].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className="flex items-center gap-3 px-4 py-3 relative z-10">
          <motion.div 
            className={`p-2 rounded-lg ${colors[colorIndex].border} ${colors[colorIndex].glow}`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img 
              src={tech.icon} 
              alt={tech.name} 
              className="w-6 h-6"
            />
          </motion.div>
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
        className={`mt-4 text-foreground text-[17px] max-w-full leading-[30px] glass-card p-6 ${
          theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
        }`}
      >
        I'm driven by curiosity and thrive on exploring the world of technology.
      </motion.p>

      <motion.div 
        className='mt-16 glass-card border-glow p-8'
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
