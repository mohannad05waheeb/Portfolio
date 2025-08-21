import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BottomNavbar from './components/BottomNavbar';
import About from './components/About';
import Reviews from './components/Reviews';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
    useEffect(() => {
    document.documentElement.lang = lang;  
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";  
  }, [lang]);
  return (
    <>
    <Navbar /> 
    <Home />
    <BottomNavbar />
    <About />
    <Reviews />
    <Projects />
    <Contact />
    </> 
  );
};
export default App;