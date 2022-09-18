import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Blog/BlogMasonary/Section';
import MasonaryContent from '../../Blog/BlogMasonary/MasonaryContent';

const BlogMasonary = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Blog Masonary </title>
      </MetaTags>
      <Section />
      <MasonaryContent />
    </React.Fragment>
  );
};

export default BlogMasonary;
