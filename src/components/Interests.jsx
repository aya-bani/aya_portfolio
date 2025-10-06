import  {interests} from '../data';
import Interests_card from "./Interests_card";

const Interests = () => {
  return (
    <div className="w-full bg-[#f2f1f0] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            My Interests
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond coding - exploring diverse passions and creative pursuits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  )
}


export default Interests
