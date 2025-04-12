import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Tech from './components/Tech';
import Works from './components/Works';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';

const AppContent = () => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className='relative min-h-screen bg-background text-foreground'>
      {/* Enhanced background with animated gradient and glow */}
      <div className='fixed inset-0 -z-10'>
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20' 
            : 'bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5'
        }`} />
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]'
        }`} />
        <div className="background-glow" />
      </div>

      {/* Animated gradient blobs with enhanced effects */}
      <motion.div
        className={`fixed top-0 -left-4 w-72 h-72 ${
          theme === 'dark' ? 'bg-primary/15' : 'bg-primary/15'
        } rounded-full filter blur-xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className={`fixed top-0 -right-4 w-72 h-72 ${
          theme === 'dark' ? 'bg-secondary/15' : 'bg-secondary/15'
        } rounded-full filter blur-xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
      />
      <motion.div
        className={`fixed -bottom-8 left-20 w-72 h-72 ${
          theme === 'dark' ? 'bg-accent/15' : 'bg-accent/15'
        } rounded-full filter blur-xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 4,
        }}
      />

      {/* New vibrant colored lights */}
      <motion.div
        className={`fixed top-1/4 right-1/3 w-96 h-96 ${
          theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-400/25'
        } rounded-full filter blur-3xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      />
      <motion.div
        className={`fixed bottom-0 left-0 w-96 h-96 ${
          theme === 'dark' ? 'bg-pink-500/20' : 'bg-pink-400/25'
        } rounded-full filter blur-3xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.5, 1.2, 1],
          x: [0, 100, -60, 0],
          y: [0, -120, 80, 0],
          rotate: [0, 60, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className={`fixed top-2/3 right-1/4 w-96 h-96 ${
          theme === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-400/25'
        } rounded-full filter blur-3xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.5, 1.2, 1],
          x: [0, -50, 40, 0],
          y: [0, 60, -50, 0],
          rotate: [0, -75, 60, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Additional top right motion div */}
      <motion.div
        className={`fixed top-0 right-0 w-96 h-96 ${
          theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-400/25'
        } rounded-full filter blur-3xl opacity-70 animate-blob`}
        animate={{
          scale: [1, 1.4, 1.1, 1],
          x: [0, -80, 60, 0],
          y: [0, 100, -70, 0],
          rotate: [0, 90, -60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 6,
        }}
      />

      {/* Additional dark mode effects */}
      {theme === 'dark' && (
        <>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />
          
          {/* New vibrant gradient overlays */}
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.08),transparent_70%)]" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.08),transparent_70%)]" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)]" />
        </>
      )}

      <Navbar />
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Blog />
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
