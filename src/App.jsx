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
      {/* Enhanced background with animated gradient */}
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
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        className={`fixed top-0 -left-4 w-72 h-72 ${
          theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
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
          theme === 'dark' ? 'bg-secondary/20' : 'bg-secondary/10'
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
          theme === 'dark' ? 'bg-accent/20' : 'bg-accent/10'
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

      {/* Additional dark mode effects */}
      {theme === 'dark' && (
        <>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
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
