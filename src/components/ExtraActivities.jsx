const ExtraActivities = () => {
  return (
    <div className="w-full bg-[#f2f1f0] py-16 flex justify-center items-center flex-col">
      <h1 className="text-center mb-8 text-[#333333] text-3xl sm:text-4xl font-bold">
        Extra Curricular Activities
      </h1>

      <div className="flex flex-col items-center w-full max-w-5xl px-4 space-y-8">
        <img src="../public/assets/images/logonateg.png" alt="NATEG Logo" className="w-32 h-auto" />
        <p className="text-center text-[#242424] text-lg sm:text-xl">
          North American Tunisian Engineers Group <br /> (NATEG)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
          <div className="shadow-lg rounded-lg p-6 w-full max-w-md mx-auto bg-white">
            <h3 className="text-xl font-semibold text-[#555555]">
              Club President <br/> <span className="text-sm text-gray-500">2023-2024</span>
            </h3>
            <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
              <li>Developed skills in team management, communication, and public speaking.</li>
              <li>Coordinated and motivated diverse teams to reach shared goals.</li>
              <li>Gained experience in project planning, collaboration, and problem-solving.</li>
              <li>Organized multiple internal and external events.</li>
            </ul>
          </div>

          <div className="shadow-lg rounded-lg p-6 w-full max-w-md mx-auto bg-white">
            <h3 className="text-xl font-semibold text-[#555555]">
              Unity Trainer <br/> <span className="text-sm text-gray-500">2024</span>
            </h3>
            <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
              <li>Conducted Unity training sessions with an endless runner game I designed.</li>
            </ul>
          </div>

          <div className="shadow-lg rounded-lg p-6 w-full max-w-md mx-auto bg-white">
            <h3 className="text-xl font-semibold text-[#555555]">
              HR Lead <br/> <span className="text-sm text-gray-500">2023-2024</span>
            </h3>
            <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
              <li>Enhanced team management, strategic communication, and public speaking skills.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ExtraActivities
