import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import working from '../assets/working.png';

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
    <div className='mt-96'>
      <div className='flex gap-5 justify-around items-center'>
        <h2 className='text-[90px] w-96'>Explore My Journey in Work </h2>
        <div className='w-[50%] experience-container'>
          <div className='flex gap-24 mb-20 py-4  justify-around'>
            <h3 ref={refExperience} className={`font-bold underline underline-offset-2 bg-pink-400 px-20 py-2 rounded-3xl ${activeSection === 'experience' ? 'text-white' : 'text-gray-800'}`} onClick={() => setActiveSection('experience')}>Experience</h3>
            <h3 ref={refEducation} className={`font-bold underline underline-offset-2 bg-pink-400 px-20 py-2 rounded-3xl ${activeSection === 'education' ? 'text-white' : 'text-gray-800'}`} onClick={() => setActiveSection('education')}>Education</h3>
          </div>
          <div>
            {activeSection === 'experience' && experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={inViewExperience ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`border flex flex-col gap-2 border-gray-300 rounded p-4 mb-4 section-container`}
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
                className={`border flex flex-col gap-2 border-gray-300 rounded p-4 mb-4 section-container`}
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

export default Timeline
