import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/navLinks';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [Toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>

          <img src={logo} alt="logo" className='w-12 h-12 object-contain'
            style={{ borderRadius: '100%' }} />

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            ShopEzy&nbsp;
            <span className='sm:block hidden'>| Make online shopping easier</span>
          </p>

        </Link>

        <ul className='list-none hidden sm:flex flow-grow gap-10'>

          {navLinks.map((link) => (

            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>

              <a href={`#${link.id}`}>{link.title} </a>

            </li>
          ))}
          <Link to="/signup">
            <button
                    className="bg-tertiary py-0.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                    Get Started
            </button>
            </Link>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>

          <img src={Toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!Toggle)} />

          <div className={`${!Toggle ? 'hidden' : 'flex'} 
          p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!Toggle);
                    setActive(link.title);
                  }}>

                  <a href={`#${link.id}`}>{link.title} </a>

                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar