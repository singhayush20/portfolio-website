import React from 'react'
import { styles } from '../styles/style';
import { SectionWrapper } from '../higher_order_component';
import { blogs, mediumProfile } from '../constants';

const ArticleCard = ({ index, name, link, description, image }) => {
    return (


        // <motion.div 
        // variants={fadeIn("right", "spring", 0.1 * index, 0.75)}>
        <div className='blue-green-purple-gradient2 p-0.5 rounded-2xl w-[360px] cursor-pointer' onClick={() => {
            window.open(link, '_blank');
        }}>
            <div
                className=' bg-tertiary p-5 rounded-2xl w-full transition-transform duration-300 ease-in-out transform hover:scale-105'
            >
                <div className='rounded-2xl overflow-hidden h-[280px]'>
                    <img
                        src={image}
                        alt='blog_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
                </div>
            </div>
        </div>
        // </motion.div>
    );
};


const Blog = () => {
    return (
        <div>
            {/* <motion.div
                variants={textVariant()}> */}
            <p className={`${styles.sectionSubText}`}>My articles</p>
            <h2 className={`${styles.sectionHeadText}`}>Articles</h2>
            {/* </motion.div> */}
            <div className='w-full flex'>
                Explore my array of tech articles. Dive in for a deeper read. To view all, find me on &nbsp; <a href={mediumProfile} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 hover:underline transition-colors duration-300">Medium</a>.
            </div>
            <div className='mt-20 flex flex-wrap justify-center gap-7'>
                {
                    blogs.map((article, index) => {
                        return (
                            <ArticleCard
                                key={`project-${index}`}
                                index={index}
                                {...article}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SectionWrapper(Blog, 'blog')