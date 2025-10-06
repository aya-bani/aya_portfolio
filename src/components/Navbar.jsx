// Navbar.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'; // Email icon
import { faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f2f1f0] px-4 sm:px-8 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="mailto:baniaya.it@gmail.com" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="text-sm font-bold">baniaya.it@gmail.com</span>
            </a>
            <a href="public\assets\pdfs\Bani-Aya.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn bg-white text-black border rounded-[26px] w-24 h-10 text-sm font-bold hover:bg-gray-100 transition-colors">
                Resume
              </button>
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/aya-bani-75354a284/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              <span>LinkedIn</span>
            </a>
            {/* <a href="https://www.upwork.com/freelancers/~01d877e49841e538e3" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <FontAwesomeIcon icon={faUpwork} className="text-lg" />
              <span>Upwork</span>
            </a> */}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <a href="mailto:baniaya.it@gmail.com">
                <button className="btn bg-black text-white border rounded-[26px] px-4 py-2 text-sm font-bold hover:bg-gray-800 transition-colors">
                  Email
                </button>
              </a>
              <a href="/assets/pdfs/Kais-Khalifa-resume-may2025.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-white text-black border rounded-[26px] px-4 py-2 text-sm font-bold hover:bg-gray-100 transition-colors">
                  Resume
                </button>
              </a>
            </div>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y-4">
                <a href="https://www.linkedin.com/in/aya-bani-75354a284/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~01d877e49841e538e3" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                  <FontAwesomeIcon icon={faUpwork} className="text-lg" />
                  <span>Upwork</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
