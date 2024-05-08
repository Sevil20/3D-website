import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar/Navbar.tsx";
import About from './Navbar/About.tsx';
import  Project from './Navbar/Project.tsx'
import  Contact from './Navbar/Contact.tsx';
import NotFound from './Main/NotFound.tsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
         
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
