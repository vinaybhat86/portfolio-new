import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

function LandingPage() {
    const { darkmode } = useDarkMode();
  return (
    <div className={`flex flex-col md:flex-row items-center justify-center md:h-[450px] md:pt-10 
    ${darkmode? 'text-[#A6ADAF]':''}`}>
      <img 
        src="/assets/self.png" 
        alt="Vinay's profile picture" 
        className="w-96 h-80 md:w-[430px] md:h-96 object-cover"
      />
      <div className="mt-8 md:mt-0 md:ml-12 text-left md:text-left">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">Hi, I'm <span className="text-purple-600">Vinay</span> <span>👋</span></h1>
        <p className="text-xl md:text-2xl mb-6 font-light">I'm a web developer.</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center justify-start md:justify-start">
            <span className="text-2xl mr-2">🏠</span> based in India
          </li>
          <li className="flex items-center justify-start md:justify-start">
            <span className="text-2xl mr-2">🎓</span> MCA graduate
          </li>
          <li className="flex items-center justify-start gap-1 md:justify-start">
          <span className="text-2xl mr-2">📧</span> 
                let's <a href="mailto:vinaybhat1209@gmail.com" className="text-purple-600 hover:underline">get in touch!</a>
          </li>
        </ul>
        <div className="flex justify-start md:justify-start space-x-6">
          <a href="https://github.com/vinaybhat86" className="text-gray-700 hover:text-purple-600">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/vinay-k-757450266/" className="text-gray-700 hover:text-purple-600">
            <Linkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
