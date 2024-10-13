// WorkExperience.jsx
import { works } from '../data';
import WorkExperience_card from "./WorkExperience_card.jsx";

const WorkExperience = () => {
  return (
    <div className="w-full bg-[#f2f1f0] py-16 flex justify-center items-center flex-col">
      <h1 className="text-center mb-8 text-[#333333] text-3xl sm:text-4xl font-bold">Professional Experience</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl px-4">
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
  );
};


export default WorkExperience;
