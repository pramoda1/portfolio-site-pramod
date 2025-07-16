// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0d0d0d;
  color: white;
  text-align: center;
  padding: 3rem 1rem 2rem;
`;

const Name = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #00ff88;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  a {
    color: white;
    font-size: 1.4rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff88;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    font-size: 1.2rem;
  }
`;

const Copy = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 1rem;
  line-height: 1.6;

  span {
    font-weight: bold;
    color: #00ff88;
    display: block;

    @media (min-width: 480px) {
      display: inline;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Name>Pramod</Name>

      <SocialIcons>
        <a href="https://www.linkedin.com/in/pramoda-h-s-4ba202268" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pramoda1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </SocialIcons>

      <Copy>
        © <span>Computer Science & Engineering Graduate</span> from MALNAD COLLEGE OF ENGINEERING
      </Copy>
    </FooterContainer>
  );
}
