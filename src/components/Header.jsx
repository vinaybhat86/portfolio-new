import { Moon, SunMoon, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

function Header() {
  const { darkmode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className={`flex items-center justify-end md:justify-center w-full p-4 
      ${darkmode ? 'bg-[#1D232A] text-[#A6ADAF]' : 'bg-white text-black'}`}>
        
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleDarkMode} className="p-2">
          {darkmode ? <SunMoon className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <button onClick={toggleMenu} className="p-2">
          <Menu className="w-8 h-8" />
        </button>
      </div>


      <ul className="hidden md:flex md:gap-14 items-center text-[15px]">
        <li>
          <Link to="/about" className={`px-4 py-[7px] hover:cursor-pointer
            ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}>
            about
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={`px-4 py-[7px] hover:cursor-pointer
            ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}>
            portfolio
          </Link>
        </li>
        <Link to="/" className="flex items-center">
        <img src="/assets/logo.png" alt="logo" className="w-20 hover:cursor-pointer" />
      </Link>
        <li>
          <Link to="/resume" className={`px-4 py-[7px] hover:cursor-pointer
            ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}>
            resume
          </Link>
        </li>
        <li
          className={`px-3 py-[8px] hover:cursor-pointer
            ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}
          onClick={toggleDarkMode}
        >
          {darkmode ? <SunMoon className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </li>
      </ul>


      {isMenuOpen && (
        <ul className={`absolute top-20 right-4 
          ${darkmode ? 'bg-[#1D232A] text-[#A6ADAF]' : 'bg-white text-black'} 
          p-4 rounded-lg shadow-lg flex flex-col gap-4 items-start text-[16px] md:hidden`}>
            <li>
            <Link to="/" className={`px-4 py-[7px] hover:cursor-pointer
              ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}
              onClick={toggleMenu}
            >
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`px-4 py-[7px] hover:cursor-pointer
              ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}
              onClick={toggleMenu}
            >
              about
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`px-4 py-[7px] hover:cursor-pointer
              ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}
              onClick={toggleMenu}
            >
              portfolio
            </Link>
          </li>
          <li>
            <Link to="/resume" className={`px-4 py-[7px] hover:cursor-pointer
              ${darkmode ? 'hover:bg-[#2B3039]' : 'hover:bg-[#2b30391b]'} hover:rounded-md`}
              onClick={toggleMenu}
            >
              resume
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
