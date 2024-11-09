import React from 'react';
import SingleProject from './SingleProject';
import { useDarkMode } from '../context/DarkModeContext';


function Portfolio() {
  const { darkmode } = useDarkMode();
  
  return (
    <div className={`flex flex-col justify-center items-center min-h-screen pt-10 md:pt-20 
    ${darkmode ? 'bg-[#1D232A] text-[#A6ADAF] ' : 'bg-white text-black'}`}>
      <div className='flex md:flex h-fit flex-wrap w-8/12 justify-center gap-44 gap-y-14 pb-12'>
      <SingleProject 
        image='/assets/project1.png' 
        Link1="https://educraft-project.vercel.app/courses" 
        Link2="https://github.com/vinaybhat86/EduCraft-Project" 
        name="Educraft"
      />
      <SingleProject 
        image='/assets/project4.png' 
        Link1="https://tictactoegamevi.netlify.app/" 
        Link2="https://github.com/vinaybhat86/tic-tac-toe" 
        name="Tic-Tac-Toe"
      />
       <SingleProject 
        image='/assets/project3.png' 
        Link1="" 
        Link2="" 
        name="Portfolio"
      />
        <SingleProject 
        image='/assets/project2.png' 
        Link1="https://nikeclone-vinay.netlify.app/" 
        Link2="https://github.com/vinaybhat86/Netflix-Clone-VinayBhat" 
        name="Nike Clone"
      />
      </div>
    </div>
  );
}

export default Portfolio;
