import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";  
import { motion } from "framer-motion";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import mohannad from "../assets/mohannad.jpg";
import cv from "../assets/MohannadWaheeb_Frontend.pdf"
const socialLinks = [
  { id: 1, icon: <FaFacebookF />, link: "https://www.facebook.com/mohannadismail.waheeb", color: "#1877F2" },  
  { id: 2, icon: <FaWhatsapp />, link: "https://wa.me/201023134652", color: "#25D366" },  
  { id: 3, icon: <FaInstagram />, link: "https://www.instagram.com/mohannadwaheeb/", color: "#E4405F" },  
  { id: 4, icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mohannad-waheeb-660501319/", color: "#0077B5" }, 
  { id: 5, icon: <FaGithub />, link: "https://github.com/mohannad05waheeb", color: "#333" }, 
];
const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const roles = t("roles", { returnObjects: true });
  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
    useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        if (letterIndex < roles[index].length) {
          setCurrentRole((prev) => prev + roles[index][letterIndex]);
          setLetterIndex(letterIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        if (letterIndex > 0) {
          setCurrentRole((prev) => prev.slice(0, -1));
          setLetterIndex(letterIndex - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [letterIndex, deleting]);
  return (
    <div id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative">    
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
        {socialLinks.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-md shadow-md transition-all duration-100"
            whileHover={{ scale: 1.2 }}
            style={{ backgroundColor: item.color }}
          >
            <span className="text-lg group-hover:text-white">{item.icon}</span>
          </motion.a>
        ))}
      </div>  
      <div className="flex flex-col items-center md:pl-0 pl-14">  
        <motion.img
          src={mohannad}
          alt="Mohannad Waheeb"
          className="w-40 h-40 rounded-lg border-4 border-gray-700 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        /> 
        <h1 className="text-3xl font-bold mt-4">{t("name")}</h1> 
        <h2 className="text-xl font-medium mt-2 text-blue-400 h-8">{currentRole}</h2> 
        <motion.a
          href={cv}
          download="MohannadWaheeb_Frontend.pdf"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          {t("cv")} 
        </motion.a>
      </div>
    </div>
  );
};
export default Home; 