import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Navbarr from './components/navbaar/Navbarr.jsx';
// import Skills from '../s'
import About from './components/about/About';
import Contactme from './components/contact/Contactme';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills.jsx';
function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path='/' element={<><Home /></>} />
        <Route path='/home' element={<><Home /></>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/aboutme' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contactme' element={<Contactme />} />
      </Routes>
      
    </>
  );
}

export default App;
