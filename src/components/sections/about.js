import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import useScrollAnimation from '@hooks/useScrollAnimation'; // Import your hook

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-gap: 100px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  p {
    margin: 20px 0 0;
    max-width: 700px;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 200px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  useScrollAnimation(); // Call the hook

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'C++',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Agentic AI',
    'Computer Vision',
    'MLOps',
    'Github',
    'Docker',
    'FastAPI',
    'PyTorch',
    'TensorFlow',
    'Keras',
    'OpenCV',
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Scikit-learn',
    'Hugging Face',
    'Natural Language Processing',
    'Wireless Communication',
    'Signal Processing',
    'Data Science',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading animate-float-in delay-1">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p className="animate-float-in delay-2">
              Hello, my name is Muhammad Salman Aziz, an early-career AI and machine learning
              engineer focused on practical, research-driven solutions.
            </p>
            <p className="animate-float-in delay-3">
              My interests include computer vision, generative AI, LLMs, MLOps, and multimodal AI
              applied through academic projects.
            </p>
            <p className="animate-float-in delay-4">
              I am currently conducting research at{' '}
              <a href="https://nu.edu.pk/" target="_blank" rel="noreferrer">
                FAST
              </a>{' '}
              on AI applications in wireless communication, with a particular focus on Orthogonal
              Time Frequency Space (OTFS) Modulation and Machine Learning based Channel Estimation
              for 5G/6G.
            </p>
            <p className="animate-float-in delay-5">
              I have contributed to the development of platforms such as{' '}
              <a href="https://lablab.ai/event/ai-agents-hack-with-lablab-and-mindsdb/opportunitiesaye/opportunities-nexus">
                Nexus
              </a>
              , designed to support students in exploring academic and research opportunities.
              Additionally,I have participated in international{' '}
              <a href="https://lablab.ai/u/@M_Salman_Aziz">
                AI-focused hackathons
              </a>
              .
            </p>
            <p className="animate-float-in delay-6">
              {' '}
              I hold a B.Sc. in <a>Electrical Engineering</a> (CGPA 3.7) from{' '}
              <a href="https://www.uetpeshawar.edu.pk/">UET, Peshawar</a>, being awarded multiple
              merit-based scholarships.
            </p>
            <p className="animate-float-in delay-7">
              {' '}
              Looking ahead, I plan to pursue a Master’s or Ph.D. in Computer Engineering or
              Electrical Engineering, with a focus on computer vision, multimodal AI, and AI
              hardware optimization.
            </p>

            <p className="animate-float-in delay-8">
              Technologies I have recently worked with include:
            </p>
          </div>

          <ul className="skills-list animate-float-in delay-9">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img animate-float-in delay-8"
              src="../../images/me1.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
