import ProjectCard from "./ProjectCard"
import {ProjectData} from '../data' ;
const Projects = () => {
  return (
    <div className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of creative projects and technical solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title}
              description={project.description}
              defaultImg={project.defaultImg}
              hoverImg={project.hoverImg}
              github={project.github}
              technologies={project.technologies}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
