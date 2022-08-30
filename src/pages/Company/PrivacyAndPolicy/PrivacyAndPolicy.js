import React from 'react';
import MetaTags from 'react-meta-tags';
import PrivacyAndPolicyPage from '../../Company/PrivacyAndPolicy/PrivacyAndPolicyPage';
import Section from './Section';

const PrivacyAndPolicy = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Privacy & Policy | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <PrivacyAndPolicyPage/>
    </React.Fragment>
  );
};
export default PrivacyAndPolicy;
