import React, { useState, useContext } from 'react';
import { RiLinkedinFill, RiGithubFill, RiSunFill, RiMoonFill } from 'react-icons/ri';
import { SiPaloaltosoftware } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../ThemeContext';

const Header = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('/');
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const handleNavigation = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  return (
    <header className={`flex items-center justify-between py-4 px-6 ${isDarkTheme ? 'bg-dark-bg' : 'bg-light-bg'}`}>
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <span>
            <SiPaloaltosoftware className={`${isDarkTheme ? 'fill-white' : ''}`}/>
          </span>
        </div>
      </div>
      <nav className="flex items-center">
        {/* Navigation menu */}
        <ul className="flex">
          <li className={`mr-6 ${activeLink === '/' ? 'border-blue-500 border-b-2' : 'hover:border-blue-500 hover:border-b-2'} ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className={`mr-6 ${activeLink === '/resume' ? 'border-blue-500 border-b-2' : 'hover:border-blue-500 hover:border-b-2'} ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>
            <button onClick={() => handleNavigation('/resume')}>Resume</button>
          </li>
          <li className={`mr-6 ${activeLink === '/projects' ? 'border-blue-500 border-b-2' : 'hover:border-blue-500 hover:border-b-2'} ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>
            <button onClick={() => handleNavigation('/projects')}>Projects</button>
          </li>
          <li className={`${activeLink === '/contact' ? 'border-blue-500 border-b-2' : 'hover:border-blue-500 hover:border-b-2'} ${isDarkTheme ? 'text-dark-font' : 'text-light-font'}`}>
            <button onClick={() => handleNavigation('/contact')}>Contact</button>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        {/* Dark/Light theme button */}
        {/* <button onClick={toggleTheme} className="text-gray-500 hover:text-blue-500">
          {isDarkTheme ? <RiSunFill /> : <RiMoonFill />}
        </button> */}
        {/* LinkedIn icon */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <RiLinkedinFill className={`w-6 h-6 ml-4 ${isDarkTheme ? 'text-font' : 'text-heading'} hover:text-blue-500 ${isDarkTheme ? 'fill-white' : ''}`} />
        </a>
        {/* GitHub icon */}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <RiGithubFill className={`w-6 h-6 ml-2 ${isDarkTheme ? 'text-font' : 'text-heading'} hover:text-blue-500 ${isDarkTheme ? 'fill-white' : ''}`} />
        </a>
      </div>
    </header>
  );
};

export default Header;
