
const HeroSection = () => {
  return (
    <div className="w-full min-h-[80vh] bg-[#f2f1f0] rounded-b-[50px] sm:rounded-b-[100px] flex flex-col justify-center items-center px-4 sm:px-8 py-12 sm:py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-32 sm:w-40 bg-white rounded-full p-2 sm:p-3 mb-6 shadow-lg">
              <img 
                src="/assets/images/aya.jpg" 
                alt="Aya" 
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto object-cover" 
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Bani Aya
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-md">
              Currently I'm 3rd year software engineering student
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/assets/pdfs/Kais-Khalifa-resume-may2025.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  Download Resume
                </button>
              </a>
              <a href="mailto:baniaya.it@gmail.com">
                <button className="bg-white text-black border-2 border-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>

          {/* Hero Text Section */}
          <div className="flex-1 flex items-center justify-center">
            <p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center lg:text-right leading-tight"
              style={{
                background: "linear-gradient(to left, #686868, black)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Designing Accessible Interfaces | Exploring the Power of Data..
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
