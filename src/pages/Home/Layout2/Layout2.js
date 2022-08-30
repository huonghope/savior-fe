import React from 'react';
import MetaTags from 'react-meta-tags';
import Home from '../Home';
import Section from '../Layout2/Section';

const Layout2 = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Home | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <Home/>
    </React.Fragment>
  );
};
export default Layout2;
