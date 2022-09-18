import React from 'react';
import MetaTags from 'react-meta-tags';
import About from '../../../pages/Company/AboutUs/About';
import Section from '../../../pages/Company/AboutUs/Section';
import Counter from '../../../pages/Company/AboutUs/Counter';
import Features from '../../../pages/Company/AboutUs/Features';
import Cta from '../../../pages/Company/AboutUs/Cta';
import CompanyTestimonal from '../../../pages/Company/AboutUs/CompanyTestimonal';

const AboutUs = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>About Us </title>
      </MetaTags>
      <Section />
      <About />
      <Counter />
      <Features />
      <Cta />
      <CompanyTestimonal />
    </React.Fragment>
  );
};

export default AboutUs;
