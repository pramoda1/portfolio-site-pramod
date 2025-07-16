import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.png';
import { FaGithub } from 'react-icons/fa';

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4rem 2rem;
  scroll-margin-top: 80px;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #00ff88;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Card = styled.div`
  flex: 1 1 300px;
  max-width: 400px;
  border-radius: 10px;
  padding: 1.5rem;
  position: relative;
  background:
    linear-gradient(to bottom, rgba(13, 13, 13, 0.92), rgba(13, 13, 13, 0.92)),
    url(${image}) no-repeat center center / cover;
  border-left: 4px solid #00ff88;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.1);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 255, 136, 0.2);
  }

  h3 {
    color: #00ff88;
    margin-bottom: 0.5rem;
  }

  p {
    color: #ccc;
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${({ color }) => color || '#444'};
  color: white;
  font-size: 0.75rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const GitHubLink = styled.a`
  margin-top: 1rem;
  display: inline-block;
  color: #00ff88;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

export default function Projects() {
  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Grid>

        <Card>
          <h3>College Enquiry Chatbot</h3>
          <p>
            Full-stack chatbot for managing FAQs using Dialogflow and Flask. Features secure login, intelligent responses, and responsive UI.
          </p>
          <TechList>
            <TechTag color="#4285F4cc">Flask</TechTag>
            <TechTag color="#FF6F00cc">SQLAlchemy</TechTag>
            <TechTag color="#0F9D58cc">Dialogflow</TechTag>
            <TechTag color="#61dafb99">HTML</TechTag>
            <TechTag color="#2965f1aa">CSS</TechTag>
            <TechTag color="#f4b400cc">JavaScript</TechTag>
          </TechList>
          <GitHubLink href="https://github.com/pramoda1/mini_project" target="_blank">
            <FaGithub />
          </GitHubLink>
        </Card>

        <Card>
          <h3>Library Management System</h3>
          <p>
            Java desktop app to manage book issuance, returns, and student records. Built with Swing and JDBC.
          </p>
          <TechList>
            <TechTag color="#b07219cc">Java</TechTag>
            <TechTag color="#00758fcc">MySQL</TechTag>
            <TechTag color="#6db33fcc">JDBC</TechTag>
            <TechTag color="#f89820cc">Swing</TechTag>
            <TechTag color="#ffcc00cc">SQL</TechTag>
          </TechList>
          <GitHubLink href="https://github.com/pramoda1/LibraryManagementSystem/tree/main" target="_blank">
            <FaGithub />
          </GitHubLink>
        </Card>

        <Card>
          <h3>Portfolio Website</h3>
          <p>
            A responsive React portfolio to showcase projects, experience, and skills. Includes animations and smooth scroll.
          </p>
          <TechList>
            <TechTag color="#61dafbcc">React</TechTag>
            <TechTag color="#264de4cc">HTML</TechTag>
            <TechTag color="#2965f1cc">CSS</TechTag>
            <TechTag color="#f0db4fcc">JavaScript</TechTag>
            <TechTag color="#38b2accf">Tailwind</TechTag>
          </TechList>
          <GitHubLink href="https://github.com/pramoda1" target="_blank">
            <FaGithub />
          </GitHubLink>
          <p><i>Day by day is change based on process....</i></p>
        </Card>

        <Card>
          <h3>Parkinson's Voice Detection</h3>
          <p>
            Python desktop app to detect Parkinson’s disease using voice ML. Includes waveform visualization and text-to-speech feedback.
          </p>
          <TechList>
            <TechTag color="#3572A5cc">Python</TechTag>
            <TechTag color="#f4b400cc">Librosa</TechTag>
            <TechTag color="#ff6f00cc">Tkinter</TechTag>
            <TechTag color="#0f9d58cc">Joblib</TechTag>
            <TechTag color="#2965f1aa">Matplotlib</TechTag>
            <TechTag color="#a97bffcc">Machine Learning</TechTag>
          </TechList>
          <GitHubLink href="https://github.com/pramoda1/Early-Detection-of-Parkinson-s-Disease-Using-Voice/tree/main" target="_blank">
            <FaGithub />
          </GitHubLink>
        </Card>

      </Grid>
    </Section>
  );
}
