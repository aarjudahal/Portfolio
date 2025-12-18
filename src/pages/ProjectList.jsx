import React from "react";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";


export default function ProjectList({ projects, handleViewMore, allVisible }) {
  return (
    <>

    {/* View More / Back Buttons */}
      <div className="flex justify-self-end -mt-10 mb-8">
        {!allVisible && (
          <button
            onClick={handleViewMore}
            className=" bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full transition flex gap-2 ">
            View More <HiArrowNarrowRight size={20} />
          </button>
        )}
        {allVisible && (
          <button
            onClick={() => window.location.reload()} // Simple way to reset
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full transition flex gap-2" >
            <HiArrowNarrowLeft size={20} /> Back
          </button>
        )}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            className="group"
          >
            <div className="bg-gray-500 rounded-xl p-6 border-2 border-transparent 
                            hover:border-cyan-400 transition-all duration-300 shadow-lg 
                            hover:shadow-cyan-500 flex flex-col h-full">
              <h2 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
              <div className="mt-auto flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black 
                               font-medium py-2 px-4 rounded transition"
                  >
                    <FaGithub /> View
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white 
                               font-medium py-2 px-4 rounded transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      
    </>
  );
}