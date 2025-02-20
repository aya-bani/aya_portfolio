
const HeroSection = () => {
  return (
    <div className="w-screen h-[80vh] bg-[#f2f1f0] rounded-b-[100px] flex align-center justify-center flex-col">
      <div className="w-full flex justify-center items-center">
        <div className="w-[80%] max-w-[500px] mx-auto text-center">
          
          <div className="w-40 bg-white rounded-full p-2 mx-auto">
            <img src="src/assets/images/personne.jpg" alt="Kais" className="w-36 h-36 rounded-full mx-auto" />
          </div>
          
          <p className="text-2xl m-2">Khalifa Kais</p>
          <p className="text-xl m-2">Currently working as a full-time game developer at Classquiz</p>

        </div>
      </div>

      <div>
        <p className="text-5xl max-w-[600px] mx-auto text-center font-bold" style={{
          background: "linear-gradient(to left, #686868,black)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}> Building games where clean code meets captivating play..</p>
      </div>
    </div>
  )
}

export default HeroSection
