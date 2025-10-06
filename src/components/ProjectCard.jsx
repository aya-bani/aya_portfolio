import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, defaultImg, hoverImg, github, technologies, demo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img 
          src={isHovered ? hoverImg : defaultImg} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faCode} className="w-4 h-4" />
            Code
          </a>
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

