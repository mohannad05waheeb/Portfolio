import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BottomNavbar from './components/BottomNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
    <Navbar /> 
    <Home />
    <BottomNavbar />
    <About />
    <Projects />
    <Contact />
    </> 
  );
};
export default App;