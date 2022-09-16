import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../Services/Section';
import ServicePage from '../Services/ServicePage';

const Services = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Services </title>
      </MetaTags>
      <Section />
      <ServicePage />
    </React.Fragment>
  );
};

export default Services;
