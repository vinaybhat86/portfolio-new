import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Resume from "./components/Resume";
import Footer from './components/Footer';
import { useDarkMode } from "./context/DarkModeContext";
import "./App.css";
import LandingPage from './components/LandingPage';

function App() {
  const { darkmode } = useDarkMode();

  return (
    <AppContainer>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <ContentWrapper darkmode={darkmode}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </ContentWrapper>

      <Footer darkmode={darkmode} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-top: 100px; 
  background-color: ${({ darkmode }) => (darkmode ? '#1D232A' : 'white')};
  width: 100%;
`;

export default App;
