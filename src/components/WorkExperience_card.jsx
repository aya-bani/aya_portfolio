const WorkExperience_card = ({ title, organization, duration, description, img }) => {
  // Split description into bullet points
  const bulletPoints = description.split('.').filter(point => point.trim().length > 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 card-hover w-full flex">
      {/* Logo container: full height of the card */}
      <div className="flex-shrink-0 w-24 flex items-center justify-center">
        <img src={img} alt={organization} className="max-w-full max-h-full object-contain" />
      </div>

      {/* Content */}
      <div className="flex-1 ml-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {title}
        </h3>

        {/* Organization */}
        <p className="text-lg font-semibold text-gray-700 mb-2">
          {organization}
        </p>

        {/* Duration */}
        <p className="text-gray-600 font-medium mb-4">{duration}</p>

        {/* Description as bullet points */}
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="text-gray-400 mt-1.5">•</span>
              <span className="text-sm leading-relaxed">{point.trim()}.</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience_card;
