import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMeComponent = ({ user }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Percentage of the element's visibility needed to trigger animation
    });

    const [hoveredWord, setHoveredWord] = useState(null);

    // Function to handle mouse enter event
    const handleMouseEnter = (word) => {
        setHoveredWord(word);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setHoveredWord(null);
    };

    return (
        <div className='m-2 lg:mb-0 mb-96' id='about'>
            <h1 className='font-extrabold text-3xl my-10 lg:ml-24 ml-32'>ABOUT ME</h1>
            <div className='flex lg:flex-row  flex-col-reverse lg:justify-around lg:items-start'>
                <div>
                    <p className="text-3xl leading-10 tracking-wide w-[30rem] lg:mt-0 mt-[-12rem] h-60 font-serif">
                        {user?.about?.description.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer ${hoveredWord === word ? 'text-purple-500' : ''}`}
                                onMouseEnter={() => handleMouseEnter(word)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </p>
                </div>
                <div ref={ref}>
                    <motion.div
                        className="box"
                        initial={{ y: -1000, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <img
                            className="lg:w-96 lg:h-2/4 object-cover bg-gradient-to-r from-purple-500 to-pink-500 p-2"
                            src={user?.about?.avatar?.url}
                            alt="Avatar"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeComponent;
