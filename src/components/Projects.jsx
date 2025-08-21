import { useTranslation } from "react-i18next"; 
import sneakers from "../assets/sneakers.png";
import foodio from "../assets/foodio.png";
import woo from "../assets/woo.png";
import todo from "../assets/todo.png";
import tenzies from "../assets/tenzies.png";
import space from "../assets/space.png";
import elzero3 from "../assets/elzero3.png";
import food from "../assets/food.png";
import dashboard from "../assets/dashboard.png";
import gsearch from "../assets/gsearch.png";
import sama from "../assets/sama.png";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiFramer } from "react-icons/si";
import { FaEye, FaGithub } from "react-icons/fa";
const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const projects = [
    {
      id: 1,
      title: "Store E - Commerce Food",
      image: foodio,
      demoLink: "https://foodio1.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Foodio_ECommerce",
      skills: [
        <FaReact className="text-3xl" />,
        <SiTailwindcss className="text-3xl" />,
        <SiFramer className="text-3xl" />,
        <SiRedux className="text-3xl" />,
      ],
    },
    {
      id: 2,
      title: "Store E - Commerce Sneakers",
      image: sneakers,
      demoLink: "https://sneakers-store1.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/ECommerce-App",
      skills: [
        <FaReact className="text-3xl" />,
        <SiTailwindcss className="text-3xl" />,
        <SiFramer className="text-3xl" />,
        <SiRedux className="text-3xl" />,
      ],
    },
    {
      id: 3,
      title: "Woo Bank",
      image: woo,
      demoLink: "https://hoo-bank1.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Hoo-Bank",
      skills: [<FaReact className="text-3xl" />, <SiTailwindcss className="text-3xl" />],
    },
    {
      id: 4,
      title: "Todo List",
      image: todo,
      demoLink: "https://todo-list20-10.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/todo-list",
      skills: [<FaReact className="text-3xl" />, <FaCss3Alt className="text-3xl" />],
    },
    {
      id: 5,
      title: "Tenzies Game",
      image: tenzies,
      demoLink: "https://tanzies1.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Tanzies",
      skills: [<FaReact className="text-3xl" />, <FaCss3Alt className="text-3xl" />],
    },
    {
      id: 6,
      title: "Space",
      image: space,
      demoLink: "https://spacea.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Space",
      skills: [<FaHtml5 className="text-3xl" />, <FaCss3Alt className="text-3xl" />, <FaJs className="text-3xl" />],
    },
    {
      id: 7,
      title: "Template 3 Elzero",
      image: elzero3,
      demoLink: "https://elzero-3.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Elzero3",
      skills: [<FaHtml5 className="text-3xl" />, <FaCss3Alt className="text-3xl" />, <FaJs className="text-3xl" />],
    },
    {
      id: 8,
      title: "Food App",
      image: food,
      demoLink: "https://food2010.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Food_App_React",
      skills: [<FaReact className="text-3xl" />, <SiTailwindcss className="text-3xl" />],
    },
    {
      id: 9,
      title: "Dashboard",
      image: dashboard,
      demoLink: "https://dashboard-2010.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Dashboard_React",
      skills: [<FaReact className="text-3xl" />, <FaCss3Alt className="text-3xl" />],
    },
    {
      id: 10,
      title: "GitHub Search",
      image: gsearch,
      demoLink: "https://sgithub.netlify.app/",
      githubLink: "#",
      skills: [<FaHtml5 className="text-3xl" />, <FaCss3Alt className="text-3xl" />, <FaJs className="text-3xl" />],
    },
    {
      id: 11,
      title: "Sama App",
      image: sama,
      demoLink: "https://sama-app.netlify.app/",
      githubLink: "https://github.com/mohannad05waheeb/Sama_App",
      skills: [
        <FaReact className="text-3xl" />,
        <SiTailwindcss className="text-3xl" />,
        <SiFramer className="text-3xl" />,
        <SiRedux className="text-3xl" />,
      ],
    },
  ];
  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{t("projects")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" dir="ltr">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <div className="flex justify-center space-x-4 mb-4">
                  {project.skills.map((icon, index) => (
                    <div key={index} className="text-gray-400">
                      {icon}
                    </div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-2 rounded-md mr-2"
                  >
                    <FaEye className="inline-block" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-2 rounded-md"
                  >
                    <FaGithub className="inline-block" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;