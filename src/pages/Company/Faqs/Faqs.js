import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Company/Faqs/Section';
import FaqContent from '../../Company/Faqs/FaqContent';

const Faqs = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>FAQs </title>
      </MetaTags>
      <Section/>
      <FaqContent/>
    </React.Fragment>
  );
};

export default Faqs;
