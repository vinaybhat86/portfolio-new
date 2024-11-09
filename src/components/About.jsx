import React from 'react'
import AboutCard from './AboutCard'
import { useDarkMode } from '../context/DarkModeContext';
import AboutCard2 from './AboutCard2';

function About() {
  const { darkmode } = useDarkMode();
  return (
    <div className={`flex flex-col items-center gap-10 py-16 w-screen
    ${darkmode?'bg-[#1D232A]' : 'bg-white'}`}>
   <AboutCard darkmode={darkmode}/>
   <AboutCard2 darkmode={darkmode}/>
    </div>
 
  )
}

export default About