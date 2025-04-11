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
  
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='w-[95%] sm:w-[75%] md:w-[80%] elevated-card border-glow'
    >
      <motion.div 
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='glass-card p-6'
      >
        <div className='flex flex-col md:flex-row gap-6 items-start'>
          <motion.div 
            className='glass-card p-4 flex-shrink-0 border-glow'
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
              <h3 className='text-foreground font-bold text-2xl gradient-text'>{name}</h3>
              <p className='mt-2 text-muted-foreground text-sm leading-relaxed'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap items-center gap-4'>
              <div className='flex flex-wrap gap-2'>
                {tags.map((tag) => (
                  <span
                    key={`${name}-${tag.name}`}
                    className={`text-sm px-2 py-1 rounded-full glass-button border-glow ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
              <div className='flex gap-3'>
                {source_links.map((source_link, index) => (
                  <motion.div
                    key={index}
                    className="glass-button border-glow p-2 cursor-pointer"
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