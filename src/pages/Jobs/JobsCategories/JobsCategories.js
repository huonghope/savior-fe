import React from 'react';
import MetaTags from 'react-meta-tags';
import Categories from './Categories';
import Cta from './Cta';
import Section from './Section';

const JobsCategories = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Job Categories </title>
      </MetaTags>
      <Section/>
      <Categories/>
      <Cta/>
    </React.Fragment>
  );
};

export default JobsCategories;
