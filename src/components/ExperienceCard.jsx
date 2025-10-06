export default function ExperienceCard({ title, organization, duration, description, img }) {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300
                    p-6 sm:p-8 m-4 w-full max-w-4xl h-auto sm:h-48 overflow-hidden">
      
      {/* Image Section */}
      <div className="flex-shrink-0 w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center sm:text-left overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 break-words truncate">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-custom-purple font-medium mb-1 break-words truncate">
          {organization}
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mb-2 truncate">
          {duration}
        </p>
        <p className="text-sm sm:text-base text-gray-700 break-words line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}