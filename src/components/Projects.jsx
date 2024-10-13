import Projects_card from "./Projects_card"
import {projects} from '../data' ;
const Projects = () => {
  return (
    <div className="w-full bg-[#f2f1f0] py-16 flex flex-col items-center">
      <h1 className="text-center mb-8 text-[#333333] text-3xl font-bold">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        {projects.map((project, index) => (
          <Projects_card key={index} videoSrc={project.videoSrc} title={project.title} description={project.description}/>
        ))}
      </div>
      
    </div>
  )
}

export default Projects
