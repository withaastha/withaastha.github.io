import React from 'react';
import { Container } from 'components/common';
import sitAndMeditate from 'assets/illustrations/joy-ride.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={sitAndMeditate} alt="Connect with us!" />
    </Thumbnail>
  </Wrapper>
);
