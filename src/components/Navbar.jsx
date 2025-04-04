import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import mohannad from '../assets/mohannad.jpg'; 
const Navbar = () => {
  const navLinks = [
    { id: "home", title: "Home", link: "#home" },
    { id: "about", title: "About", link: "#about" },
    { id: "projects", title: "Projects", link: "#projects" },
    { id: "contactus", title: "Contact Us", link: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">  
        <div className="text-2xl font-bold text-white">Mohannad</div> 
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className={`hover:text-blue-600 ${active === link.id ? 'text-blue-600' : ''}`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul> 
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>       
      <div 
        className={`fixed top-0 right-0 h-full bg-black shadow-lg w-full transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`} 
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white">
          <X size={28} />
        </button>
        <ul className="flex flex-col items-center mt-16 space-y-6 text-gray-700 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                onClick={() => {
                  setIsOpen(false);
                  setActive(link.id);
                }}
                className={`hover:text-gray-300 ${active === link.id ? 'text-gray-300' : ''}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul> 
        <div className="flex flex-col items-center mt-8">
          <img src={mohannad} alt="Profile" className="w-20 h-20 rounded-full border-2 border-white" />
        </div> 
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://www.facebook.com/mohannadismail.waheeb" className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-800" target="_blank"><FaFacebookF size={24} /></a> 
          <a href="https://www.instagram.com/mohannadwaheeb/" className="p-2 rounded-md bg-pink-500 text-white hover:bg-pink-700" target="_blank"><FaInstagram size={24} /></a>
          <a href="https://www.linkedin.com/in/mohannad-waheeb-660501319/" className="p-2 rounded-md bg-blue-700 text-white hover:bg-blue-900" target="_blank"><FaLinkedinIn size={24} /></a>
          <a href="https://wa.me/201023134652" className="p-2 rounded-md bg-green-500 text-white hover:bg-green-700" target="_blank"><FaWhatsapp size={24} /></a>
          <a href="https://github.com/mohannad05waheeb" className="p-2 rounded-md bg-gray-800 text-white hover:bg-gray-900" target="_blank">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;