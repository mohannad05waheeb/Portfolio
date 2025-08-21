import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaComments } from "react-icons/fa";

const BottomNavbar = () => {   
  const navLinks = [
    { id: "contact", icon: <FaEnvelope /> },
    { id: "projects", icon: <FaProjectDiagram /> },
    { id: "reviews", icon: <FaComments /> },
    { id: "about", icon: <FaUser /> },
    { id: "home", icon: <FaHome /> },
  ];
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg flex gap-x-6 z-10">
      {navLinks.map((link) => (
        <a key={link.id} href={`#${link.id}`} className="nav-icon">
          {link.icon}
        </a>
      ))}
    </nav>
  );
};
export default BottomNavbar;