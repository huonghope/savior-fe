import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../Contact/Section';
import ContactContent from '../Contact/ContactContent';

const Contact = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Contact </title>
      </MetaTags>
      <Section/>
      <ContactContent/>
    </React.Fragment>
  );
};

export default Contact;
