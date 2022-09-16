import React from 'react';
import MetaTags from 'react-meta-tags';
import Home from '../Home';
import Section from '../Layout3/Section';

const Layout3 = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Home </title>
      </MetaTags>
      <Section/>
      <Home/>
    </React.Fragment>
  );
};
export default Layout3;
