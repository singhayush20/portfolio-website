import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav className='fixed top-0 w-full flex items-center px-5 py-5 z-50 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className='w-9 h-9 object-contain max-w-9 max-h-9' />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer flex'>Ayush Singh &nbsp; <span className='md:block hidden'>| Backend Developer</span></p> */}
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? 'text-white underline' : 'text-secondary'} hover:text=white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[20px] h-[20px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? 'text-white underline' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;