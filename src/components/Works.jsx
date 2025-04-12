import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { git } from '../assets';
import { styles } from '../styles/style';
import { SectionWrapper } from '../higher_order_component';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../motion';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_links,
}) => {
  const { theme } = useTheme();
  const colors = [
    {
      gradient: 'from-red-500/20 to-pink-500/20',
      border: 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
    },
    {
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]'
    },
    {
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]'
    },
    {
      gradient: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
    },
    {
      gradient: 'from-yellow-500/20 to-amber-500/20',
      border: 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
    },
    {
      gradient: 'from-orange-500/20 to-red-500/20',
      border: 'border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
    }
  ];
  const colorIndex = index % colors.length;
  
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={`w-[95%] sm:w-[75%] md:w-[80%] elevated-card group ${colors[colorIndex].border}`}
    >
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='glass-card p-6 relative overflow-hidden'
      >
        {/* Background gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colors[colorIndex].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className='flex flex-col md:flex-row gap-6 items-start relative z-10'>
          <motion.div 
            className={`glass-card p-4 flex-shrink-0 ${colors[colorIndex].border}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className='w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
              <motion.img
                src={git}
                alt='source code'
                className='w-[90%] h-[90%] object-contain'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <div className='flex-1'>
            <div className='flex flex-col'>
              <h3 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
              }`}>
                {name}
              </h3>
              <p className='mt-2 text-muted-foreground text-sm leading-relaxed'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap items-center gap-4'>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <span
                    key={`${name}-${tag.name}`}
                    className={`text-sm px-2 py-1 rounded-full glass-button ${colors[colorIndex].border} hover:scale-105 transition-transform duration-200`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
              <div className='flex gap-3'>
                {source_links.map((source_link, index) => (
                  <motion.div
                    key={index}
                    className={`glass-button ${colors[colorIndex].border} p-2 cursor-pointer hover:scale-110 transition-transform duration-200`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.open(source_link.link, "_blank")}
                  >
                    <img
                      alt="project_link"
                      src={source_link.icon}
                      className="w-5 h-5"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
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
        }`}>My work</p>
        <h2 className={`${styles.sectionHeadText} ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-foreground/80 text-[17px] max-w-3xl leading-[30px] glass-card p-6'
      >
        Line up of projects I have developed, during my journey.
      </motion.p>

      <motion.div 
        className='mt-16 flex flex-col items-center gap-8 glass-card p-8 border-glow'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Works, "work")