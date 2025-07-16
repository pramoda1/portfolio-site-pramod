import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import profilePic from '../assets/luke.jpg';

const HeroSection = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  min-height: 80vh;
  padding: 2rem;
  display: flex;
  flex-direction: row; /* Always row */
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Allows wrap on small screens */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;
  margin-top: -40px;

  h2 {
    color: #999;
    font-size: 1rem;
    letter-spacing: 2px;
  }

  h1 {
    font-size: 2.5rem;
    margin: 1rem 0;
  }

  span {
    color: #00ff88;
  }

  p {
    color: #bbb;
    margin: 1rem 0;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    padding-right: 1rem;
  }
`;

const CTA = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #00ff88;
  color: #0d0d0d;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #00cc6a;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #00ff88;
    transition: 0.3s;

    &:hover {
      color: white;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  padding: 1rem;
  margin-top: -150px;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px dotted #00ff88;
    animation: pulse 2s infinite;
    z-index: 0;
  }

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 180px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ExperienceText = styled.div`
  position: absolute;
  top: -10px;
  right: -150px;
  background: transparent;
  color: red;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: blink 1s infinite;

  span {
    display: block;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

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

          <CTA href="/Pramoda_HS_Resume.pdf" download>
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
