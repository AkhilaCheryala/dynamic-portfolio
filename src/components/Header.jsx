import React, { useState } from 'react';
import { color, motion } from 'framer-motion';
import person from '../assets/person.svg';
import idea from '../assets/idea.svg';
import introduce from '../assets/introduce.svg';
import education from '../assets/education.svg';
import checklists from '../assets/checklists.svg';
import feedback from '../assets/feedback.svg';
import email from '../assets/email.svg';

function Header({ user }) {
  const [showSocialHandles, setShowSocialHandles] = useState(false);

  const handleSocialHandles = () => {
    setShowSocialHandles(!showSocialHandles);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <motion.div
        className='flex w-full justify-between fixed top-0 lg:px-20 px-8 py-6 bg-slate-800'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className='font-mono text-xl'>Jhon Doe.</p>
        <div className='lg:hidden'>
          {/* Fontawesome icon replaced with SVG */}
          <img src={idea} className='text-2xl' onClick={handleSocialHandles} alt="Idea Icon" />
        </div>
        <motion.ul
          className={`lg:flex gap-6 ${showSocialHandles ? 'block bg-gray-600 p-2 underline' : 'hidden'} social-container`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: showSocialHandles ? 'absolute' : 'relative',
            right: showSocialHandles ? '10px' : 'auto',
            top: showSocialHandles ? '56px' : 'auto'
          }}
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

      <div className='flex flex-col w-in h-96 text-xl p-2 z-[1000] shadow-lg shadow-black fixed right-6 top-32 bg-slate-300 bg-opacity-15 rounded-3xl'>
        <div className="icon-container flex flex-col gap-6 text-center">
          
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("about")}>
            <img src={person} alt="Person Icon" />
          </div>
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("skills")}>
            <img src={idea} alt="Introduce Icon" />
          </div>
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("services")}>
            <img src={introduce} alt="Education Icon" />
          </div>
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("timeline")}>
            <img src={education} alt="Checklists Icon" />
          </div>
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("projects")}>
            <img src={checklists} alt="Feedback Icon" />
          </div>
          <div className="my-icon w-8 hover:opacity-35" onClick={() => scrollToSection("testimonial")}>
            <img src={feedback} alt="Idea Icon" />
          </div>
          <div className="my-icon w-8  hover:opacity-35" onClick={() => scrollToSection("contact")}>
            <img src={email} alt="Email Icon"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
