import React, { useState } from 'react';

function Skills({ skills }) {
  const [skillsData, setSkillsData] = useState(skills);
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(8);

  const handlePercentageChange = (event, index) => {
    const updatedSkills = [...skillsData];
    updatedSkills[index].percentage = parseInt(event.target.value);
    setSkillsData(updatedSkills);
  };

  const handleViewMore = () => {
    setVisibleSkillsCount(skillsData.length); // Display all skills
  };

  return (
    <div className='h-[90vh]'>
      <h2 className="text-[50px] font-bold mb-10 text-center">Skills</h2>
      <div className='flex justify-center flex-wrap gap-2'>
        {skillsData.slice(0, visibleSkillsCount).map((skill, index) => (
          <div key={skill._id} className="w-52 h-36 flex flex-col items-center gap-5 py-2 border bg-gray-100 rounded-2xl text-black m-5">
            <span className='flex items-center gap-10'>
              <img src={skill.image.url} alt={skill.name} className="w-16 mt-[-3rem]" />
              <p className=''>{skill.percentage}%</p>
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={skill.percentage}
              onChange={(event) => handlePercentageChange(event, index)}
              className="w-40"
            />
            <h4 className="text-2xl font-bold">{skill.name}</h4>
          </div>
        ))}
      </div>
      {skillsData.length > 8 && (
        <button
          onClick={handleViewMore}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5 block mx-auto"
        >
          View More
        </button>
      )}
    </div>
  );
}

export default Skills;
