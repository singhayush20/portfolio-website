import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Blog, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-primary relative'>
        <div className='bg-hero-pattern bg-scale-down bg-repeat bg-center'>
          <div className='relative z-0'>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Works />
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
