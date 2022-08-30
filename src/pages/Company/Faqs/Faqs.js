import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Company/Faqs/Section';
import FaqContent from '../../Company/Faqs/FaqContent';

const Faqs = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>FAQs | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <FaqContent/>
    </React.Fragment>
  );
};

export default Faqs;
