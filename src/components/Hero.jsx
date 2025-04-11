import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../assets'
import { TypeAnimation } from 'react-type-animation';
import { useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { socials, email } from '../constants';

const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const githubLink = socials.find(social => social.name === 'GitHub')?.link;
  const linkedinLink = socials.find(social => social.name === 'LinkedIn')?.link;

  return (
    <section
      ref={containerRef}
      className="hero-section relative overflow-hidden min-h-screen flex items-center pt-20 lg:pt-0"
    >
      {/* Enhanced background with gradient and glass effect */}
      <div className="hero-bg" />
      
      {/* Animated gradient blobs with enhanced effects - positioned behind content */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary motion effects */}
        <motion.div
          className={`absolute top-1/4 -left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] ${
            theme === 'dark' ? 'bg-blue-500/40' : 'bg-blue-400/30'
          } rounded-full filter blur-3xl opacity-90 animate-blob border-glow`}
          style={{ y }}
        />
        <motion.div
          className={`absolute top-1/4 -right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] ${
            theme === 'dark' ? 'bg-yellow-500/40' : 'bg-yellow-400/30'
          } rounded-full filter blur-3xl opacity-90 animate-blob animation-delay-2000 border-glow`}
          style={{ y }}
        />
        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] ${
            theme === 'dark' ? 'bg-green-500/40' : 'bg-green-400/30'
          } rounded-full filter blur-3xl opacity-90 animate-blob animation-delay-4000 border-glow`}
          style={{ y }}
        />

        {/* Additional smaller motion effects */}
        <motion.div
          className={`absolute top-1/3 left-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px] ${
            theme === 'dark' ? 'bg-purple-500/30' : 'bg-purple-400/20'
          } rounded-full filter blur-2xl opacity-70 animate-blob animation-delay-1000`}
          style={{ y }}
        />
        <motion.div
          className={`absolute bottom-1/3 right-1/3 w-[200px] h-[200px] md:w-[300px] md:h-[300px] ${
            theme === 'dark' ? 'bg-pink-500/30' : 'bg-pink-400/20'
          } rounded-full filter blur-2xl opacity-70 animate-blob animation-delay-3000`}
          style={{ y }}
        />
        <motion.div
          className={`absolute top-2/3 right-1/4 w-[200px] h-[200px] md:w-[300px] md:h-[300px] ${
            theme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-400/20'
          } rounded-full filter blur-2xl opacity-70 animate-blob animation-delay-5000`}
          style={{ y }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-32 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end lg:-ml-32"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-yellow-500/20 to-green-500/20 blur-2xl animate-pulse" />
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-blue-500/20 elevated-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profile}
                  alt="Ayush Singh"
                  className="w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-yellow-500/20 rounded-full blur-xl animate-pulse" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-blue-500">
                <TypeAnimation
                  sequence={[
                    'Ayush Singh',
                    1000,
                    'Ayush',
                    1000,
                    'Ayush Singh',
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl glass-card p-4 md:p-6 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A passionate Full Stack Developer with expertise in building modern web applications.
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button border-glow hover:bg-blue-500/20 transition-colors"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button border-glow hover:bg-yellow-500/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href={`mailto:${email}`}
                className="glass-button border-glow hover:bg-green-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <a
                href="#about"
                className="glass-button border-glow flex items-center gap-2 hover:bg-gradient-to-r from-blue-500/20 to-green-500/20 transition-colors"
              >
                <span>Explore More</span>
                <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced glass overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/80 pointer-events-none backdrop-blur-sm" />
      
      {/* Additional border glow effects */}
      <div className="absolute inset-0 border-glow pointer-events-none" />
    </section>
  )
}

export default Hero