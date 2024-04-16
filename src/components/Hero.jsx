import React from 'react';

import { motion } from "framer-motion";
console.log('user');
function Hero({ user }) {
    return (
        <div className="hero-section flex justify-around items-center">
           <div>
            <h1 className='text-3xl'>Hello</h1>
            <div className='wrapper '>
                <h1 className=" static-txt text-white font-bold text-[60px]">I'm</h1>
                <div className='dynamic-txts ml-4 h-[90px]  overflow-hidden '>
                    <ul>
                        <li><span> {user?.about?.name}</span></li>
                        <li><span>  {user?.about?.title}</span></li>
                    </ul>
                </div>
            </div>
            <p className="hero-description">{user?.about?.subTitle}</p>
            </div>
            <div>
                <motion.div
                    className="box "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >
                    <img className="w-72 h-72 object-cover rounded-full " src={user?.about?.avatar?.url} alt="Avatar" />
                </motion.div>

            </div>

        </div>
    );
}

export default Hero;
