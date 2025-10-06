import ommpLogo from '/assets/images/ommp.png';
import mitLogo from '/assets/images/mitlogo.png';
import EnvastImg from '/assets/images/logoenvast.png';
import deepLearning from '/assets/images/machinelearning.png';

import fiberone from '/assets/images/fiber one.png';

import nategLogo from '/assets/images/logonateg.png';
import microsoftLogo from '/assets/images/logomic.png';
import uiux from '../public/assets/images/uiux.png';
import webDev from '../public/assets/images/webdev.png';
import skillforge from '../public/assets/images/skillforge.PNG';
import poseImg from '../public/assets/images/pose.png'



import issatsomanagement from '../public/assets/images/issastsomanagement.PNG'; 
export const works = [
  {
    img: ommpLogo,
    title: 'Software Engineer Intern - Conception Phase',
    duration: 'July 2023 - August 2023',
    organization: 'Office de la Marine Marchande et des Ports',
    description: 'Contributed to the conception of web applications by gathering requirements and brainstorming solutions. Collaborated with the development team to outline project specifications and designs. Participated in technical documentation and system architecture planning.',
  },
  {
    img: EnvastImg, 
    title: 'Junior Web Developer',
    duration: 'July 2024 - September 2024',
    organization: 'ENVAST',
    description: 'Developed responsive web applications using React and Laravel frameworks. Participated in code reviews and agile development processes. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented frontend components and backend API endpoints.',
  },
  {
    img: mitLogo,
    title: "Research Intern",
    duration: "Jul – Sep 2025",
    organization: "Manipal Institute of Technology, India",
    description: "Worked on the project 'Modeling, Simulation and Optimization of Industrial Application using Artificial Intelligence Techniques' in the School of Computer Engineering. Applied AI-driven methods for simulation and optimization tasks. Gained hands-on research experience under faculty mentorship. Contributed to academic research papers and technical documentation."
  }
];
  
export const associativeExperienceData = [
  {
    title: 'Projects Department Leader - Charity and Junior',
    organization: 'NATEG ISSATSo Club',
    duration: 'September 2023 - June 2024',
    description: 'Led a team in organizing charity events, coordinating logistics, and promoting participation to support various community initiatives. Worked collaboratively with members to ensure successful outcomes and foster engagement.',
    img: nategLogo,
  },
  {
    title: 'Head of Basic Web Department',
    organization: 'Microsoft ISSATSo Club',
    duration: 'September 2024 - Present',
    description: 'Led workshops and training sessions focused on foundational web development skills. Taught HTML, CSS, and JavaScript, developed lesson plans, and provided hands-on guidance to students, fostering a supportive learning environment.',
    img: microsoftLogo,
  },
];
  
  export const interests = [
    {
    image: uiux, 
    title: "UI/UX design",
    description: "Designing intuitive and visually appealing user interfaces that enhance user experience, ensuring seamless navigation, accessibility, and engagement."
  },
  {
    image: webDev,
    title: "Web Development",
    description: "Building responsive, high-performance websites with clean code, seamless functionality, and an intuitive user experience."
  },
  {
    image: deepLearning,
    title: "Machine Learning",
    description: "Building efficient and scalable machine learning models with clean code, seamless integration, and insightful data-driven solutions."
  }
]

// New project data structure matching the design
export const ProjectData = [
  {
    title: 'Skill Forge',
    description: 'A full-stack web app using React and Laravel, featuring user authentication, course management, and dynamic theming.',
    defaultImg: skillforge, 
    hoverImg: skillforge,  
    github:'https://github.com/aya-bani/SkillForge',
    technologies: ['React', 'Laravel', 'PHP', 'MySQL'],
    demo: '#' // Replace with actual demo URL
  },
 {
  title: 'Fiber One Asia',
  description: 'A responsive and interactive website for Fiber One Asia, developed using React and Tailwind CSS. Implemented dynamic components, seamless navigation, and modern UI design to enhance user experience and accessibility.',
  defaultImg: fiberone,
  hoverImg: fiberone,
  github: 'https://github.com/aya-bani/fiber-one-asia-prototype',
  technologies: ['React', 'Tailwind CSS', 'JavaScript'],
  demo: '#' // Replace with actual demo URL
},

  {
    title: 'Issatso Management',
    description: 'ISSATSoManagement is a web application for managing academic and administrative tasks, designed using React and Tailwindcss while using Spring Boot for the backend.',
    defaultImg: issatsomanagement, 
    hoverImg: issatsomanagement,   
    github:'https://github.com/aya-bani/issatsomanagement_fullapp',
    technologies: ['React', 'Spring Boot', 'Tailwind CSS', 'Java'],
    demo: '#' // Replace with actual demo URL
  },
  {
  title: 'Pose Estimation Project',
  description: 'A real-time human pose estimation application using OpenCV and Mediapipe. Captures video input, detects and tracks key body landmarks, calculates FPS, and visualizes pose connections for interactive analysis and performance tracking.',
  defaultImg: poseImg,      // replace with your imported image variable or screenshot
  hoverImg: poseImg,        // optional: can be the same or another hover effect image
  github: 'https://github.com/aya-bani/PoseEstimationProject', // replace with actual repo link
  technologies: ['Python', 'OpenCV', 'Mediapipe'],
  demo: '#' // Replace with live demo or video link if available
} ,
{
  title: 'MIT Research Internship',
  description: "Worked on the project 'Modeling, Simulation and Optimization of Industrial Application using Artificial Intelligence Techniques' at Manipal Institute of Technology, India.",
  defaultImg: mitLogo,       // replace with your imported image variable or screenshot
  hoverImg: mitLogo,         // optional: can be the same or another hover effect image
  github: 'https://github.com/aya-bani/sgmd-mit-all-versions',
  technologies: ['Python'],
  demo: '#' // Replace with live demo or video link if available
}


];