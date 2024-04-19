import React from 'react';
import { motion } from "framer-motion";

const AboutMeComponent = ({ user }) => {
    return (
        <div className='m-2 lg:mb-0 mb-96 ' id='about'>
            <h1 className='font-extrabold text-3xl my-10 lg:ml-24 ml-32'>ABOUT ME</h1>
            <div className='flex lg:flex-row  flex-col-reverse lg:justify-around lg:items-start '>
                <div>
                    <p className=" text-3xl leading-10 tracking-wide w-[30rem] lg:mt-0 mt-[-12rem] h-60 font-serif">
                        {user?.about?.description}
                    </p>
                </div>
                <div>
                    <motion.div
                        className="box"
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
                        <img className="lg:w-96 lg:h-2/4  object-cover bg-gradient-to-r from-purple-500 to-pink-500 p-2 " src={user?.about?.avatar?.url} alt="Avatar" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
