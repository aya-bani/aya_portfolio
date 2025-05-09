const WorkExperience_card = (props) => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center  p-4 m-2 rounded-md shadow-md h-auto sm:h-auto  w-full max-w-sm sm:max-w-xl bg-white">
        
        <div className="w-48 h-54 mb-4 sm:mr-4 sm:mb-0 flex items-center justify-center overflow-hidden">
        <img 
            src={props.img} 
            alt="Work experience" 
            className="w-24 h-auto" 
        />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold font-preahvihear break-words text-[#555555]">
            {props.title}
            <br/>
            <span className="text-sm text-gray-500">{props.duration}</span>
          </h3>
          <p className="text-sm sm:text-base font-bold  font-preahvihear break-words">{props.organization}</p>
          <p className="mt-2 text-xs sm:text-sm  font-preahvihear break-words">{props.description}</p>
        </div>
      </div>
    );
  };
  
  export default WorkExperience_card;
  