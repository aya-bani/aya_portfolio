// Navbar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Email icon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // LinkedIn icon

export const Navbar = () => {
  return (
    <nav className="w-screen bg-[#f2f1f0] flex justify-between p-8 ">
      <div className="flex space-x-4">
        <div className="flex items-center space-x-4">
        <a href="mailto:Khalifa.kais.it@gmail.com" className="hidden md:flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="text-sm font-bold">Khalifa.kais.it@gmail.com</span>
        </a>
        <a href="mailto:Khalifa.kais.it@gmail.com" className="md:hidden">
          <button className="btn bg-black text-white border rounded-[26px] w-24 h-10 text-sm font-bold">
            Email
          </button>
        </a>
      </div>
      <a href="public\cv.pdf"  target="_blank" rel="noopener noreferrer">
      <button className="btn bg-white text-black border rounded-[26px] w-24 h-10 text-sm font-bold">
        CV
        </button>
      </a>
       

      </div>
      <div className="flex items-center">
        <a href="https://www.linkedin.com/in/kais-khalifa/" className="hidden md:block">LinkedIn</a>
        <a href="https://www.linkedin.com/in/kais-khalifa/" className="md:hidden"> 
           <button className="flex items-center justify-center bg-white text-black border rounded-[30px] p-3 ">
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" /> 
          </button>   
        </a>
      </div>
    </nav>
  );
};
