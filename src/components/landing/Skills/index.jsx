import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import celebrationSnap from 'assets/illustrations/celebrate-positivity.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={celebrationSnap} alt="Gift yourself a Happiness Course!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Gift yourself a Happiness Course!</h1>
          <p>
            Relieve <b>stress</b> and <b>anxiety</b> Build up your <b>inner resilience</b> <b>Calm</b> your mind
          </p>
          <a href="https://aolt.in/491974" target="_blank" rel="noopener noreferrer">
            <Button style={{ marginLeft: 10 }}>Register Now!</Button>
          </a>
          <AnchorLink href="#contact">
            <Button style={{ marginLeft: 10, marginTop: 20 }}>Talk to us!</Button>
          </AnchorLink>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
