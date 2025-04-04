import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGit, SiGithub, SiRedux, SiFramer } from "react-icons/si";  
const About = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-4xl" /> },
    { name: "ReactJS", icon: <FaReact className="text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-4xl" /> },   
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl" /> },  
    { name: "Git", icon: <SiGit className="text-4xl" /> },   
    { name: "GitHub", icon: <SiGithub className="text-4xl" /> },  
    { name: "Redux Toolkit", icon: <SiRedux className="text-4xl" /> }, 
    { name: "Framer Motion", icon: <SiFramer className="text-4xl" /> }, 
    { name: "React Router", icon: <FaReact className="text-4xl" /> },  
];
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">        
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-xl mb-8">
          Hello, I'm Mohannad Waheeb, A Frontend Developer specializing in React.js with extensive experience building fast, modern websites and web applications. I provide professional front-end development services using the latest technologies to ensure a seamless user experience and superior performance.
        </p> 
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="mb-4">
                {skill.icon}
              </div>
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;