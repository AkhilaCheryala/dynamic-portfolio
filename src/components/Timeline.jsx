import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Timeline({ experience, education }) {
  const [activeSection, setActiveSection] = useState('experience');

  const [refExperience, inViewExperience] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  const [refEducation, inViewEducation] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust as needed
  });

  useEffect(() => {
    animateSection();
  }, [activeSection]);

  const animateSection = () => {
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('animate');
      }, index * 200);
    });
  };

  return (
    <div className='mt-24'>
     
      <div className="sm:hidden mb-4 flex flex-col items-center">
        <h2 className='text-[40px]'>Explore My Journey</h2>
        
        
      </div>

      <div className='flex  lg:justify-center  items-center '>
       
        <h2 className='hidden sm:block text-[80px] w-96'>Explore My Journey in Work </h2>
        <div className='w-[50%] experience-container'>
          <div className='flex lg:gap-24 gap-10  mb-10 py-4  mx-2   lg:justify-around '>
            <h3 ref={refExperience} className={`font-bold underline underline-offset-2 bg-pink-400 lg:px-20 px-10 py-2 rounded-3xl ${activeSection === 'experience' ? 'text-white' : 'text-gray-800'}`} onClick={() => setActiveSection('experience')}>Experience</h3>
            <h3 ref={refEducation} className={`font-bold underline underline-offset-2 bg-pink-400 lg:px-20 px-10 py-2 rounded-3xl ${activeSection === 'education' ? 'text-white' : 'text-gray-800'}`} onClick={() => setActiveSection('education')}>Education</h3>
          </div>
          <div>
            {activeSection === 'experience' && experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={inViewExperience ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`border flex flex-col gap-2 w-96 lg:w-full border-gray-300 rounded p-4  mb-4 section-container m-2 `}
              >
                <p className='text-3xl font-bold  text-transparent bg-gradient-to-r from-violet-400 to-pink-600 bg-clip-text'>{item.jobTitle}</p>
                <h3 className='font-mono text-lg'>{item.company_name}</h3>
                <p>{item.summary}</p>
                <div className='text-right'>
                  <p><span className='text-purple-400'>Start Date:</span> {new Date(item.startDate).toLocaleDateString()}</p>
                  <p><span className='text-purple-400'> End Date:</span> {new Date(item.endDate).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            {activeSection === 'education' && education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={inViewEducation ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`border flex flex-col w-96 lg:w-full gap-2 border-gray-300 rounded p-4  py-3 mb-4 section-container`}
              >
                <p className='text-3xl font-bold  text-transparent bg-gradient-to-r from-violet-400 to-pink-600 bg-clip-text'>{item.jobTitle}</p>
                <h3 className='font-mono text-lg'>{item.company_name}</h3>
                <p>{item.summary}</p>
                <div className='text-right'>
                  <p><span className='text-purple-400'>Start Date:</span> {new Date(item.startDate).toLocaleDateString()}</p>
                  <p><span className='text-purple-400'> End Date:</span> {new Date(item.endDate).toLocaleDateString()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
