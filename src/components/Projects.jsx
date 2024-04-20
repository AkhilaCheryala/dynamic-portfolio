import React, { useState } from 'react';

function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState(6);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
    setImageLoaded(false);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleViewMore = () => {
    setDisplayedProjects(displayedProjects + 6); 
  };

  return (
    <section className="bg-gray-900 text-white py-20" id='projects'>
      <div className="container mx-auto px-4">
        <h2 className="text-[50px] font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, displayedProjects).map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <img
                src={project.image.url}
                alt={project.title}
                className="mb-4 cursor-pointer"
                onClick={() => handleProjectClick(index)}
              />
              <h3 className="text-2xl font-bold mb-2 font-mono text-fuchsia-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.liveurl} className="text-purple-500 hover:underline font-bold">
                  Live Demo
                </a>
                <a href={project.githuburl} className="text-purple-500 hover:underline font-bold">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        {displayedProjects < projects.length && ( 
          <div className="flex justify-center mt-8">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
        {modalOpen && selectedProject !== null && (
          <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center transition-opacity ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white p-8 max-w-3xl overflow-hidden relative">
              <img
                src={projects[selectedProject].image.url}
                alt={projects[selectedProject].title}
                className={`mx-auto ${imageLoaded ? 'scale-100' : 'scale-0'}`}
                style={{ transitionDuration: '0.5s' }}
                onLoad={handleImageLoad}
              />
              <div className='flex gap-28 absolute top-[15rem] left-52'>
                <a href={projects[selectedProject].liveurl} className=" hover:underline  rounded-3xl w-max py-2 px-4 mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold shadow-lg shadow-slate-800">
                  Live Demo
                </a>
                <a href={projects[selectedProject].githuburl} className=" hover:underline  rounded-3xl w-max py-2 px-4 mt-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold shadow-lg shadow-slate-800">
                  GitHub
                </a>
              </div>
              <button
                className="absolute top-2 right-4 text-gray-900 hover:text-gray-500 font-bold text-xl"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
