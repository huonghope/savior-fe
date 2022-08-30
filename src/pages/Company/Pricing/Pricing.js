import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Company/Pricing/Section';
import PricingPage from '../../Company/Pricing/PricingPage';
import Cta from '../../Company/Pricing/Cta';

const Pricing = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Pricing | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <PricingPage/>
      <Cta/>
    </React.Fragment>
  );
};

export default Pricing;
