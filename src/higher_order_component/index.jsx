import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        className="relative z-0"
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper; 