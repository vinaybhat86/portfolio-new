import React from 'react';
import styled from 'styled-components';

const AboutCard = ({ darkmode }) => {
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
          <p><span className='text-[#A382F6]'>~/VinayBhat $</span> cd aboutVinay/</p>
          <p><span className='text-[#A382F6]'>~/VinayBhat/aboutVinay (main) $</span> cat README.md</p>
          <p className='pt-4'>Hi, <b>I'm Vinay</b>, a passionate software developer with a focus on <b>React and Next.js</b>. I've been diving deep into the world of web development and am currently expanding my skills to include Node.js, Express, and PostgreSQL. I also have a solid foundation in Java programming, which I enjoy exploring whenever I get the chance.</p>
          <p>I hold a Master's in Computer Applications (MCA) from Dayananda Sagar College of Engineering, graduating in 2024 with a 9.3 CGPA. The journey has been exciting, and I'm always looking for new challenges to tackle! Whether it's building dynamic web apps or learning the latest technologies, I'm constantly evolving as a developer.</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .overcard {
    width: 640px;
    height: 490px;
    background: ${(props) => (props.darkmode ? '#15191E' : '#E5E6E6')};
    border: ${(props) => (props.darkmode ? '1px solid' : '1px solid #ccc')};
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90%;
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
`;

export default AboutCard;
