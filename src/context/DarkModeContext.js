import React, { createContext, useState, useContext, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

  const [darkmode, setDarkmode] = useState(() => {

    const savedMode = localStorage.getItem('darkmode'); 
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkmode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkmode', JSON.stringify(newMode)); 
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkmode'); 
    if (savedMode !== null) {
      setDarkmode(JSON.parse(savedMode));
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
