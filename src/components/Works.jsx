import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { styles } from '../styles/style';
import { SectionWrapper } from '../higher_order_component';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_links,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=' w-[95%] sm:w-[75%] bg-[#1B133D] md:w-[80%] rounded-2xl p-1'>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='dark-blue-purple-gradient p-5 rounded-2xl  w-full flex flex-col md:flex-row gap-5 items-center justify-center'
      >
        <div className='black-gradient rounded-2xl flex flex-row justify-center items-center'>

          <div
            className='black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-[90%] h-[90%] object-contain'
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col justify-center items-start'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-4'>
            <div className='flex flex-wrap gap-2 flex-row'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className='flex flex-wrap gap-2 flex-row'>
              {
                source_links.map((source_link, index) => {
                  return (
                    <img
                      onClick={() => window.open(source_link.link, "_blank")}
                      alt="project_link"
                      key={index}
                      src={source_link.icon}
                      className="cursor-pointer"
                      width={'30px'}
                      height={'30px'}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following are some projects which I have developed during my B.Tech journey.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap items-center justify-center gap-7'>
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Works, "work")