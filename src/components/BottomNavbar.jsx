import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg flex space-x-6 z-10">
      <a href="#contact" className="nav-icon">
        <FaEnvelope />
      </a>
      <a href="#projects" className="nav-icon">
        <FaProjectDiagram />
      </a>
      <a href="#about" className="nav-icon">
        <FaUser />
      </a>
      <a href="#" className="nav-icon">
        <FaHome />
      </a>
    </nav>
  );
};
export default BottomNavbar;