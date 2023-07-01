import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo } from '../assets';
import { SignInCanvas, StarsCanvas } from './canvas';

const Signin = () => {

  const [loading, setloading] = useState(false);

  const formRef = useRef();
  const [form, setform] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
  }

    return (
        <>
        <body>
        <Navbar/>
        <section className='relative w-full h-screen mx-auto'>
          <div className={`${styles.paddingX} absolute top-[100px] max-w-7xl mx-auto flex flex-row items-start`}>
        <div className={`xl:mt-0 flex  xl:flex-row  gap-0 overflow-hidden`}>
          
          <div
            className="xl:flex-1 h-[550px] md:h-[550-px] overflow-hidden rounded-3xl">
              <SignInCanvas/>
          </div>

            <div className="flex-[0.50] bg-black-100 p-8 rounded-2xl">
            <p className={styles.sectionSubText}>
              Welcome to ShopEzy, the best online shopping platform.  
            </p>
            <h3 className={styles.sectionHeadText}>
              Sign In</h3>
              <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-8">
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Email</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Password</span>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="What's your password?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>
          </div>
        </div>
        </div>
        </section>  
        <StarsCanvas/>
        </body>
        </>
    )
}


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
          to="/signup"
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
          <Link to="/signup">
            <button
                    className="bg-tertiary py-0.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                    Sign Up
            </button>
            </Link>
            <Link to="/">
            <button
                    className="bg-tertiary py-0.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                    Back to Home
            </button>
            </Link>
        </ul>
        </div>
    </nav>
  )
}

export default Signin