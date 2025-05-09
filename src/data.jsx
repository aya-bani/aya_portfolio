import teamMajestyImg from '/assets/images/team_majesty.png';
import dmNovaImg from '/assets/images/dmnova.png';
import classQuizLogoImg from '/assets/images/classquizlogo.png';
import gameDesignImg from '/assets/images/game_design.png';
import gameDevImg from '/assets/images/gamedev.png';
import videoEditingImg from '/assets/images/video-editing.png';
import bubbleshooterVideo from '/assets/videos/bubble shooter.mp4';
import hammamFighterVideo from '/assets/videos/Hammam Fighter.mp4';
import environmentVideo from '/assets/videos/hdrp environment..mp4';
import endlessRunnerVideo from '/assets/videos/endless runner course.mp4';
import aimlabVideo from '/assets/videos/aimlab.mp4';
import bubblegameVideo from '/assets/videos/bubblegame.mp4';
import blurry_hamemfighter from '/assets/images/blurry_hamemfighter.jpg';
import blurry_aimlab from '/assets/images/blurry_aimlab.png';
import blurry_bubblehead from '/assets/images/blurry_bubblehead.png';
import blurry_bubbleshooter from '/assets/images/blurry_bubbleshooter.png';
import blurry_endlessrunner from '/assets/images/blurry_endlessrunner.png';
import blurry_environement from '/assets/images/blurry_environement.png';
import SingaporeLogoImg from '/assets/images/images-removebg-preview (1).png';

export const works = [
  {
    img: classQuizLogoImg, 
    title: "Full time Unity Intern",
    duration: "2024 - present",
    organization: "Classquiz",
    description: "Progressed from summer intern to part-time developer, and now full-time Unity intern for my final year project at ClassQuiz—building a multiplayer plugin, optimizing scalable architecture, adding features, fixing bugs, and contributing to release cycles.",
  },
  {
    img: SingaporeLogoImg, 
    title: "Unity Trainer",
    duration: "2025",
    organization: "singapore polytechnic",
    description: "Delivered a 4-day, 16-hour course on Unity basics and VR development to over 10 students from Singapore Polytechnic, achieving positive outcomes as reflected in their performance on the final test assignment",
  },
  {
    img: dmNovaImg, 
    title: "Unity Intern",
    duration: "2023",
    organization: "DM-Nova",
    description: "Developed educational mini-games for kids, collaborated across technical and creative teams, and improved skills in code refactoring and teamwork.",
  },
    {
      img: teamMajestyImg, 
      title: "Professional Video Editor",
      duration: "2022-2024",
      organization: "Majesty E-Sports Team",
      description: "Edited videos for clients, developed organizational skills, and managed multiple projects using Vegas Pro.",
    },
  ];
  
  export const Extraactivities = [
    {
      img: teamMajestyImg, 
      title1: "Club President",
      duration1: "2022-2023",
      organization: "North American Tunisian Engineers Group (NATEG)",
      description1: "Developed strong skills in team management effective communication, and public speaking as President of a prominent club.Demonstrated ability to coordinate and motivate diverse teams to achieve shared goals.Gained valuable experience in project planning, collaboration, and problem-solving.Organized multiple internal and external events.",
    },
    {
      img: dmNovaImg, 
      title: "Unity Trainer",
      duration: "2024",
      organization: "North American Tunisian Group (NATEG)",
      description: "Served as a Unity trainer in my club, conducting multiple sessions to teach Unity basics through an endless runner game I designed.",
    },
    {
      img: dmNovaImg, 
      title: "Unity Trainer",
      duration: "2024",
      organization: "North American Tunisian Group (NATEG)",
      description: "Served as a Unity trainer in my club, conducting multiple sessions to teach Unity basics through an endless runner game I designed.",
    }
  ];
  
  export const interests = [
    {
      image: gameDesignImg, 
      title: "Game Design",
      description: "Creating immersive and engaging game experiences that are intuitive, captivating, and enjoyable for players"
    },
    {
      image: gameDevImg,
      title: "Game Development",
      description: "Creating immersive experiences that captivate and engage players."
    },
    {
      image: videoEditingImg, 
      title: "Video Editing",
      description: "Crafting compelling stories through the art of video editing."
    }
  ];
  export const projects = [
    {
      videoSrc: bubbleshooterVideo,
      blurryimg: blurry_bubbleshooter,
      title: '2048 Bubbles Shooter',
      description: 'Was a technical test I took with Envast, seems simple but has a lot of algorithmic problem solving'
    },
    {
      videoSrc: hammamFighterVideo,
      blurryimg: blurry_hamemfighter,
      title: 'Hammam Fighter',
      description: 'Thats the game I participated with in the global game jam hosted in polytechnique sousse,started from scratch and developed in 48 hours'
    },
    {
      videoSrc: environmentVideo,
      blurryimg: blurry_environement,
      title: 'HDRP Environment',
      description: 'Its an unfinished project, in fact my most recent one, the main goal is to experiment with creating a nice environment using high quality materials and textures, I aim to transform it into a fishing or survival game.'
    },
    {
      videoSrc: endlessRunnerVideo,
      blurryimg: blurry_endlessrunner,
      title: 'Endless Runner Course',
      description: 'Its a game inspired from an old course I studied, its main purpose is to teach my friends and club members the basics of unity in a 6 session workshop to introduce them to game devand the unity engine'
    },
    {
      videoSrc: aimlabVideo,
      blurryimg: blurry_aimlab,
      title: 'Aim Lab',
      description: 'That project was the first on I started from scratch without following any tutorials'
    },
    {
      videoSrc: bubblegameVideo,
      blurryimg :blurry_bubblehead,
      title: 'Bubble Heads',
      description: 'This is the game I developed from scratch in just 24 hours for the Global Game Jam 2025, hosted at EPI Digital School Sousse, and won 2nd place in the competition'
    }
  ];