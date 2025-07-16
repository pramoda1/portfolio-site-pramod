import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4rem 2rem;
  color: white;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #00ff88;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #00ff8855;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  &:hover img {
    opacity: 1;
  }

  &:hover .overlay {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  h3 {
    color: #00ff88;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-top: 0.5rem;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 0.95rem;
    }
  }
`;

const HoverOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.4rem 1rem;
  border-radius: 5px;
  color: #00ff88;
  font-size: 0.85rem;
  opacity: 0;
  transform: translate(-50%, -40%);
  transition: 0.3s ease;
  pointer-events: none;
  z-index: 2;
`;

const Instruction = styled.div`
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #bbb;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
  text-align: center;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  p {
    color: #00ff88;
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const certifications = [
  {
    name: 'Python Programming Certificate',
    image: process.env.PUBLIC_URL + '/certificates/python.jpeg',
  },
  {
    name: 'Python and Flask Certificate (Udemy)',
    image: process.env.PUBLIC_URL + '/certificates/udemy.jpeg',
  },
  {
    name: 'NPTEL Certificate (Soft Skill Development)',
    image: process.env.PUBLIC_URL + '/certificates/nptel.jpeg',
  },
  {
    name: 'Titan Award Certificate (Best Work)',
    image: process.env.PUBLIC_URL + '/certificates/titenaward.png',
  },
  {
    name: 'AIML Intern Certificate (White & Box Tech)',
    image: process.env.PUBLIC_URL + '/certificates/AIML.png',
  }
];

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  return (
    <Section id="certifications">
      <Title>Certifications</Title>
      <Grid>
        {certifications.map((cert, index) => (
          <Card key={index} onClick={() => setSelected(cert)}>
            <h3>{cert.name}</h3>
            <Instruction>👆 Hover to preview</Instruction>
            <HoverOverlay className="overlay">👁️ View Certificate</HoverOverlay>
            <img src={cert.image} alt={cert.name} />
          </Card>
        ))}
      </Grid>

      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <ModalContent>
            <img src={selected.image} alt={selected.name} />
            <p>{selected.name}</p>
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
}
