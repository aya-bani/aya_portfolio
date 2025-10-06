// WorkExperience.jsx
import { works } from '../data';
import WorkExperience_card from "./WorkExperience_card.jsx";

const WorkExperience = () => {
  return (
    <div className="w-full bg-gray-100 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Work Experience
          </h1>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Building experience through internships and real-world projects
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {works.map((work, key) => (
            <WorkExperience_card 
              key={key}
              img={work.img}
              title={work.title}
              duration={work.duration}
              organization={work.organization}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default WorkExperience;
