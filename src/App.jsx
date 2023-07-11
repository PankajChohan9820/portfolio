import './App.css';
// import Header from './components/Header';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Project from './components/Project';
import Header from './components/Header';
import './style.css';
import ThemeContext from './ThemeContext';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
    <Router>
      <div className={`App ${isDarkTheme ? 'bg-dark-bg' : 'bg-light-bg'}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
