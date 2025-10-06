import {Navbar} from './components/Navbar.jsx';
import './App.css';
import HeroSection from './components/HeroSection.jsx';
import Technologies from './components/Technologies.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Contact from './components/Contact.jsx'
import Interests from './components/Interests.jsx';
import Projects from './components/Projects.jsx';
import AssociativeExperience from './components/AssociativeExperience.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <div className="min-h-screen git push origin main
bg-[#f2f1f0]">
      <Navbar />
      <main>
        <HeroSection/>
        <Technologies/>
        <Projects/>
        <WorkExperience/>
        <AssociativeExperience/>
        <Interests/>
        <Contact/>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
