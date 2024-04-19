import React, { useState } from 'react';
import { color, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faComments, faEnvelope, faFileCircleCheck, faHandshakeAngle, faHeadSideVirus, faList, faUser } from '@fortawesome/free-solid-svg-icons';

function Header({ user }) {
  const [showSocialHandles, setShowSocialHandles] = useState(false);

  const handleSocialHandles = () => {
    setShowSocialHandles(!showSocialHandles);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Social Handles */}
      <motion.div
        className=' flex  w-full justify-between fixed top-0 lg:px-20 px-8 py-6 bg-slate-800'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className='font-mono text-xl'>Jhon Doe.</p>
        <div className='lg:hidden '>         
          <FontAwesomeIcon icon={faList}  className='text-2xl' onClick={handleSocialHandles}/>
        </div>
        <motion.ul
          className={`lg:flex gap-6 ${showSocialHandles ? 'block bg-gray-600 p-2 underline' : 'hidden'} social-container`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ position: showSocialHandles ? 'absolute' : 'relative',
          right: showSocialHandles ? '10px' : 'auto',
          top: showSocialHandles ? '56px' : 'auto' }}
        >
          {user.social_handles.map((handle, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={handle.url}
                className="text-lg text-fuchsia-300 hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {handle.platform}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll To Section */}
      <div className='flex flex-col w-in h-96 text-xl p-2 z-[1000] shadow-lg shadow-black fixed right-6 top-32 bg-slate-300 bg-opacity-15 rounded-3xl'>
        <div className="icon-container flex flex-col gap-6 text-center">
          <ScrollToSection id="about" icon={faUser} />
          <ScrollToSection id="skills" icon={faHeadSideVirus} />
          <ScrollToSection id="services" icon={faHandshakeAngle} />
          <ScrollToSection id="timeline" icon={faBookOpenReader} />
          <ScrollToSection id="projects" icon={faFileCircleCheck} />
          <ScrollToSection id="testimonial" icon={faComments} />
          <ScrollToSection id="contact" icon={faEnvelope} />
        </div>
      </div>
    </div>
  );
}

function ScrollToSection({ id, icon }) {
  const scrollToSection = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="my-icon w-10 hover:text-gray-400" onClick={scrollToSection}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

export default Header;
