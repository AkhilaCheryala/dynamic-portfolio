import React from 'react';

import { motion } from "framer-motion";
console.log('user');
function Hero({ user }) {

  return (
    <div className="hero-section flex  justify-around items-center mx-auto h-[100vh]">
      <motion.div
        initial={{ x: "-100vw" }} // Start from outside the left edge of the viewport
        animate={{ x: 0 }} // Animate to the original position (0 on x-axis)
        transition={{ type: "spring", duration: 2 }}
        className="animated-div"
      >
        <h1 className='text-3xl'>Hello</h1>
        <div className='wrapper '>
          <h1 className=" static-txt text-white font-bold text-[60px]">I'm</h1>
          <div className='dynamic-txts ml-4 h-[90px]  overflow-hidden '>
            <ul>
              <li><span>{user?.about?.name}</span></li>
              <li><span>{user?.about?.title}</span></li>
            </ul>
          </div>
        </div>
        <p className="text-xl text-white">{user?.about?.subTitle}</p>
        <h1 className="about-title">{user?.about?.address}</h1>

      </motion.div>

    </div >


  );
}

export default Hero;
