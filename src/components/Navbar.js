import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .dots span {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #00ff88;
    border-radius: 50%;
    margin-left: 4px;
    animation: blink 1.2s infinite;
  }

  .dots span:nth-child(2) {
    animation-delay: 0.2s;
  }
  .dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s ease;

    &:hover,
    &.active {
      color: #00ff88;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        Pramod
        <span className="dots">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </Logo>

      <NavLinks>
  <Link to="home" smooth={true} duration={50}>Home</Link>
  <Link to="tools" smooth={true} duration={50}>Skills/Technologies</Link>
  <Link to="experience" smooth={true} duration={50}>Experience</Link>
  <Link to="projects" smooth={true} duration={50}>Projects</Link>
  <Link to="certifications" smooth={true} duration={50}>Certifications</Link>
  <Link to="contact" smooth={true} duration={50}>Contact</Link>
</NavLinks>

    </Nav>
  );
}
