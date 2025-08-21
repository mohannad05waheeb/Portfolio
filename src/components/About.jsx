import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGit, SiGithub, SiRedux, SiFramer } from "react-icons/si";  
const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
const skills = [
  { id: 1, nameKey: "HTML5", icon: <FaHtml5 className="text-4xl" /> },
  { id: 2, nameKey: "CSS3", icon: <FaCss3Alt className="text-4xl" /> },
  { id: 3, nameKey: "JavaScript", icon: <FaJs className="text-4xl" /> },
  { id: 4, nameKey: "ReactJS", icon: <FaReact className="text-4xl" /> },
  { id: 5, nameKey: "TypeScript", icon: <SiTypescript className="text-4xl" /> },
  { id: 6, nameKey: "TailwindCSS", icon: <SiTailwindcss className="text-4xl" /> },
  { id: 7, nameKey: "Git", icon: <SiGit className="text-4xl" /> },
  { id: 8, nameKey: "GitHub", icon: <SiGithub className="text-4xl" /> },
  { id: 9, nameKey: "Redux Toolkit", icon: <SiRedux className="text-4xl" /> },
  { id: 10, nameKey: "Framer Motion", icon: <SiFramer className="text-4xl" /> },
  { id: 11, nameKey: "React Router", icon: <FaReact className="text-4xl" /> },
];
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">        
        <h2 className="text-4xl font-bold mb-6">{t("about")}</h2>
        <p className="text-xl mb-8">
          {t("contentAbout")}
        </p> 
        <h3 className="text-2xl font-semibold mb-4">{t("skills")}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" dir="rtl">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col justify-center items-center bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-colors duration-300">
              <div className="mb-4">
                {skill.icon}
              </div>
              <span className="text-xl font-semibold">{t(skill.nameKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;