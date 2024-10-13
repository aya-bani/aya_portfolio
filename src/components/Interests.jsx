import  {interests} from 'C:/Users/Aya Bani/projets/kais_portfolio/src/data.jsx';
import Interests_card from "./Interests_card";

const Interests = () => {
  return (
    <div className="w-full bg-[#f2f1f0] py-16 flex justify-center items-center flex-col">
      <h1 className="text-center mb-8 text-[#333333] text-3xl sm:text-4xl font-bold">Interests</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {interests.map((interest, key) => (
          <Interests_card 
            key={key}
            image={interest.image}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </div>
  )
}


export default Interests
