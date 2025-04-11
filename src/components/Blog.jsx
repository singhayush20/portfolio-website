import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles/style';
import { SectionWrapper } from '../higher_order_component';
import { blogs, mediumProfile } from '../constants';
import { fadeIn, textVariant } from '../motion';
import { useTheme } from '../context/ThemeContext';

const ArticleCard = ({ index, name, link, description, image }) => {
  const { theme } = useTheme();
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.02 }}
      className='w-[360px] glass-effect rounded-2xl p-[1px] shadow-card hover:shadow-glow-md transition-all duration-300 cursor-pointer'
      onClick={() => window.open(link, '_blank')}
    >
      <div className='bg-card/50 backdrop-blur-sm p-5 rounded-2xl w-full'>
        <motion.div 
          className='rounded-2xl overflow-hidden h-[280px]'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={image}
            alt='blog_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-110'
          />
        </motion.div>
        <div className='mt-5'>
          <h3 className={`text-foreground font-bold text-2xl line-clamp-2 ${
            theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
          }`}>{name}</h3>
          <p className={`mt-2 text-sm leading-relaxed line-clamp-3 ${
            theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
          }`}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
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
        }`}>My blog</p>
        <h2 className={`${styles.sectionHeadText} ${
          theme === 'dark' ? 'text-foreground' : 'text-foreground/90'
        }`}>Articles.</h2>
      </motion.div>

      <motion.div 
        className={`mt-4 text-[17px] leading-[30px] flex items-center ${
          theme === 'dark' ? 'text-foreground/80' : 'text-foreground/70'
        }`}
        variants={fadeIn("", "", 0.1, 1)}
      >
        Explore my array of tech articles. Dive in for a deeper read. To view all, find me on{' '}
        <motion.a 
          href={mediumProfile} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ml-2 text-foreground hover:text-primary underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Medium
        </motion.a>
        .
      </motion.div>

      <motion.div 
        className='mt-16 glass-effect rounded-2xl p-8'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-wrap justify-center gap-8'>
          {blogs.map((article, index) => (
            <ArticleCard
              key={`article-${index}`}
              index={index}
              {...article}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SectionWrapper(Blog, 'blog')