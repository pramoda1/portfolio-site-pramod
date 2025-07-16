import React from 'react';
import styled from 'styled-components';
import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,
  FaGithub, FaGitlab, FaBitbucket, FaDocker, FaAndroid
} from 'react-icons/fa';
import {
  SiSpringboot, SiBootstrap, SiFlask, SiKubernetes, SiJenkins,
  SiMysql, SiSelenium, SiPytest, SiAmazonwebservices
} from 'react-icons/si';

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
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #aaa;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const SkillBox = styled.div`
  flex: 1 1 280px;
  max-width: 350px;
  background: #111;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.08);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 255, 136, 0.18);
  }

  h3 {
    color: #00ff88;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.6;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
  }

  ul li svg {
    font-size: 1rem;
  }
`;

export default function Technologies() {
  return (
    <Section id="tools">
      <Title>Skills & Technologies</Title>
      <Description>
        A categorized list of the skills, tools, and technologies I have learned and worked with.
      </Description>

      <Grid>
        <SkillBox>
          <h3>CSE Fundamentals</h3>
          <ul>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Programming Languages</h3>
          <ul>
            <li><FaJava /> Java</li>
            <li><FaPython /> Python</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Frontend Technologies</h3>
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React.js</li>
            <li><SiBootstrap /> Bootstrap</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Backend Technologies</h3>
          <ul>
            <li><SiFlask /> Flask</li>
            <li><SiSpringboot /> Spring Boot</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Mobile Development</h3>
          <ul>
            <li><FaAndroid /> Android Studio</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Databases</h3>
          <ul>
            <li><SiMysql /> MySQL</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Version Control</h3>
          <ul>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li><FaGitlab /> GitLab</li>
            <li><FaBitbucket /> Bitbucket</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>DevOps & Cloud</h3>
          <ul>
            <li><FaDocker /> Docker</li>
            <li><SiKubernetes /> Kubernetes</li>
            <li><SiJenkins /> Jenkins</li>
            <li><SiAmazonwebservices /> AWS</li>
          </ul>
        </SkillBox>

        <SkillBox>
          <h3>Testing Tools</h3>
          <ul>
            <li>JUnit</li>
            <li><SiPytest /> PyTest</li>
            <li><SiSelenium /> Selenium</li>
          </ul>
        </SkillBox>
      </Grid>
    </Section>
  );
}
