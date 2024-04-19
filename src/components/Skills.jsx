import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Skills({ skills }) {
  const [skillsData, setSkillsData] = useState(skills);
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(8);

  const container = {
    visible: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handlePercentageChange = (event, index) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index].percentage = parseInt(event.target.value);
    setSkillsData(updatedSkills);
  };

  const handleViewMore = () => {
    setVisibleSkillsCount(skillsData.length); // Display all skills
  };

  return (
    <div className='my-20' id='skills'>
      <h2 className="text-[40px] font-bold mb-20 text-center">Skills</h2>
      <div className='flex justify-center flex-wrap gap-10'>
        <AnimatePresence>
          {skillsData.slice(0, visibleSkillsCount).map((skill, index) => (
            <motion.div key={skill._id} className="w-52 h-36 flex flex-col items-center gap-5 py-2 border bg-gray-800 rounded-2xl text-white m-5"
              initial="hidden"
              animate="visible"
              variants={container}>
              <motion.span className='flex items-center gap-10' variants={item}>
                <img src={skill.image.url} alt={skill.name} className="w-16 mt-[-3rem]" />
                <p>{skill.percentage}%</p>
              </motion.span>
              <motion.input
                type="range"
                min="0"
                max="100"
                value={skill.percentage}
                onChange={(event) => handlePercentageChange(event, index)}
                className="w-40"
                variants={item}
              />
              <motion.h4 className="text-2xl font-bold" variants={item}>{skill.name}</motion.h4>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {skillsData.length > 8 && (
        <button
          onClick={handleViewMore}
          className="bg-blue-500 bg-gradient-to-r from-violet-400 to-pink-600 hover:from-pink-500 hover:to-violet-400 text-white font-bold px-4 py-2 rounded-md mt-20 block mx-auto"
        >
          View More
        </button>
      )}
    </div>
  );
}

export default Skills;
