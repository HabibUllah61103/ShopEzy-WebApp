import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo } from '../assets';
import { SignUpCanvas, StarsCanvas } from './canvas';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const Signup = () => {

  const [loading, setloading] = useState(false);

  const formRef = useRef();
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    city: "",
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
          <div className={`${styles.paddingX} absolute top-[100px] max-w-8xl mx-auto flex flex-row items-start`}>
        <div className={`xl:mt-0 flex  xl:flex-row  gap-0 overflow-hidden`}>
          
          <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
            className="xl:flex-1 h-[550px] md:h-[550-px] overflow-hidden rounded-3xl">
              <SignUpCanvas />
          </motion.div>

            <div className="flex-[0.85] bg-black-100 p-8 rounded-2xl">
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)}>
            <p className={styles.sectionSubText}>
              Welcome to ShopEzy, the best online shopping platform.  
            </p>
            <h3 className={styles.sectionHeadText}>
              SignUp</h3>
              <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-4 flex flex-col gap-4">
                <div className='flex flex-row gap-10'>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Name</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Email</span>
                  <input type="email" name="email" value={form.password} onChange={handleChange} placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                </div>
                <div className='flex flex-row gap-10'>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Password</span>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="What's your password?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your Country Name</span>
                  <input type="text" name="country" value={form.country} onChange={handleChange} placeholder="What's your country name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                </div>
                <div className='flex flex-row gap-10'>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Enter Your City Name</span>
                  <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="What's your city name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
                </label>
                <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Click to Create Account</span>
                <button
                type="submit"
                className="bg-tertiary py-4 px-6 outline-none  w-[245px] text-white font-bold shadow-md shadow-primary rounded-xl">
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>
                </label>
                </div>
              </form>
              </motion.div>
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
          <Link to="/signin">
            <button
                    className="bg-tertiary py-0.5 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                    Sign in
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

export default Signup