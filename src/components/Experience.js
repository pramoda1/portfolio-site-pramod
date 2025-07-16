import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.png';

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
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  flex: 1 1 300px;
  max-width: 500px;
  background:
    linear-gradient(to bottom, rgba(13, 13, 13, 0.92), rgba(13, 13, 13, 0.92)),
    url(${image}) no-repeat center center / cover;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #00ff88;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.1);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 255, 136, 0.2);
  }

  h3 {
    color: #00ff88;
    margin-bottom: 0.25rem;
  }

  h4 {
    color: #ccc;
    font-weight: normal;
    margin-bottom: 0.25rem;
  }

  span {
    display: block;
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 0.5rem;
  }

  ul {
    padding-left: 1rem;
    color: #bbb;
    font-size: 0.95rem;
    line-height: 1.5;

    li {
      list-style: disc;
      margin-bottom: 0.4rem;
    }
  }
`;

export default function Experience() {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <Grid>
        <Card>
          <h3>AI/ML Trainee</h3>
          <h4>White and Box Tech Product and Services</h4>
          <span>Feb 2025 – May 2025</span>
          <ul>
            <li>Hands-on experience in AI and ML projects.</li>
            <li>Performed data cleaning, model training, and testing.</li>
            <li>Collaborated using coding best practices in team environments.</li>
          </ul>
        </Card>

        <Card>
          <h3>Backend Development Intern</h3>
          <h4>Delhivery</h4>
          <span>May 2025 – Jul 2025</span>
          <ul>
            <li>Integrated backend services with databases and internal tools.</li>
            <li>Optimized APIs using caching, indexing, and query tuning.</li>
          </ul>
        </Card>
      </Grid>
    </Section>
  );
}
