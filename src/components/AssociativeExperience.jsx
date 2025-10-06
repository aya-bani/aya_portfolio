import ExperienceCard from './ExperienceCard';
import { associativeExperienceData } from '../data'; // make sure path is correct

const AssociativeExperience = () => {
  return (
    <div className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Associative Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Community involvement and leadership experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {associativeExperienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              organization={experience.organization}
              duration={experience.duration}
              description={experience.description}
              img={experience.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssociativeExperience;
