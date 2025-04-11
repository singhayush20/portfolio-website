import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles/style'
import { profile } from '../assets'
import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-parallax';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/hero-animation.json';
import { useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="hero-section"
    >
      {/* Enhanced background with gradient and glass effect */}
      <div className="hero-bg" />
      
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full filter blur-xl opacity-70 animate-blob"
        style={{ y }}
      />
      <motion.div
        className="absolute top-0 -right-4 w-72 h-72 bg-secondary/20 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-2000"
        style={{ y }}
      />
      <motion.div
        className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full filter blur-xl opacity-70 animate-blob animation-delay-4000"
        style={{ y }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Ayush Singh</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate Full Stack Developer with expertise in building modern web applications.
          </motion.p>
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://github.com/ayushsingh-1"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-3 rounded-full hover:scale-110 transition-transform ${
                theme === 'dark' ? 'text-foreground hover:text-primary' : 'text-foreground/90 hover:text-primary'
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-singh-1/"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card p-3 rounded-full hover:scale-110 transition-transform ${
                theme === 'dark' ? 'text-foreground hover:text-primary' : 'text-foreground/90 hover:text-primary'
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ayushsingh.work@gmail.com"
              className={`glass-card p-3 rounded-full hover:scale-110 transition-transform ${
                theme === 'dark' ? 'text-foreground hover:text-primary' : 'text-foreground/90 hover:text-primary'
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <a
              href="#about"
              className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span>Explore More</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/30 to-background/80 pointer-events-none" />
    </section>
  )
}

export default Hero