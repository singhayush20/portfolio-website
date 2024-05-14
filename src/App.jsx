import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Blog, Navbar, Tech, Works, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-primary relative'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
            <div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Blog />
            </div>
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
