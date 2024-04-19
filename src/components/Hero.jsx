import React from 'react';
import { motion } from 'framer-motion';

function Hero({ user }) {
  const handleButtonClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="hero-section flex justify-around items-center lg:mx-auto h-[100vh] mt-12">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }} 
          transition={{ type: "spring", duration: 2 }}
          className="animated-div"
        >
          <div className='wrapper flex items-center '>
            <h1 className="hidden lg:block static-txt text-white font-bold text-[40px]">I'm a</h1>
            <div className='dynamic-txts lg:ml-4 h-[85px] overflow-hidden'>
              <ul>
                <li><span>{user?.about?.title}</span></li>
                <li><span>Graphic Designer</span></li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-white">{user?.about?.subTitle}</p>
          <h1 className="about-title font-mono mt-2">{user?.about?.address}</h1>
          <button className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 py-1 my-10 font-bold hover:from-fuchsia-500 hover:to-violet-500 hover:uppercase' onClick={handleButtonClick}>
            Talk to Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
