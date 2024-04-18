import React from 'react';
import { motion } from "framer-motion";

const AboutMeComponent = ({ user }) => {
    return (
        <div className='m-2 h-[90vh]'>
            <h1 className='font-extrabold text-3xl my-10 ml-24'>ABOUT ME</h1>
            <div className='flex justify-around '>
                <div>
                    <p className="font-light text-3xl leading-10 tracking-wide w-[30rem] h-60">
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
                        <img className="w-96 h-96  object-cover  " src={user?.about?.avatar?.url} alt="Avatar" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
