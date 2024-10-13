import {Navbar} from './components/Navbar.jsx';
import './App.css';
import HeroSection from './components/HeroSection.jsx';
import Technologies from './components/Technologies.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Contact from './components/Contact.jsx'
import ExtraActivities from './components/ExtraActivities.jsx';
import Interests from './components/Interests.jsx';
import Projects from './components/Projects.jsx';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
        <div className='bg-[#f2f1f0]'>
          <Technologies/>
        </div>
        <Interests/>
        <WorkExperience/>
        <ExtraActivities/>
        <Projects/>
        <div className='bg-[#f2f1f0]'>
          <Contact/>
        </div>
    </>
  );
}

export default App;
