const Technologies = () => {
    const technologies = [
      { src: "/assets/images/csslogo.png", alt: "CSS", name: "CSS" },
      { src: "/assets/images/jslogo.png", alt: "JavaScript", name: "JavaScript" },
      { src: "/assets/images/html.png", alt: "HTML", name: "HTML" },
      { src: "/assets/images/react.png", alt: "React", name: "React" },
      { src: "/assets/images/springboot.png", alt: "Spring Boot", name: "Spring Boot" },
      // { src: "/assets/images/figma.png", alt: "Figma", name: "Figma" },
      { src: "/assets/images/tailwindcss.png", alt: "Tailwind CSS", name: "Tailwind CSS" },
      { src: "/assets/images/bootstrap.png", alt: "Bootstrap", name: "Bootstrap" },
      { src: "/assets/images/python.png", alt: "Python", name: "Python" },


    ];

    return (
      <div className="w-full py-12 sm:py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Technologies I Work With
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#f2f1f0] rounded-lg p-2 sm:p-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <img 
                    src={tech.src} 
                    alt={tech.alt} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-600 mt-2 font-medium text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Technologies;
  