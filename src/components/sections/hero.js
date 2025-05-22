import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 90vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 840px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello, I'm</h1>;
  const two = <h2 className="big-heading">Muhammad Salman Aziz.</h2>;
  const three = <h3 className="normal-heading">I build intelligent systems using AI.</h3>;
  const four = (
    <>
      <p>
        I’m an Electrical Engineer specializing in Machine Learning, Deep Learning, and Computer
        Vision, with a strong passion for AI research and development. Currently, I am exploring and
        applying AI in wireless communication systems, specifically in 5G and 6G technologies, as a
        researcher at{' '}
        <a href="https://nu.edu.pk/" target="_blank" rel="noreferrer">
          FAST, NUCES
        </a>
        .
      </p>
    </>
  );
  const five = (
    <a className="email-link" href={`mailto:${email}`}>
      Get in Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <div
          key={i}
          className="float-sal"
          style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
        >
          {item}
        </div>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
