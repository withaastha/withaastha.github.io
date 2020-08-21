import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import meditationBuilding from 'assets/illustrations/meditate-building.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Aastha Kansal and I’m a life coach and faculty @ Art of Living!</h4>
          <a href="https://aolt.in/491974" target="_blank" rel="noopener noreferrer">
            <Button>Register for the upcoming Happiness Workshop!</Button>
          </a>
        </Details>
        <Thumbnail>
          <img src={meditationBuilding} alt="I’m Aastha and I’m a life coach!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
