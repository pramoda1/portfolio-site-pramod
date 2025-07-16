import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import profilePic from '../assets/luke.jpg';

const HeroSection = styled.section`/* ... same as your code ... */`;
const Left = styled.div`/* ... same as your code ... */`;
const CTA = styled.button`  /* <- Change to button */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #00ff88;
  color: #0d0d0d;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #00cc6a;
  }
`;
const Icons = styled.div`/* ... same as your code ... */`;
const Right = styled.div`/* ... same as your code ... */`;
const ImageWrapper = styled.div`/* ... same as your code ... */`;
const ExperienceText = styled.div`/* ... same as your code ... */`;
const Wrapper = styled.div`/* ... same as your code ... */`;

// ✅ JavaScript force-download function
const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = 'https://pramoda1.github.io/portfolio-site-pramod/Pramoda_HS_Resume.pdf'; // Make sure this path is correct
  link.download = 'Pramoda_HS_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Hero() {
  return (
    <Wrapper>
      <HeroSection>
        <Left>
          <h2>Software Developer</h2>
          <h1>
            Hello I'm <span>Pramoda H S</span>
          </h1>
          <p>
            Computer Science graduate with a strong foundation in software engineering, backend development, and AI/ML. Experienced in building full-stack applications and machine learning models through hands-on internships and academic projects. Passionate about developing scalable backend systems, intelligent solutions, and impactful software products.
          </p>

          {/* ✅ Button that triggers PDF download */}
          <CTA onClick={downloadPDF}>
            Download CV ⬇
          </CTA>

          <Icons>
            <a href="https://github.com/pramoda1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/pramoda-h-s-4ba202268/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </Icons>
        </Left>

        <Right>
          <ImageWrapper>
            <img src={profilePic} alt="Pramoda H S" />
            <ExperienceText>
              <span>0.4</span>
              <span>Years Of Experience</span>
            </ExperienceText>
          </ImageWrapper>
        </Right>
      </HeroSection>
    </Wrapper>
  );
}
