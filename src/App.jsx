import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Blog, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-primary relative'>
        <div className='bg-hero-pattern bg-scale-down bg-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Blog />
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
