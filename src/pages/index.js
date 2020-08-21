import React, { useState } from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, ContactDetails } from 'components/landing';
import axios from 'axios';

export default () => {
  const [courseURL, setCourseURL] = useState('https://www.artofliving.online/registration.php?event_id=491974');
  const [specialText, setSpecialText] = useState('Register for the upcoming Happiness Workshop! ');
  axios
    .get('http://aasthakansal.com/latest-course.json')
    .then(res => res.data)
    .then(
      result => {
        if (result.link) {
          setCourseURL(result.link);
        }
        setSpecialText(result.text);
      },
      error => {
        // eslint-disable-next-line no-console
        console.log('failed getting the url file', error);
      }
    );

  return (
    <Layout>
      <SEO />
      <Intro courseURL={courseURL} specialText={specialText} />
      <Skills courseURL={courseURL} specialText={specialText} />
      <Contact />
      <ContactDetails />
    </Layout>
  );
};
