import React from 'react';
import styled from 'styled-components';

const AboutCard2 = ({ darkmode }) => {
  return (
    <StyledWrapper darkmode={darkmode}>
      <div className="overcard">
        <div className="card">
          <div className="circles">
            <div className="c" />
            <div className="c" />
            <div className="c" />
          </div>
          <div className="browser">
            <div className="chevrons"></div>
          </div>
        </div>
        <div className="content-card font-light text-lg p-5">
          <p><span className='text-[#A382F6]'>~/VinayBhat $</span> cd skillsAndTools/Proficient/</p>
          <p><span className='text-[#A382F6]'>~/VinayBhat/aboutVinay (main) $</span> ls</p>
          <div className="flex">
            <ul>
              {[
                'The Obvious /',
                'HTML', 'CSS',
                'JavaScript',
                'Git',
                'NPM',
                'Rest APIs / JSON',
                'React Hooks',
                'Fetch'
              ].map((item, index) => (
                <li key={index} className='p-[3px]'>{item}</li>
              ))}
            </ul>

            <ul>
              {[
                'LibrariesAndFrameworks /',
                'React JS',
                'NextJS 14',
                'Tailwind CSS',
                'MaterialUI',
                'Redux'
              ].map((item, index) => (
                <li key={index} className='p-[3px]'>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .overcard {
    display: block;
    width: 640px;
    height: 470px;
    background: ${(props) => (props.darkmode ? '#15191E' : '#E5E6E6')}; 
    border: ${(props) => (props.darkmode ? '1px solid' : '1px solid #ccc')};
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      padding: 20px;
    }
  }

  .card {
    width: 100%;
    height: auto;
    background: ${(props) => (props.darkmode ? '#191E24' : '#f2f2f2')};
    display: flex;
    align-items: center;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    @media (max-width: 768px) {
      padding: 5px;
    }
  }

  .content-card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: ${(props) => (props.darkmode ? '#A6ADAF' : 'black')};
    font-size: 1rem;
    padding: 20px;

    @media (max-width: 768px) {
      font-size: 0.875rem;
      padding: 10px;
      gap: 10px;
    }
  }

  .circles,
  .browser {
    height: 30px;
    display: flex;
    align-items: center;
  }

  .circles {
    gap: 8px;
    padding: 13px 15px;

    @media (max-width: 768px) {
      padding: 10px;
      gap: 5px;
    }
  }

  .c {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .c:first-child {
    background-color: #ff5861;
  }

  .c:nth-child(2) {
    background-color: #ffbe00;
  }

  .c:last-child {
    background-color: #00a96e;
  }

  .browser {
    width: 80%;
    padding: 5px;
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      padding: 3px;
      gap: 5px;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 10px; /* Reduces gap for mobile */
    }
  }

  ul {
    list-style: none;
    padding: 0;

     @media (max-width: 768px) {
      padding: 10px;
    }
  }
   
`;

export default AboutCard2;
